import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apply4() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [program, setProgram] = useState("");
  const [source, setSource] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState({});

  const roles = [
    "Student",
    "Professional",
    "Entrepreneur",
    "Business Owner",
    "Career Switcher",
  ];

  const validate = () => {
    const newErrors = {};

    if (!role) {
      newErrors.role = "Select your role";
    }

    if (!program) {
      newErrors.program = "Select a program";
    }

    if (!source.trim()) {
      newErrors.source = "Tell us how you heard about us";
    }

    if (!agree) {
      newErrors.agree = "Please accept before continuing";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = async () => {
    if (!validate()) return;

    try {
      const previousData =
        JSON.parse(localStorage.getItem("applicationData")) || {};

      const payload = {
        ...previousData,
        role,
        program,
        source,
      };

      const res = await axios.post(
        "http://localhost:5000/api/apply",
        payload
      );

      if (res.data.success) {
        localStorage.removeItem("applicationData");
        navigate("/submitted_form");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen bg-[#FAFBFC]">

      <Navbar />

      <section className="max-w-xl mx-auto px-3 py-7">

        {/* Badge */}
        <div className="inline-flex items-center gap-1 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-2 py-1 text-xs font-medium text-[#065F46]">
          <Sparkles size={12} />
          Cohort application
        </div>

        {/* Heading */}
        <h1 className="mt-3 text-2xl font-bold text-[#0F172A]">
          Apply to GrowthYari
        </h1>

        <p className="mt-2 text-sm text-[#475569]">
          Takes ~3 minutes. Your responses help us tailor the assessment call.
        </p>

        {/* Progress */}
        <div className="mt-5">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-xs font-medium text-[#334155]">
              Step 4 of 4 · Preferences
            </span>

            <span className="text-xs font-medium text-[#334155]">
              100%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#E2E8F0]">
            <div className="h-full w-full bg-gradient-to-r from-[#0F172A] to-[#10B981]" />
          </div>

        </div>

        {/* Card */}
        <div className="mt-5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                    {/* ROLE */}

          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#334155]">
            Which Best Describes You?
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">

            {roles.map((item) => (

              <button
                type="button"
                key={item}
                onClick={() => {
                  setRole(item);
                  setErrors({ ...errors, role: "" });
                }}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  role === item
                    ? "border-[#0F172A] bg-[#0F172A] text-white"
                    : "border-gray-300 text-[#475569]"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

          {errors.role && (
            <p className="mt-1 text-xs text-red-500">
              {errors.role}
            </p>
          )}

          {/* PROGRAM */}

          <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#334155]">
            Preferred Program
          </h3>

          <div className="grid md:grid-cols-2 gap-3 mt-3">

            <div
              onClick={() => {
                setProgram("Group Cohort");
                setErrors({ ...errors, program: "" });
              }}
              className={`cursor-pointer rounded-xl border p-3 transition ${
                program === "Group Cohort"
                  ? "border-[#0F172A]"
                  : "border-gray-200"
              }`}
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-sm font-semibold">
                    Group Cohort
                  </h3>

                  <p className="mt-1 text-xs text-[#64748B]">
                    ₹9,999 + GST · Small cohort
                  </p>

                </div>

                <div
                  className={`mt-1 h-4 w-4 rounded-full border ${
                    program === "Group Cohort"
                      ? "bg-[#0F172A] border-[#0F172A]"
                      : "border-gray-300"
                  }`}
                />

              </div>

            </div>

            <div
              onClick={() => {
                setProgram("1:1 Accelerator");
                setErrors({ ...errors, program: "" });
              }}
              className={`cursor-pointer rounded-xl border p-3 transition ${
                program === "1:1 Accelerator"
                  ? "border-[#0F172A]"
                  : "border-gray-200"
              }`}
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-sm font-semibold">
                    1:1 Accelerator
                  </h3>

                  <p className="mt-1 text-xs text-[#64748B]">
                    ₹17,999 + GST · Personalized
                  </p>

                </div>

                <div
                  className={`mt-1 h-4 w-4 rounded-full border ${
                    program === "1:1 Accelerator"
                      ? "bg-[#0F172A] border-[#0F172A]"
                      : "border-gray-300"
                  }`}
                />

              </div>

            </div>

          </div>

          {errors.program && (
            <p className="mt-1 text-xs text-red-500">
              {errors.program}
            </p>
          )}

          {/* SOURCE */}

          <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#334155]">
            How did you hear about us?
          </h3>

          <input
            type="text"
            value={source}
            onChange={(e) => {
              setSource(e.target.value);
              setErrors({ ...errors, source: "" });
            }}
            placeholder="Instagram, LinkedIn, Friend..."
            className={`mt-2 w-full rounded-lg border px-3 py-2 text-sm outline-none ${
              errors.source
                ? "border-red-500"
                : "border-gray-300 focus:border-[#10B981]"
            }`}
          />

          {errors.source && (
            <p className="mt-1 text-xs text-red-500">
              {errors.source}
            </p>
          )}

          {/* CHECKBOX */}

          <label className="mt-5 flex items-start gap-2 rounded-xl border p-3 cursor-pointer">

            <input
              type="checkbox"
              checked={agree}
              onChange={() => {
                setAgree(!agree);
                setErrors({ ...errors, agree: "" });
              }}
              className="mt-1 h-4 w-4"
            />

            <span className="text-xs text-[#475569]">
              I understand that submitting this application does not
              guarantee admission.
            </span>

          </label>

          {errors.agree && (
            <p className="mt-1 text-xs text-red-500">
              {errors.agree}
            </p>
          )}
                    {/* Buttons */}

          <div className="mt-6 flex items-center justify-between">

            <Link
              to="/form3"
              className="flex items-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-4 py-2 text-sm font-medium text-[#0F172A] transition hover:bg-gray-50"
            >
              <ArrowLeft size={16} />
              Back
            </Link>

            <button
              type="button"
              onClick={handleContinue}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Apply Now
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

        {/* Bottom Link */}

        <div className="mt-5 text-center text-xs text-[#64748B]">

          Prefer to look around first?{" "}

          <Link
            to="/"
            className="font-medium underline underline-offset-2"
          >
            Back to home
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}