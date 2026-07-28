import {
  BookOpen,
  Dumbbell,
  MessageCircle,
  Target,
  TrendingUp,
} from "lucide-react";

export default function Approach() {
  const steps = [
    { step: "STEP 1", title: "Learning", icon: BookOpen },
    { step: "STEP 2", title: "Practice", icon: Dumbbell },
    { step: "STEP 3", title: "Feedback", icon: MessageCircle },
    { step: "STEP 4", title: "Execution", icon: Target },
    { step: "STEP 5", title: "Growth", icon: TrendingUp },
  ];

  return (
    <section className="relative overflow-hidden py-16">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#D9FFF0] blur-[120px] opacity-60" />

      <div className="relative mx-auto max-w-[1450px] px-8 text-center">

        {/* Badge */}
        <div className="inline-flex rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-[11px] font-medium text-[#0F172A]">
          Our approach
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0F172A]">
          Introducing{" "}
          <span className="bg-gradient-to-r from-[#0F766E] to-[#10B981] bg-clip-text text-transparent">
            GrowthYari.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-7 text-[#475569]">
          A deliberate loop that turns learners into operators — from first
          concept to career and business growth.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-5">

          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.step} className="relative flex items-center">

                <div className="w-full rounded-[22px] border border-[#E5E7EB] bg-white px-6 py-5 text-left shadow-sm transition hover:shadow-md">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981]">
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="text-white"
                    />
                  </div>

                  <p className="mt-4 text-[10px] font-medium tracking-[0.22em] text-[#64748B]">
                    {item.step}
                  </p>

                  <h3 className="mt-1 text-[16px] font-semibold text-[#0F172A]">
                    {item.title}
                  </h3>

                </div>

                {index !== steps.length - 1 && (
                  <div className="absolute -right-3 hidden text-2xl text-[#94A3B8] md:block">
                    →
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}