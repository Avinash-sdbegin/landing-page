import {
  ClipboardCheck,
  PhoneCall,
  UserRoundCheck,
  Monitor,
  Dumbbell,
  FolderOpen,
  Medal,
} from "lucide-react";

const steps = [
  {
    no: "01",
    icon: ClipboardCheck,
    title: "Apply",
    desc: "Share your goals and background.",
  },
  {
    no: "02",
    icon: PhoneCall,
    title: "Career Assessment",
    desc: "A 1:1 call to map your growth path.",
  },
  {
    no: "03",
    icon: UserRoundCheck,
    title: "Selection",
    desc: "We admit learners we can genuinely move.",
  },
  {
    no: "04",
    icon: Monitor,
    title: "Live Training",
    desc: "Small-cohort sessions with a working coach.",
  },
  {
    no: "05",
    icon: Dumbbell,
    title: "Practice & Activities",
    desc: "Weekly roleplays, drills and reviews.",
  },
  {
    no: "06",
    icon: FolderOpen,
    title: "Proof-of-Work",
    desc: "Build a portfolio recruiters can verify.",
  },
  {
    no: "07",
    icon: Medal,
    title: "Career Opportunities",
    desc: "Interview readiness and warm introductions.",
  },
];

export default function Process() {
  return (
    <section className="max-w-[1450px] mx-auto px-8 py-14">

      {/* Badge */}
      <div className="inline-flex rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-[12px] font-medium text-[#0F172A]">
        How it works
      </div>

      {/* Heading */}
      <h2 className="mt-4 max-w-3xl text-[44px] leading-[48px] font-bold tracking-[-0.03em] text-[#0F172A]">
        A clear path from application to opportunity.
      </h2>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">

        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.no}
              className="rounded-[18px] border border-gray-200 bg-white px-4 py-4 min-h-[220px] shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981]">
                  <Icon size={18} strokeWidth={2.2} className="text-white" />
                </div>

                <span className="text-[18px] font-bold text-gray-400">
                  {step.no}
                </span>

              </div>

              <h3 className="mt-5 text-[15px] font-semibold leading-6 text-[#0F172A]">
                {step.title}
              </h3>

              <p className="mt-2 text-[13px] leading-6 text-[#64748B]">
                {step.desc}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}