import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

export default function Apply2() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">

      {/* Navbar */}
      <header className="sticky top-0 z-50 flex justify-center px-6 pt-3">
        <nav className="flex w-full max-w-[1600px] items-center justify-between rounded-full border border-[#E5E7EB] bg-white px-7 py-3 shadow-md">

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] font-bold text-white">
              G
            </div>

            <span className="text-[18px] font-bold text-[#0F172A]">
              GrowthYari
            </span>
          </Link>

          <ul className="hidden items-center gap-12 text-[15px] font-medium text-[#475569] lg:flex">
            <li><Link to="/">Home</Link></li>
            <li>Program</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>

          <button className="rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-8 py-3 text-[16px] font-semibold text-white">
            Apply Now
          </button>

        </nav>
      </header>

      {/* Form */}
      <section className="mx-auto max-w-[980px] px-6 py-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-5 py-2 text-[15px] font-medium text-[#065F46]">
          <Sparkles size={16} />
          Cohort application
        </div>

        {/* Heading */}
        <h1 className="mt-5 text-[58px] font-bold leading-none text-[#0F172A]">
          Apply to GrowthYari
        </h1>

        <p className="mt-4 text-[18px] text-[#475569]">
          Takes ~3 minutes. Your responses help us tailor the assessment call.
        </p>

        {/* Progress */}
        <div className="mt-12">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-[15px] font-medium text-[#334155]">
              Step 2 of 4 · Background
            </span>

            <span className="text-[15px] font-medium text-[#334155]">
              50%
            </span>

          </div>

          <div className="h-[7px] overflow-hidden rounded-full bg-[#E2E8F0]">

            <div className="h-full w-1/2 bg-gradient-to-r from-[#0F172A] to-[#10B981]" />

          </div>

        </div>

        {/* Card */}
        <div className="mt-12 rounded-[34px] border border-[#E5E7EB] bg-white p-12 shadow-sm">

          <div className="grid gap-8 md:grid-cols-2">

            {/* Education */}
            <div>

              <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
                Education
              </label>

              <input
                placeholder="B.Tech, BBA, MBA..."
                className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
              />

            </div>

            {/* Graduation */}
            <div>

              <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
                Graduation Year
              </label>

              <input
                placeholder="2024"
                className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
              />

            </div>

            {/* Status */}
            <div>

              <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
                Current Status
              </label>

              <select className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none">

                <option>Select...</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Entrepreneur</option>
                <option>Career Switcher</option>

              </select>

            </div>

            {/* LinkedIn */}
            <div>

              <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
                LinkedIn Profile
              </label>

              <input
                placeholder="linkedin.com/in/..."
                className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
              />

              <p className="mt-3 text-[15px] text-[#64748B]">
                Optional but recommended
              </p>

            </div>
                        {/* Current Occupation */}
            <div>

              <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
                Current Occupation
              </label>

              <input
                placeholder="e.g. Marketing associate"
                className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
              />

            </div>

          </div>

          {/* Buttons */}
          <div className="mt-14 flex items-center justify-between">

            <Link
              to="/apply"
              className="flex h-16 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-9 text-[18px] font-medium text-[#0F172A] transition hover:bg-gray-50"
            >
              <ArrowLeft size={20} />
              Back
            </Link>

            <Link
              to="/apply3"
              className="flex h-16 items-center gap-3 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-10 text-[18px] font-semibold text-white"
            >
              Continue
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

        {/* Bottom Link */}
        <div className="mt-10 text-center text-[16px] text-[#64748B]">

          Prefer to look around first?{" "}

          <Link
            to="/"
            className="font-medium underline underline-offset-4"
          >
            Back to home
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#E5E7EB] bg-white">

        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-8 px-8 py-8 md:flex-row">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] font-bold text-white">
              G
            </div>

            <div>

              <h3 className="text-[24px] font-bold text-[#0F172A]">
                GrowthYari
              </h3>

              <p className="text-[16px] text-[#64748B]">
                Professional Growth Accelerator
              </p>

            </div>

          </div>

          <div className="flex gap-10 text-[17px] text-[#334155]">

            <Link to="/">Program</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">FAQ</Link>
            <Link to="/apply">Apply</Link>

          </div>

          <p className="text-[16px] text-[#64748B]">
            © 2026 GrowthYari. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}