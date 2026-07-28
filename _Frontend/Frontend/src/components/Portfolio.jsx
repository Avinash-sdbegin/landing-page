export default function Portfolio() {
  const items = [
    { icon: "📞", title: "Cold Call Recordings" },
    { icon: "🔍", title: "Discovery Calls" },
    { icon: "💼", title: "LinkedIn Profile" },
    { icon: "📄", title: "Professional Resume" },
    { icon: "🖥️", title: "Sales Presentation" },
    { icon: "🗄️", title: "CRM Practice" },
    { icon: "✉️", title: "Email Writing" },
    { icon: "👥", title: "Mock Interviews" },
    { icon: "📒", title: "Reflection Journal" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium text-[#0F172A]">
          Proof-of-work
        </span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-center text-[58px] leading-[62px] font-extrabold text-[#0F172A] max-w-4xl mx-auto">
        Graduate with more than a certificate.
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-4xl mx-auto text-center text-[18px] leading-10 text-[#475569]">
        Companies hire evidence. You'll leave with a portfolio that shows
        recruiters, clients and partners exactly what you can do.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-full bg-[#F8FAFC] flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <div>

                <p className="text-[#10B981] text-[13px] tracking-[3px] font-bold">
                  DELIVERABLE
                </p>

                <h3 className="mt-1 text-[20px] font-bold text-[#0F172A]">
                  {item.title}
                </h3>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
}