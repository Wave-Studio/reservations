import { useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
// Currently causes issues, hopefully it's fixed soon
import { BarcodeDetector, DetectedBarcode } from "npm:barcode-detector";
import { Ticket } from "@/utils/db/kv.types.ts";
import { useSignal } from "@preact/signals";

export default function Scanner({
  className,
  eventID,
}: {
  className?: string;
  eventID: string;
}) {
  const error = useSignal<string | null>(null);
  const isInitialized = useSignal(false);
  const currentTicket = useSignal<
    | { code: string; status: "invalid" | "loading"; ticketData: null }
    | {
        code: string;
        status: "used" | "valid";
        ticketData: Ticket;
      }
    | null
  >(null);

  useEffect(() => {
    (async () => {
      if (!IS_BROWSER) return;
      if (isInitialized.value) return;
      isInitialized.value = true;
      const canvas = document.getElementById("scanui") as HTMLCanvasElement;
      const barcodeReaderAPI = window["BarcodeDetector"] ?? BarcodeDetector;
      if (barcodeReaderAPI == null) {
        error.value =
          "BarcodeDetector API is required but not supported on your device! Please try another browser.";
        return;
      }
      const reader = new barcodeReaderAPI({
        formats: ["qr_code"],
      });
      if (canvas == null) return;
      const ctx = canvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (ctx == null) {
        error.value =
          "2D HTML Canvas is required but not supported on your device! Please try another browser.";
        return;
      }

      try {
        const devices = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const video = document.getElementById("camera") as HTMLVideoElement;
        const infoText = document.getElementById("scantext") as HTMLDivElement;
        let lastStr = infoText.innerText;

        const updateStringIfChanged = (str: string) => {
          if (lastStr != str) {
            lastStr = str;
            infoText.innerText = str;
          }
        };

        if (!video) return;

        video.srcObject = devices;
        video.onloadedmetadata = () => {
          video.play();
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          const checkedCodes: Map<
            string,
            | { status: "loading" | "invalid"; checkedAt: number }
            | {
                status: "valid" | "used";
                ticketData: Ticket;
                checkedAt: number;
              }
          > = new Map();

          setInterval(() => {
            for (const [code, codeData] of checkedCodes) {
              const timeSinceScan = Date.now() - codeData.checkedAt;

              if (codeData.status == "loading" && timeSinceScan > 5 * 1000) {
                checkedCodes.delete(code);
              }

              if (timeSinceScan > 15 * 1000) {
                checkedCodes.delete(code);
              }
            }
          }, 5 * 1000);

          const fetchCodeInfo = async (code: string) => {
            const res = await fetch(`/api/events/fetch`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ticketID: code, eventID: eventID }),
            });
            const data = await (res.json() as Promise<Ticket>);

            if (res.status == 400) {
              checkedCodes.set(code, {
                status: "invalid",
                checkedAt: Date.now(),
              });
            } else {
              checkedCodes.set(code, {
                status: data.hasBeenUsed ? "used" : "valid",
                ticketData: data,
                checkedAt: Date.now(),
              });
            }
          };

          const lookForBarcodes = async () => {
            const codes = await reader.detect(video);
            if (codes.length > 0) {
              const largestCode: {
                size: number;
                code: DetectedBarcode | null;
              } = {
                size: 0,
                code: null,
              };

              for (const code of codes) {
                if (
                  code.boundingBox.width * code.boundingBox.height >
                  largestCode.size
                ) {
                  largestCode.size =
                    code.boundingBox.width * code.boundingBox.height;
                  largestCode.code = code;
                }
              }

              if (largestCode.code != undefined) {
                const code = largestCode.code;

                if (!checkedCodes.has(code.rawValue)) {
                  checkedCodes.set(code.rawValue, {
                    status: "loading",
                    checkedAt: Date.now(),
                  });

                  fetchCodeInfo(code.rawValue);
                }

                const codeData = checkedCodes.get(code.rawValue)!;

                const ticketObj = {
                  code: code.rawValue,
                  status: codeData.status,
                  // @ts-expect-error types
                  ticketData: Object.hasOwn(codeData, "ticketData")
                    ? codeData.ticketData
                    : null,
                };

                if (currentTicket.value != ticketObj) {
                  currentTicket.value = ticketObj;
                }

                ctx.fillStyle = ctx.strokeStyle = {
                  invalid: "red",
                  loading: "gray",
                  valid: "green",
                  used: "orange",
                }[codeData.status];

                ctx.lineWidth = 10;
                ctx.moveTo(code.cornerPoints[0].x, code.cornerPoints[0].y);
                ctx.beginPath();

                let lowestY = 0;
                let leftmostX = canvas.width;
                let rightmostX = 0;

                for (const point of code.cornerPoints) {
                  lowestY = Math.max(lowestY, point.y);
                  leftmostX = Math.min(leftmostX, point.x);
                  rightmostX = Math.max(rightmostX, point.x);
                  ctx.lineTo(point.x, point.y);
                }

                ctx.closePath();
                ctx.stroke();

                switch (codeData.status) {
                  case "loading": {
                    updateStringIfChanged("Loading...");
                    break;
                  }

                  case "invalid": {
                    updateStringIfChanged("Invalid code!");
                    break;
                  }

                  case "valid": {
                    updateStringIfChanged("Scan ticket");
                    break;
                  }

                  case "used": {
                    updateStringIfChanged("Ticket already used!");
                    break;
                  }
                }
              } else {
                currentTicket.value = null;
              }
            }
          };

          const loop = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            lookForBarcodes();

            requestAnimationFrame(loop);
          };

          requestAnimationFrame(loop);
        };
      } catch (e) {
        error.value = e.message;
        return;
      }
    })();
  }, [IS_BROWSER]);

  return (
    <>
      <video
        id="camera"
        hidden={true}
        autoPlay={true}
        playsInline={true}
        muted={true}
        className="border-none"
      />
      {error.value}
      <div class="flex flex-col items-center max-w-full relative">
        <canvas id="scanui" className={className}></canvas>
        <div
          class="absolute rounded-md bg-black/50 backdrop-blur px-4 py-2 text-white bottom-4"
          id="scantext"
        >
          Bring a ticket code into view
        </div>
      </div>
    </>
  );
}
