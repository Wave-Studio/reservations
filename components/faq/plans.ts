export const plans: {
  name: string;
  cost: number;
  features: string[];
  best: boolean;
  color: string;
}[] = [
  {
    name: "Free Forever",
    best: false,
    cost: 0.0,
    features: [
      "1 concurrent event",
      "2 team slots",
      "Up to 75 attendees per event",
      "10 day post-event persistance",
      "Host free and paid events",
    ],
    color: "bg-gray-300",
  },
  {
    name: "Plus",
    best: true,
    cost: 11.99,
    features: [
      "2 concurrent events",
      "Purchase additional concurrent event slots for $9 each",
      "10 team slots",
      "30 day post-event persistance",
      "Up to 250 attendees per event",
      "Host free and paid events",
      "Basic email customization",
      "Event color themes",
    ],
    color: "bg-gradient-to-b from-theme-normal to-[#d1552c]",
  },
  {
    name: "Pro",
    cost: 24.99,
    best: false,
    features: [
      "4 concurrent events",
      "Purchase additional concurrent event slots for $5 each",
      "25 team slots",
      "60 day post-event persistance",
      "Event archival",
      "Purchase additional team slots for 75¢ each",
      "Up to 500 attendees per event",
      "Host free and paid events",
      "Full event and email customization",
      "Event color themes",
    ],
    color: "!bg-purple-600",
  },
  {
    name: "Enterprise",
    cost: -1,
    best: false,
    features: ["only for one event", "up to 500 attendees", "25 team slots"],
    color: "bg-blue-800",
  },
];
