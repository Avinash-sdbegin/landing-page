export default function Problem() {
  const cards = [
    {
      icon: "💬",
      title: "Communication gaps",
      desc: "Ideas get lost because the message doesn't land — in meetings, calls or interviews.",
    },
    {
      icon: "🎯",
      title: "No practical execution",
      desc: "Degrees teach theory. Real careers reward people who can act, sell and deliver.",
    },
    {
      icon: "🧭",
      title: "Missing confidence",
      desc: "Without deliberate practice, professionals freeze in the moments that matter most.",
    },
    {
      icon: "📊",
      title: "No proof of work",
      desc: "Recruiters and clients hire evidence — recordings, portfolios and outcomes, not just certificates.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-5 py-2 text-[15px] font-medium text-[#0F172A]">
        The problem
      </div>

      {/* Heading */}
      <h2 className="mt-8 max-w-3xl text-[58px] font-extrabold leading-[1.05] tracking-[-2px] text-[#0F172A]">
        Why most people struggle to grow.
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-4xl text-[18px] leading-10 text-[#475569]">
        People graduate with degrees and certificates but struggle in the real
        world because they lack communication, confidence, execution and proof
        that they can actually perform.
      </p>

      {/* Cards */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[28px] border border-gray-200 bg-white p-9 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F8FAFC] text-2xl">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="mt-7 text-[22px] font-bold leading-8 text-[#0F172A]">
              {card.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-[17px] leading-8 text-[#64748B]">
              {card.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}