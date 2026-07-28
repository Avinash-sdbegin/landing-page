import { Check, X } from "lucide-react";

export default function Difference() {
  const left = [
    "Recorded videos",
    "Theory-first",
    "Certificates",
    "Passive learning",
    "One-way lectures",
    "No accountability",
  ];

  const right = [
    "Live coaching",
    "Small cohorts",
    "Weekly practice",
    "Personalized feedback",
    "Proof-of-work",
    "Interview readiness",
    "Real execution",
  ];

  return (
    <section className="max-w-[1450px] mx-auto px-8 py-16">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-[11px] font-medium text-[#0F172A]">
          Why GrowthYari
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-5 text-center text-[50px] font-semibold leading-[1] tracking-[-0.03em] text-[#0F172A]">
        What makes it different.
      </h2>

      {/* Cards */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">

        {/* LEFT */}
        <div className="rounded-[28px] border border-[#E5E7EB] bg-white p-6">

          <div className="mb-6 flex items-center justify-between">

            <h3 className="text-[16px] font-semibold text-[#475569]">
              Traditional courses
            </h3>

            <span className="rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-[11px] font-semibold text-red-500">
              Passive
            </span>

          </div>

          <div className="space-y-3">
            {left.map((item) => (
              <div
                key={item}
                className="flex h-[50px] items-center gap-3 rounded-xl bg-[#F8FAFC] px-5"
              >
                <X
                  size={17}
                  strokeWidth={2}
                  className="text-red-500 flex-shrink-0"
                />

                <span className="text-[13px] text-[#475569] line-through">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="rounded-[28px] bg-gradient-to-br from-[#121E39] via-[#112A45] to-[#0A6B66] p-6">

          <div className="mb-6 flex items-center justify-between">

            <h3 className="text-[16px] font-semibold text-white">
              GrowthYari
            </h3>

            <span className="rounded-full bg-[#10C77B] px-4 py-1.5 text-[11px] font-semibold text-[#0F172A]">
              Active
            </span>

          </div>

          <div className="space-y-3">
            {right.map((item) => (
              <div
                key={item}
                className="flex h-[50px] items-center gap-3 rounded-xl bg-[#203B57]/90 px-5"
              >
                <Check
                  size={17}
                  strokeWidth={2}
                  className="text-[#16E39A] flex-shrink-0"
                />

                <span className="text-[13px] text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}