import {
  GraduationCap,
  BriefcaseBusiness,
  Rocket,
  ArrowRightLeft,
} from "lucide-react";

export default function Audience() {
  const cards = [
    {
      icon: GraduationCap,
      label: "STUDENTS & GRADUATES",
      title: "Launch your career with practical skills.",
      desc: "Move beyond your degree with communication, sales and business fundamentals that hiring managers actually test for.",
    },
    {
      icon: BriefcaseBusiness,
      label: "PROFESSIONALS",
      title: "Accelerate your career growth.",
      desc: "Sharpen the skills behind promotions — clarity, influence, executive presence and confident execution.",
    },
    {
      icon: Rocket,
      label: "ENTREPRENEURS",
      title: "Grow your business.",
      desc: "Sell better, close faster and communicate with the clarity your product and team deserve.",
    },
    {
      icon: ArrowRightLeft,
      label: "CAREER SWITCHERS",
      title: "Build for high-growth roles.",
      desc: "Transition into Sales, BD, Partnerships, CS or GTM roles with real skills and a portfolio to prove it.",
    },
  ];

  return (
    <section className="max-w-[1450px] mx-auto px-8 py-14">

      {/* Top */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">

        <div>
          <div className="inline-flex rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3.5 py-1 text-[10px] font-medium text-[#0F172A]">
            Who it's for
          </div>

          <h2 className="mt-4 max-w-[560px] text-[42px] font-medium leading-[1.03] tracking-[-0.04em] text-[#0F172A]">
            Built for the people who want to move.
          </h2>
        </div>

        <p className="max-w-[470px] pt-8 text-[14px] leading-7 text-[#475569]">
          One program, four kinds of momentum. Choose the outcome that
          matches where you are.
        </p>

      </div>

      {/* Cards */}

      <div className="mt-10 grid gap-5 md:grid-cols-2">

        {cards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[22px] border border-[#E5E7EB] bg-white px-6 py-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981]">

                  <Icon
                    size={18}
                    strokeWidth={2}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#10B981]">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-[16px] font-semibold leading-6 text-[#0F172A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                    {item.desc}
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}