export default function Approach() {
  const steps = [
    { step: "STEP 1", title: "Learning", icon: "📖" },
    { step: "STEP 2", title: "Practice", icon: "🏋️" },
    { step: "STEP 3", title: "Feedback", icon: "💬" },
    { step: "STEP 4", title: "Execution", icon: "🎯" },
    { step: "STEP 5", title: "Growth", icon: "📈" },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-[#D9FFF0] blur-[140px] opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium text-[#0F172A]">
          Our approach
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-[56px] leading-[62px] font-extrabold text-[#0F172A]">
          Introducing{" "}
          <span className="text-[#10B981]">
            GrowthYari.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-4xl mx-auto text-[18px] leading-10 text-[#475569]">
          A deliberate loop that turns learners into operators — from first
          concept to career and business growth.
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">

          {steps.map((item) => (
            <div
              key={item.step}
              className="relative rounded-[28px] border border-gray-200 bg-white p-7 text-left shadow-sm"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] flex items-center justify-center text-white text-2xl">
                {item.icon}
              </div>

              <p className="mt-6 text-[13px] tracking-[3px] text-[#64748B]">
                {item.step}
              </p>

              <h3 className="mt-2 text-[18px] font-bold text-[#0F172A]">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}