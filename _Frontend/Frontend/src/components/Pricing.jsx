import { Link } from "react-router-dom";
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
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="px-3 py-1 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[12px] font-medium text-[#0F172A]">
          Pricing
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-center text-[40px] md:text-[42px] leading-tight font-bold text-[#0F172A]">
        One program. Two ways in.
      </h2>

      <p className="mt-3 text-center text-[15px] text-[#475569]">
        Next batch begins <strong>2 August.</strong> Seats are limited to 5 per cohort.
      </p>

      {/* Cards */}
      <div className="mt-10 grid lg:grid-cols-2 gap-5">

        {/* Left Card */}
        <div className="rounded-[22px] border border-gray-200 bg-white p-6 shadow-sm flex flex-col">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-[15px] text-[#475569]">
                Group Cohort
              </p>

              <div className="flex items-end gap-2 mt-2">

                <span className="text-[40px] font-bold text-[#0F172A]">
                  ₹9,999
                </span>

                <span className="text-[14px] text-[#475569] mb-1.5">
                  + 18% GST
                </span>

              </div>

              <p className="mt-1 text-[13px] text-[#64748B]">
                Up to 8 weeks · Max 5 learners
              </p>

            </div>

            <span className="px-3 py-1 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[13px]">
              Next: 2 Aug
            </span>

          </div>

          <div className="mt-6 space-y-3 flex-1">

            {groupFeatures.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[15px]"
              >
                <span className="text-[#10B981] text-base">
                  ✓
                </span>

                <span>{item}</span>
              </div>
            ))}

          </div>

          <Link
            to="/form1"
            className="mt-7 w-full rounded-full border border-gray-300 py-3 text-[16px] font-semibold transition hover:bg-gray-50 text-center block"
            >
            Apply Now →
            </Link>

        </div>

        {/* Right Card */}

        <div className="rounded-[22px] bg-gradient-to-br from-[#0F172A] via-[#12233F] to-[#065F5B] p-6 text-white shadow-sm flex flex-col">

          <div className="flex justify-between items-start">

            <div>

              <p className="text-[15px] font-semibold text-[#10B981]">
                1:1 Accelerator
              </p>

              <div className="flex items-end gap-2 mt-2">

                <span className="text-[40px] font-bold">
                  ₹17,999
                </span>

                <span className="text-[14px] mb-1.5">
                  + 18% GST
                </span>

              </div>

              <p className="mt-1 text-[13px] text-gray-300">
                Fully personalized coaching
              </p>

            </div>

            <span className="rounded-full bg-[#10B981] px-3 py-1 text-[13px] font-semibold text-[#0F172A]">
              Most Personal
            </span>

          </div>

          <div className="mt-6 space-y-3 flex-1">

            {personalFeatures.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[15px]"
              >
                <span className="text-base text-[#10B981]">
                  ✓
                </span>

                <span>{item}</span>
              </div>
            ))}

          </div>

          <Link
            to="/form1"
            className="mt-7 w-full rounded-full bg-white py-3 text-[16px] font-semibold text-[#0F172A] transition hover:bg-gray-100 text-center block"
            >
            Apply for 1:1 →
            </Link>

        </div>

      </div>

    </section>
  );
}