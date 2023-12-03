import { useSignal } from "@preact/signals";
import SelectShowTime from "../viewing/selectShowTime.tsx";
import { ShowTime } from "@/utils/db/kv.types.ts";

const ShowtimeSelector = ({
  defaultShowTime,
  showTimes,
}: {
  defaultShowTime: string;
  showTimes: Partial<ShowTime>[];
}) => {
  const changeOpen = useSignal(false);

  const setShowTime = (showTime: string) => {
    if (showTime == defaultShowTime) return;
    const url = new URL(window.location.href);

    url.searchParams.set("id", showTime);

    location.href = url.toString();
  };

  return (
    <div class="mt-8 mb-2 ml-auto">
      <SelectShowTime
        all={true}
        changeOpen={changeOpen}
        showTime={defaultShowTime}
        showTimes={showTimes}
        setShowTime={setShowTime}
      />
    </div>
  );
};

export default ShowtimeSelector;
