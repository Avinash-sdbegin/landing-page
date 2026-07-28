import {
  MessageCircle,
  Target,
  Compass,
  BarChart3,
} from "lucide-react";

export default function Problem() {
  const cards = [
    {
      icon: MessageCircle,
      title: "Communication gaps",
      desc: "Ideas get lost because the message doesn't land — in meetings, calls or interviews.",
    },
    {
      icon: Target,
      title: "No practical execution",
      desc: "Degrees teach theory. Real careers reward people who can act, sell and deliver.",
    },
    {
      icon: Compass,
      title: "Missing confidence",
      desc: "Without deliberate practice, professionals freeze in the moments that matter most.",
    },
    {
      icon: BarChart3,
      title: "No proof of work",
      desc: "Recruiters and clients hire evidence — recordings, portfolios and outcomes, not just certificates.",
    },
  ];

  return (
    <section className="max-w-[1450px] mx-auto px-8 py-16">

      {/* Badge */}
      <div className="inline-flex rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-[11px] font-medium text-[#0F172A]">
        The problem
      </div>

      {/* Heading */}
      <h2 className="mt-5 max-w-[720px] text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F172A]">
        Why most people struggle to grow.
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-[900px] text-[15px] leading-7 text-[#475569]">
        People graduate with degrees and certificates but struggle in the real
        world because they lack communication, confidence, execution and proof
        that they can actually perform.
      </p>

      {/* Cards */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-[24px] border border-[#E5E7EB] bg-white px-7 py-7 shadow-sm transition hover:shadow-md"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8FAFC]">
                <Icon
                  size={20}
                  strokeWidth={2}
                  className="text-[#0F172A]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-[18px] font-semibold leading-7 text-[#0F172A]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-8 text-[#64748B]">
                {card.desc}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}