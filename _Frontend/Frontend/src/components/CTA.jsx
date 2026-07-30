import { Link } from "react-router-dom";
export default function CTA() {
  return (
    <section className="px-6 pt-12 pb-16">
      <div className="max-w-5xl mx-auto rounded-[28px] bg-gradient-to-br from-[#071C34] via-[#0B2545] to-[#066A5B] py-14 px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-medium">
          ✨ Applications open
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-[42px] md:text-[48px] leading-tight font-extrabold text-white max-w-3xl mx-auto">
          Your career growth starts with{" "}
          <span className="text-[#10B981]">
            one decision.
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 text-[16px] leading-7 text-gray-300 max-w-2xl mx-auto">
          Cohort seats are capped at five. Apply now and we'll invite
          you to a Career Assessment Call.
        </p>

        {/* Button */}
        <Link
        to="/form1"
        className="inline-block mt-8 px-8 py-3 rounded-full bg-white text-[#071C34] text-[16px] font-semibold hover:scale-105 transition duration-300"
      >
        Apply for Next Cohort →
      </Link>

      </div>
    </section>
  );
}