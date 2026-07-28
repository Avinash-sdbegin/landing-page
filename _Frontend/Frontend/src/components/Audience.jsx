export default function Audience() {
  const cards = [
    {
      icon: "🎓",
      label: "STUDENTS & GRADUATES",
      title: "Launch your career with practical skills.",
      desc: "Move beyond your degree with communication, sales and business fundamentals that hiring managers actually test for.",
    },
    {
      icon: "💼",
      label: "PROFESSIONALS",
      title: "Accelerate your career growth.",
      desc: "Sharpen the skills behind promotions — clarity, influence, executive presence and confident execution.",
    },
    {
      icon: "🚀",
      label: "ENTREPRENEURS",
      title: "Grow your business.",
      desc: "Sell better, close faster and communicate with the clarity your product and team deserve.",
    },
    {
      icon: "🔄",
      label: "CAREER SWITCHERS",
      title: "Build for high-growth roles.",
      desc: "Transition into Sales, BD, Partnerships, CS or GTM roles with real skills and a portfolio to prove it.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Top */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        <div>
          <div className="inline-flex px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium">
            Who it's for
          </div>

          <h2 className="mt-6 text-[56px] leading-[60px] font-extrabold text-[#0F172A]">
            Built for the people who want to move.
          </h2>
        </div>

        <p className="text-[18px] leading-9 text-[#475569] pt-14">
          One program, four kinds of momentum. Choose the outcome that
          matches where you are.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-7 mt-16">

        {cards.map((item) => (
          <div
            key={item.title}
            className="rounded-[30px] border border-gray-200 bg-white p-10 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex gap-6">

              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] flex items-center justify-center text-white text-2xl shrink-0">
                {item.icon}
              </div>

              <div>

                <p className="text-[#10B981] text-[14px] tracking-[3px] font-semibold">
                  {item.label}
                </p>

                <h3 className="mt-3 text-[22px] font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[17px] leading-8 text-[#64748B]">
                  {item.desc}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}