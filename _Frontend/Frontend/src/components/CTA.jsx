export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16">

      <div className="rounded-[42px] bg-gradient-to-br from-[#071C34] via-[#0B2545] to-[#066A5B] py-28 px-10 text-center">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-medium">
          ✨ Applications open
        </div>

        <h2 className="mt-10 text-[64px] leading-[72px] font-extrabold text-white max-w-5xl mx-auto">
          Your career growth starts with{" "}
          <span className="text-[#10B981]">
            one decision.
          </span>
        </h2>

        <p className="mt-8 text-[22px] leading-10 text-gray-300 max-w-3xl mx-auto">
          Cohort seats are capped at five. Apply now and we'll invite
          you to a Career Assessment Call.
        </p>

        <button className="mt-12 px-14 py-5 rounded-full bg-white text-[#071C34] text-[22px] font-bold hover:scale-105 transition">
          Apply for Next Cohort →
        </button>

      </div>

    </section>
  );
}