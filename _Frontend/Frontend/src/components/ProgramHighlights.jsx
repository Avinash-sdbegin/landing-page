import {
  Video,
  Clock3,
  Users,
  CalendarDays,
} from "lucide-react";

export default function ProgramHighlights() {
  const items = [
    {
      icon: Video,
      text: "Live Online Sessions",
    },
    {
      icon: Clock3,
      text: "Up to 8 Weeks",
    },
    {
      icon: Users,
      text: "Max 5 Learners",
    },
    {
      icon: CalendarDays,
      text: "New Batch Monthly",
    },
  ];

  return (
    <section className="py-5">
      <div className="mx-auto flex max-w-[1080px] items-center justify-center gap-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex h-[42px] min-w-[190px] items-center justify-center gap-2 rounded-full border border-[#DCE3EB] bg-white px-5 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
            >
              <Icon
                size={15}
                strokeWidth={2}
                className="text-[#10B981]"
              />

              <span className="text-[14px] font-medium text-[#0F172A] whitespace-nowrap">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}