import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Apply4() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">

      {/* Navbar */}
      <header className="sticky top-0 z-50 flex justify-center px-6 pt-3">

        <nav className="flex w-full max-w-[1600px] items-center justify-between rounded-full border border-[#E5E7EB] bg-white px-7 py-3 shadow-md">

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] font-bold text-white">
              G
            </div>

            <span className="text-[18px] font-bold text-[#0F172A]">
              GrowthYari
            </span>

          </Link>

          <ul className="hidden lg:flex items-center gap-12 text-[15px] font-medium text-[#475569]">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>Program</li>

            <li>Pricing</li>

            <li>FAQ</li>

          </ul>

          <button className="rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-8 py-3 text-[16px] font-semibold text-white">
            Apply Now
          </button>

        </nav>

      </header>

      <section className="mx-auto max-w-[980px] px-6 py-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-5 py-2 text-[15px] font-medium text-[#065F46]">

          <Sparkles size={16} />

          Cohort application

        </div>

        <h1 className="mt-5 text-[58px] font-bold text-[#0F172A]">
          Apply to GrowthYari
        </h1>

        <p className="mt-4 text-[18px] text-[#475569]">
          Takes ~3 minutes. Your responses help us tailor the assessment call.
        </p>

        {/* Progress */}
        <div className="mt-12">

          <div className="mb-3 flex justify-between">

            <span className="text-[15px] font-medium text-[#334155]">
              Step 4 of 4 · Preferences
            </span>

            <span className="text-[15px] font-medium text-[#334155]">
              100%
            </span>

          </div>

          <div className="h-[7px] overflow-hidden rounded-full bg-[#E2E8F0]">

            <div className="h-full w-full bg-gradient-to-r from-[#0F172A] to-[#10B981]" />

          </div>

        </div>

        {/* Card */}
        <div className="mt-12 rounded-[34px] border border-[#E5E7EB] bg-white p-12 shadow-sm">

          <label className="mb-6 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">

            Which best describes you?

          </label>

          <div className="mb-10 flex flex-wrap gap-4">

            {[
              "Student",
              "Professional",
              "Entrepreneur",
              "Business Owner",
              "Career Switcher",
            ].map((item) => (

              <button
                key={item}
                className="rounded-full border border-[#D1D5DB] px-6 py-3 text-[16px] font-medium hover:border-[#10B981] hover:bg-[#ECFDF5]"
              >
                {item}
              </button>

            ))}

          </div>

          <label className="mb-5 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">

            Preferred Program

          </label>

          <div className="grid gap-5 md:grid-cols-2">

            <label className="cursor-pointer rounded-[18px] border border-[#D1D5DB] p-6">

              <div className="flex justify-between">

                <div>

                  <h3 className="text-[18px] font-semibold">
                    Group Cohort
                  </h3>

                  <p className="mt-2 text-[16px] text-[#64748B]">
                    ₹9,999 + GST · Small cohort
                  </p>

                </div>

                <input
                  type="radio"
                  name="program"
                />

              </div>

            </label>

            <label className="cursor-pointer rounded-[18px] border border-[#D1D5DB] p-6">

              <div className="flex justify-between">

                <div>

                  <h3 className="text-[18px] font-semibold">
                    1:1 Accelerator
                  </h3>

                  <p className="mt-2 text-[16px] text-[#64748B]">
                    ₹17,999 + GST · Personalized
                  </p>

                </div>

                <input
                  type="radio"
                  name="program"
                />

              </div>

            </label>

          </div>

          <div className="mt-10">

            <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">

              How did you hear about us?

            </label>

            <input
              placeholder="Instagram, LinkedIn, a friend..."
              className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
            />

          </div>

          <div className="mt-10 flex items-center gap-4 rounded-[18px] border border-[#E5E7EB] p-6">

            <input
              type="checkbox"
              className="h-6 w-6"
            />

            <span className="text-[17px] text-[#0F172A]">
              I understand that submitting this application does not guarantee admission.
            </span>

          </div>
          {/* Buttons */}
          <div className="mt-12 flex items-center justify-between">

            <Link
              to="/apply3"
              className="inline-flex items-center gap-3 rounded-full border border-[#D1D5DB] px-8 py-4 text-[18px] font-medium text-[#0F172A] hover:bg-gray-50"
            >
              <ArrowLeft size={20} />
              Back
            </Link>

            <button
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-10 py-4 text-[18px] font-semibold text-white transition hover:scale-[1.02]"
            >
              Apply Now
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

        {/* Bottom Link */}
        <div className="mt-10 text-center text-[16px] text-[#64748B]">

          Prefer to look around first?{" "}

          <Link
            to="/"
            className="font-medium underline"
          >
            Back to home
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-white">

        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 py-10">

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] text-lg font-bold text-white">
              G
            </div>

            <div>

              <h3 className="text-[20px] font-bold text-[#0F172A]">
                GrowthYari
              </h3>

              <p className="text-[15px] text-[#64748B]">
                Professional Growth Accelerator
              </p>

            </div>

          </div>

          {/* Center */}
          <div className="flex items-center gap-10 text-[17px] text-[#334155]">

            <Link to="/">Program</Link>

            <Link to="/">Pricing</Link>

            <Link to="/">FAQ</Link>

            <Link to="/apply">Apply</Link>

          </div>

          {/* Right */}
          <p className="text-[15px] text-[#64748B]">
            © 2026 GrowthYari. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}