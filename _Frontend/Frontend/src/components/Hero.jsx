import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden pt-12 pb-20">

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px] opacity-40"></div>

      {/* Glow */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#d8fff0] rounded-full blur-[120px] opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-sm text-[#0F172A] mb-8">
          ✨ New cohort starts 2 August
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#0F172A]">

          Build the Skills That Create

          <br />

          Better <span className="text-[#059669]">Careers</span> and

          <br />

          Stronger <span className="text-[#059669]">Businesses.</span>

        </h1>

        {/* Paragraph */}
        <p className="mt-8 max-w-4xl mx-auto text-lg text-slate-600 leading-9">

          GrowthYari helps students, professionals, entrepreneurs and business
          owners master Sales, Communication and Business Execution through
          live coaching, practical learning, proof-of-work and personalized
          feedback.

        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => navigate("/form1")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Apply for Next Cohort →
          </button>

          <button
          onClick={() => {
            document
              .getElementById("problem")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-8 py-4 rounded-full border border-gray-300 text-[#0F172A] font-semibold hover:bg-gray-100 transition-all duration-300"
        >
          Explore Program
        </button>

        </div>

      </div>
    </section>
  );
}