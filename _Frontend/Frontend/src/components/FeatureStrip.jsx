export default function FeatureStrip() {
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
    <section className="border-y border-[#E5E7EB] bg-white">
      <div className="mx-auto flex max-w-[1450px] flex-wrap items-center justify-center gap-8 px-6 py-4">

        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />

            <span className="text-[13px] font-medium text-[#334155]">
              {item}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}