import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apply3() {
  const navigate = useNavigate();

  const [careerGoal, setCareerGoal] = useState("");
  const [reason, setReason] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!careerGoal.trim()) {
      newErrors.careerGoal = "Tell us your goal";
    }

    if (!reason.trim()) {
      newErrors.reason = "A little more detail helps";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validate()) return;

    const previousData =
      JSON.parse(localStorage.getItem("applicationData")) || {};

    localStorage.setItem(
      "applicationData",
      JSON.stringify({
        ...previousData,
        career_goal: careerGoal,
        reason: reason,
      })
    );

    navigate("/form4");
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
              Step 3 of 4 · Your goals
            </span>

            <span className="text-xs font-medium text-[#334155]">
              75%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#E2E8F0]">
            <div className="h-full w-3/4 bg-gradient-to-r from-[#0F172A] to-[#10B981]" />
          </div>

        </div>

        {/* Card */}
        <div className="mt-5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                    {/* Career Goal */}

          <div>
            <label className="block mb-1 text-xs font-semibold uppercase tracking-wider text-[#334155]">
              Career Goal
            </label>

            <input
              type="text"
              value={careerGoal}
              onChange={(e) => {
                setCareerGoal(e.target.value);
                setErrors({ ...errors, careerGoal: "" });
              }}
              placeholder="e.g. Break into a B2B SaaS BDR role in 3 months"
              className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
                errors.careerGoal
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#10B981]"
              }`}
            />

            {errors.careerGoal && (
              <p className="mt-1 text-xs text-red-500">
                {errors.careerGoal}
              </p>
            )}
          </div>

          {/* Reason */}

          <div className="mt-5">

            <label className="block mb-1 text-xs font-semibold uppercase tracking-wider text-[#334155]">
              Why do you want to join GrowthYari?
            </label>

            <textarea
              rows={6}
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                setErrors({ ...errors, reason: "" });
              }}
              placeholder="Share what you're trying to change and why now."
              className={`w-full rounded-lg border px-3 py-3 text-sm outline-none resize-none transition ${
                errors.reason
                  ? "border-red-500"
                  : "border-gray-300 focus:border-[#10B981]"
              }`}
            />

            {errors.reason && (
              <p className="mt-1 text-xs text-red-500">
                {errors.reason}
              </p>
            )}

          </div>

          {/* Buttons */}

          <div className="mt-6 flex items-center justify-between">

            <Link
              to="/form2"
              className="flex items-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-4 py-2 text-sm font-medium text-[#0F172A] hover:bg-gray-50 transition"
            >
              <ArrowLeft size={16} />
              Back
            </Link>

            <button
              type="button"
              onClick={handleContinue}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-5 py-2 text-sm font-semibold text-white hover:opacity-95 transition"
            >
              Continue
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

        {/* Bottom */}

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