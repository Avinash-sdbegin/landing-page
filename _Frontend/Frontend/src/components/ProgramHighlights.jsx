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
    <section className="py-6">
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex h-[54px] min-w-[275px] items-center justify-center gap-3 rounded-full border border-[#DCE3EB] bg-white px-7 shadow-[0_1px_3px_rgba(15,23,42,0.04)]"
            >
              <Icon
                size={19}
                strokeWidth={2}
                className="text-[#10B981]"
              />

              <span className="text-[17px] font-medium text-[#0F172A]">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}