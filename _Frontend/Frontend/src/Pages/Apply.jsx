import { Link } from "react-router-dom";

export default function Apply() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">

      {/* Navbar */}
      <header className="w-full flex justify-center pt-4 px-5">
        <nav className="w-full max-w-7xl bg-white rounded-full border border-gray-200 shadow-sm px-7 py-3 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] flex items-center justify-center text-white font-bold">
              G
            </div>

            <span className="text-xl font-bold text-[#0F172A]">
              GrowthYari
            </span>
          </Link>

          <div className="text-sm text-gray-500">
            Cohort Application
          </div>

        </nav>
      </header>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 py-14">

        <div className="bg-white rounded-[32px] shadow-xl border border-gray-200 p-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ECFDF5] border border-[#A7F3D0] px-4 py-2 rounded-full text-sm font-semibold text-[#065F46]">
            🚀 Cohort Application
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold text-[#0F172A] mt-6">
            Apply to GrowthYari
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Fill out this short application to reserve your seat in our next
            cohort.
          </p>

          {/* Progress */}
          <div className="mt-10">

            <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
              <span>Step 1 of 4</span>
              <span>25%</span>
            </div>

            <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">

              <div className="w-1/4 h-full rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981]"></div>

            </div>

          </div>

          {/* Form */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#10B981]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#10B981]"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#10B981]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">
                City
              </label>

              <input
                type="text"
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-[#10B981]"
              />
            </div>

          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-12">

            <Link
              to="/"
              className="px-8 py-4 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50"
            >
              ← Back
            </Link>

            <button
              className="px-10 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-[#0F172A] to-[#10B981]"
            >
              Continue →
            </button>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-8">
        © 2026 GrowthYari. All Rights Reserved.
      </footer>

    </div>
  );
}