export default function Outcomes() {
  const skills = [
    "Sales Fundamentals",
    "Communication",
    "Prospecting",
    "Discovery Calls",
    "Objection Handling",
    "Negotiation",
    "Presentation",
    "Personal Branding",
    "LinkedIn",
    "Networking",
    "AI for Sales",
    "Business Thinking",
    "Professional Confidence",
  ];

  return (
    <section className="max-w-[1450px] mx-auto px-8 py-14">

      <div>
        <span className="inline-flex rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-[11px] font-medium text-[#0F172A]">
          Outcomes
        </span>
      </div>

      <h2 className="mt-5 max-w-[620px] text-[54px] leading-[0.95] font-semibold tracking-[-0.04em] text-[#0F172A]">
        What you'll walk away able to do.
      </h2>

      <p className="mt-5 max-w-[700px] text-[17px] leading-8 text-[#475569]">
        No weekly curriculum theatre. Just the skills that compound into
        careers and revenue.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />

            <span className="text-[14px] font-medium text-[#0F172A]">
              {skill}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}