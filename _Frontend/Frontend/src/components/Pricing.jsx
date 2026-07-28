export default function Pricing() {
  const groupFeatures = [
    "Live small-cohort sessions",
    "Weekly practice activities",
    "Proof-of-work portfolio",
    "Career guidance",
    "Interview preparation",
  ];

  const personalFeatures = [
    "Everything in Group Program",
    "Personalized coaching",
    "Weekly 1:1 reviews",
    "Custom learning roadmap",
    "Priority support",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium">
          Pricing
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center text-[58px] leading-[62px] font-extrabold text-[#0F172A]">
        One program. Two ways in.
      </h2>

      <p className="mt-5 text-center text-[20px] text-[#475569]">
        Next batch begins <strong>2 August.</strong> Seats are limited to 5 per cohort.
      </p>

      {/* Pricing Cards */}
      <div className="mt-16 grid lg:grid-cols-2 gap-8">

        {/* Left Card */}
        <div className="rounded-[34px] border border-gray-200 bg-white p-10 shadow-sm">

          <div className="flex justify-between items-start">

            <div>
              <p className="text-[20px] text-[#475569]">
                Group Cohort
              </p>

              <div className="flex items-end gap-3 mt-4">
                <span className="text-[60px] font-extrabold text-[#0F172A]">
                  ₹9,999
                </span>

                <span className="text-[18px] text-[#475569] mb-3">
                  + 18% GST
                </span>
              </div>

              <p className="text-[#64748B] mt-2">
                Up to 8 weeks · Max 5 learners
              </p>
            </div>

            <span className="px-5 py-2 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[18px]">
              Next: 2 Aug
            </span>

          </div>

          <div className="mt-10 space-y-5">
            {groupFeatures.map((item) => (
              <div key={item} className="flex items-center gap-4 text-[22px]">
                <span className="text-[#10B981]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-12 w-full py-5 rounded-full border border-gray-300 text-[22px] font-semibold hover:bg-gray-50">
            Apply Now →
          </button>

        </div>

        {/* Right Card */}

        <div className="rounded-[34px] bg-gradient-to-br from-[#0F172A] via-[#12233F] to-[#065F5B] p-10 text-white">

          <div className="flex justify-between">

            <div>

              <p className="text-[#10B981] text-[20px] font-semibold">
                1:1 Accelerator
              </p>

              <div className="flex items-end gap-3 mt-4">
                <span className="text-[60px] font-extrabold">
                  ₹17,999
                </span>

                <span className="text-[18px] mb-3">
                  + 18% GST
                </span>
              </div>

              <p className="text-gray-300 mt-2">
                Fully personalized coaching
              </p>

            </div>

            <span className="px-5 py-2 rounded-full bg-[#10B981] text-[#0F172A] font-bold">
              Most Personal
            </span>

          </div>

          <div className="mt-10 space-y-5">
            {personalFeatures.map((item) => (
              <div key={item} className="flex items-center gap-4 text-[22px]">
                <span className="text-[#10B981]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-12 w-full py-5 rounded-full bg-white text-[#0F172A] text-[22px] font-bold">
            Apply for 1:1 →
          </button>

        </div>

      </div>

    </section>
  );
}