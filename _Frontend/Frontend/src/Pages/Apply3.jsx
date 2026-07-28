import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Apply3() {
  const [role, setRole] = useState("Student");
  const [program, setProgram] = useState("Group Cohort");
  const [source, setSource] = useState("");
  const [agree, setAgree] = useState(false);

  const roles = [
    "Student",
    "Professional",
    "Entrepreneur",
    "Business Owner",
    "Career Switcher",
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 shadow-sm">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-bold">
              G
            </div>

            <h2 className="font-bold text-2xl">
              Growth<span className="text-slate-800">Yari</span>
            </h2>
          </div>

          <div className="hidden md:flex gap-12 text-lg text-slate-600">
            <a href="#">Home</a>
            <a href="#">Program</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>

          <button className="rounded-full px-8 py-4 text-white font-semibold bg-gradient-to-r from-[#0b2447] to-[#0f766e]">
            Apply Now
          </button>
        </div>
      </header>

      {/* CONTENT */}

      <div className="max-w-5xl mx-auto py-14 px-6">

        {/* Heading */}

        <span className="px-5 py-2 rounded-full border border-green-300 bg-green-50 text-green-700">
          ✨ Cohort application
        </span>

        <h1 className="text-6xl font-bold mt-8 text-slate-900">
          Apply to GrowthYari
        </h1>

        <p className="mt-4 text-xl text-slate-500">
          Takes ~3 minutes. Your responses help us tailor the assessment call.
        </p>

        {/* Progress */}

        <div className="mt-10">

          <div className="flex justify-between mb-2 text-lg">
            <span>Step 4 of 4 • Preferences</span>
            <span>100%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="h-2 rounded-full bg-gradient-to-r from-[#0b2447] to-[#16c784] w-full"></div>
          </div>
        </div>

        {/* CARD */}

        <div className="mt-12 bg-white rounded-[36px] shadow-lg border p-12">

          {/* ROLE */}

          <h3 className="tracking-[4px] uppercase font-semibold text-slate-700">
            Which Best Describes You?
          </h3>

          <div className="flex flex-wrap gap-4 mt-8">
            {roles.map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`rounded-full px-7 py-3 border transition ${
                  role === item
                    ? "border-black shadow text-black"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PROGRAM */}

          <h3 className="tracking-[4px] uppercase font-semibold text-slate-700 mt-16">
            Preferred Program
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {/* CARD */}

            <div
              onClick={() => setProgram("Group Cohort")}
              className={`cursor-pointer border rounded-3xl p-7 flex justify-between ${
                program === "Group Cohort"
                  ? "border-slate-800"
                  : "border-gray-200"
              }`}
            >
              <div>
                <h3 className="font-bold text-3xl">Group Cohort</h3>

                <p className="mt-3 text-slate-500 text-xl">
                  ₹9,999 + GST · Small cohort
                </p>
              </div>

              <div
                className={`w-7 h-7 rounded-full border mt-1 ${
                  program === "Group Cohort"
                    ? "border-black bg-black"
                    : "border-gray-300"
                }`}
              />
            </div>

            <div
              onClick={() => setProgram("1:1 Accelerator")}
              className={`cursor-pointer border rounded-3xl p-7 flex justify-between ${
                program === "1:1 Accelerator"
                  ? "border-slate-800"
                  : "border-gray-200"
              }`}
            >
              <div>
                <h3 className="font-bold text-3xl">
                  1:1 Accelerator
                </h3>

                <p className="mt-3 text-slate-500 text-xl">
                  ₹17,999 + GST · Personalized
                </p>
              </div>

              <div
                className={`w-7 h-7 rounded-full border mt-1 ${
                  program === "1:1 Accelerator"
                    ? "border-black bg-black"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>

          {/* SOURCE */}

          <h3 className="tracking-[4px] uppercase font-semibold text-slate-700 mt-16">
            How did you hear about us?
          </h3>

          <input
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="Instagram, LinkedIn, a friend..."
            className="mt-6 w-full rounded-2xl border border-gray-200 px-7 py-5 text-xl outline-none"
          />

          {/* CHECK */}

          <label className="mt-10 flex items-center gap-4 border rounded-3xl p-6 cursor-pointer">

            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="w-6 h-6"
            />

            <span className="text-xl">
              I understand that submitting this application does not
              guarantee admission.
            </span>
          </label>

          {/* BUTTONS */}

          <div className="flex justify-between items-center mt-14">

            <button className="border rounded-full px-10 py-4 flex items-center gap-3 text-xl">
              <ArrowLeft size={22} />
              Back
            </button>

            <button className="rounded-full px-12 py-5 text-xl text-white bg-gradient-to-r from-[#0b2447] to-[#0f766e] flex items-center gap-3">
              Apply Now
              <ArrowRight size={22} />
            </button>

          </div>

        </div>

        {/* FOOTER */}

        <div className="text-center mt-10 text-slate-500">
          Prefer to look around first?
          <span className="underline ml-2 cursor-pointer">
            Back to home
          </span>
        </div>

      </div>

      {/* FOOTER */}

      <footer className="mt-20 border-t bg-white py-10">

        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-bold">
              G
            </div>

            <div>
              <h2 className="font-bold text-2xl">
                GrowthYari
              </h2>

              <p className="text-gray-500">
                Professional Growth Accelerator
              </p>
            </div>

          </div>

          <div className="flex gap-8 mt-8 md:mt-0 text-gray-600">
            <a href="#">Program</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
            <a href="#">Apply</a>
          </div>

          <p className="text-gray-500 mt-8 md:mt-0">
            © 2026 GrowthYari. All rights reserved.
          </p>

        </div>

      </footer>
    </div>
  );
}