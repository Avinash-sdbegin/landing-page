export default function Process() {
  const steps = [
    {
      no: "01",
      icon: "📝",
      title: "Apply",
      desc: "Share your goals and background.",
    },
    {
      no: "02",
      icon: "📞",
      title: "Career Assessment",
      desc: "A 1:1 call to map your growth path.",
    },
    {
      no: "03",
      icon: "👤",
      title: "Selection",
      desc: "We admit learners we can genuinely move.",
    },
    {
      no: "04",
      icon: "🖥️",
      title: "Live Training",
      desc: "Small-cohort sessions with a working coach.",
    },
    {
      no: "05",
      icon: "🏋️",
      title: "Practice & Activities",
      desc: "Weekly roleplays, drills and reviews.",
    },
    {
      no: "06",
      icon: "📂",
      title: "Proof-of-Work",
      desc: "Build a portfolio recruiters can verify.",
    },
    {
      no: "07",
      icon: "🏅",
      title: "Career Opportunities",
      desc: "Interview readiness and warm introductions.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Badge */}
      <div className="inline-flex px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium">
        How it works
      </div>

      {/* Heading */}
      <h2 className="mt-6 max-w-4xl text-[58px] leading-[62px] font-extrabold text-[#0F172A]">
        A clear path from application to opportunity.
      </h2>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">

        {steps.map((step) => (
          <div
            key={step.no}
            className="rounded-[30px] border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">

              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] flex items-center justify-center text-white text-2xl">
                {step.icon}
              </div>

              <span className="text-[28px] font-bold text-gray-400">
                {step.no}
              </span>

            </div>

            <h3 className="mt-8 text-[18px] font-bold text-[#0F172A] leading-7">
              {step.title}
            </h3>

            <p className="mt-4 text-[16px] leading-8 text-[#64748B]">
              {step.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}