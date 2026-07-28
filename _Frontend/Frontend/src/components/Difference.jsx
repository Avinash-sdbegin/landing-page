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
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium">
          Why GrowthYari
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center text-[58px] leading-[64px] font-extrabold text-[#0F172A]">
        What makes it different.
      </h2>

      {/* Cards */}
      <div className="mt-16 grid lg:grid-cols-2 gap-8">

        {/* Left */}
        <div className="rounded-[34px] border border-gray-200 bg-white p-10">

          <div className="flex justify-between items-center mb-10">
            <h3 className="text-[22px] font-bold text-[#475569]">
              Traditional courses
            </h3>

            <span className="px-5 py-2 rounded-full bg-red-50 text-red-500 border border-red-200 font-semibold">
              Passive
            </span>
          </div>

          <div className="space-y-5">
            {left.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#F8FAFC] px-6 py-5 flex items-center gap-5"
              >
                <span className="text-red-500 text-2xl">✕</span>

                <span className="text-[18px] text-[#475569] line-through">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right */}
        <div className="rounded-[34px] p-10 bg-gradient-to-br from-[#0F172A] via-[#12233F] to-[#065F5B]">

          <div className="flex justify-between items-center mb-10">

            <h3 className="text-[22px] font-bold text-white">
              GrowthYari
            </h3>

            <span className="px-5 py-2 rounded-full bg-[#10B981] text-[#0F172A] font-bold">
              Active
            </span>

          </div>

          <div className="space-y-5">
            {right.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#1E3650]/70 px-6 py-5 flex items-center gap-5"
              >
                <span className="text-[#10B981] text-2xl">✓</span>

                <span className="text-[18px] text-white">
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