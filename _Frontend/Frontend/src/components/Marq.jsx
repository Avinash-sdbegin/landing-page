export default function Marq() {
  const items = [
    "Live coaching",
    "Small cohorts",
    "Proof-of-work",
    "Personalized feedback",
    "Interview readiness",
    "Real execution",
    "Weekly practice",
  ];

  return (
    <section className="w-full border-y border-gray-200 bg-white overflow-hidden py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-8 text-[18px] text-[#475569] font-medium"
          >
            <span className="w-3 h-3 rounded-full bg-[#10B981] mr-4"></span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}