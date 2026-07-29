// import { Link } from "react-router-dom";
// import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

// export default function Apply2() {
//   return (
//     <div className="min-h-screen bg-[#FAFBFC]">

//       {/* Navbar */}
//       <header className="sticky top-0 z-50 flex justify-center px-6 pt-3">
//         <nav className="flex w-full max-w-[1600px] items-center justify-between rounded-full border border-[#E5E7EB] bg-white px-7 py-3 shadow-md">

//           <Link to="/" className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] font-bold text-white">
//               G
//             </div>

//             <span className="text-[18px] font-bold text-[#0F172A]">
//               GrowthYari
//             </span>
//           </Link>

//           <ul className="hidden items-center gap-12 text-[15px] font-medium text-[#475569] lg:flex">
//             <li><Link to="/">Home</Link></li>
//             <li>Program</li>
//             <li>Pricing</li>
//             <li>FAQ</li>
//           </ul>

//           <button className="rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-8 py-3 text-[16px] font-semibold text-white">
//             Apply Now
//           </button>

//         </nav>
//       </header>

//       {/* Form */}
//       <section className="mx-auto max-w-[980px] px-6 py-16">

//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-5 py-2 text-[15px] font-medium text-[#065F46]">
//           <Sparkles size={16} />
//           Cohort application
//         </div>

//         {/* Heading */}
//         <h1 className="mt-5 text-[58px] font-bold leading-none text-[#0F172A]">
//           Apply to GrowthYari
//         </h1>

//         <p className="mt-4 text-[18px] text-[#475569]">
//           Takes ~3 minutes. Your responses help us tailor the assessment call.
//         </p>

//         {/* Progress */}
//         <div className="mt-12">

//           <div className="mb-3 flex items-center justify-between">

//             <span className="text-[15px] font-medium text-[#334155]">
//               Step 2 of 4 · Background
//             </span>

//             <span className="text-[15px] font-medium text-[#334155]">
//               50%
//             </span>

//           </div>

//           <div className="h-[7px] overflow-hidden rounded-full bg-[#E2E8F0]">

//             <div className="h-full w-1/2 bg-gradient-to-r from-[#0F172A] to-[#10B981]" />

//           </div>

//         </div>

//         {/* Card */}
//         <div className="mt-12 rounded-[34px] border border-[#E5E7EB] bg-white p-12 shadow-sm">

//           <div className="grid gap-8 md:grid-cols-2">

//             {/* Education */}
//             <div>

//               <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
//                 Education
//               </label>

//               <input
//                 placeholder="B.Tech, BBA, MBA..."
//                 className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
//               />

//             </div>

//             {/* Graduation */}
//             <div>

//               <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
//                 Graduation Year
//               </label>

//               <input
//                 placeholder="2024"
//                 className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
//               />

//             </div>

//             {/* Status */}
//             <div>

//               <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
//                 Current Status
//               </label>

//               <select className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none">

//                 <option>Select...</option>
//                 <option>Student</option>
//                 <option>Working Professional</option>
//                 <option>Entrepreneur</option>
//                 <option>Career Switcher</option>

//               </select>

//             </div>

//             {/* LinkedIn */}
//             <div>

//               <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
//                 LinkedIn Profile
//               </label>

//               <input
//                 placeholder="linkedin.com/in/..."
//                 className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
//               />

//               <p className="mt-3 text-[15px] text-[#64748B]">
//                 Optional but recommended
//               </p>

//             </div>
//                         {/* Current Occupation */}
//             <div>

//               <label className="mb-3 block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#334155]">
//                 Current Occupation
//               </label>

//               <input
//                 placeholder="e.g. Marketing associate"
//                 className="h-16 w-full rounded-[18px] border border-[#E5E7EB] px-6 text-[18px] outline-none focus:border-[#10B981]"
//               />

//             </div>

//           </div>

//           {/* Buttons */}
//           <div className="mt-14 flex items-center justify-between">

//             <Link
//               to="/apply"
//               className="flex h-16 items-center gap-3 rounded-full border border-[#D1D5DB] bg-white px-9 text-[18px] font-medium text-[#0F172A] transition hover:bg-gray-50"
//             >
//               <ArrowLeft size={20} />
//               Back
//             </Link>

//             <Link
//               to="/apply3"
//               className="flex h-16 items-center gap-3 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-10 text-[18px] font-semibold text-white"
//             >
//               Continue
//               <ArrowRight size={20} />
//             </Link>

//           </div>

//         </div>

//         {/* Bottom Link */}
//         <div className="mt-10 text-center text-[16px] text-[#64748B]">

//           Prefer to look around first?{" "}

//           <Link
//             to="/"
//             className="font-medium underline underline-offset-4"
//           >
//             Back to home
//           </Link>

//         </div>

//       </section>

//       {/* Footer */}
//       <footer className="border-t border-[#E5E7EB] bg-white">

//         <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-8 px-8 py-8 md:flex-row">

//           <div className="flex items-center gap-4">

//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] font-bold text-white">
//               G
//             </div>

//             <div>

//               <h3 className="text-[24px] font-bold text-[#0F172A]">
//                 GrowthYari
//               </h3>

//               <p className="text-[16px] text-[#64748B]">
//                 Professional Growth Accelerator
//               </p>

//             </div>

//           </div>

//           <div className="flex gap-10 text-[17px] text-[#334155]">

//             <Link to="/">Program</Link>
//             <Link to="/">Pricing</Link>
//             <Link to="/">FAQ</Link>
//             <Link to="/apply">Apply</Link>

//           </div>

//           <p className="text-[16px] text-[#64748B]">
//             © 2026 GrowthYari. All rights reserved.
//           </p>

//         </div>

//       </footer>

//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apply2() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    education: "",
    graduationYear: "",
    currentStatus: "",
    linkedin: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.education.trim()) {
      newErrors.education = "Enter your education";
    }

    if (!formData.graduationYear.trim()) {
      newErrors.graduationYear = "Enter graduation year";
    } else if (!/^\d{4}$/.test(formData.graduationYear)) {
      newErrors.graduationYear = "Enter a valid year";
    }

    if (!formData.currentStatus) {
      newErrors.currentStatus = "Select an option";
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = "Enter your occupation";
    }

    if (
      formData.linkedin.trim() &&
      !/^https?:\/\/(www\.)?linkedin\.com\/.*$/i.test(formData.linkedin)
    ) {
      newErrors.linkedin = "Enter a valid LinkedIn URL";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleContinue = () => {
    if (!validate()) return;

    const previousData = JSON.parse(
      localStorage.getItem("applicationData")
    ) || {};

    localStorage.setItem(
      "applicationData",
      JSON.stringify({
        ...previousData,

        education: formData.education,
        graduation_year: formData.graduationYear,
        status: formData.currentStatus,
        occupation: formData.occupation,
        linkedin: formData.linkedin,
      })
    );

    navigate("/form3");
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">

      <Navbar />

      <section className="max-w-xl mx-auto px-3 py-7">

        <div className="inline-flex items-center gap-1 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-2 py-1 text-xs font-medium text-[#065F46]">
          <Sparkles size={12} />
          Cohort application
        </div>

        <h1 className="mt-3 text-2xl font-bold text-[#0F172A]">
          Apply to GrowthYari
        </h1>

        <p className="mt-2 text-sm text-[#475569]">
          Takes ~3 minutes. Your responses help us tailor the assessment call.
        </p>

        <div className="mt-5">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-xs font-medium text-[#334155]">
              Step 2 of 4 · Background
            </span>

            <span className="text-xs font-medium text-[#334155]">
              50%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#E2E8F0]">

            <div className="h-full w-1/2 bg-gradient-to-r from-[#0F172A] to-[#10B981]" />

          </div>

        </div>

        <div className="mt-5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">

          <div className="grid gap-3 md:grid-cols-2">
                      {/* Education */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#334155]">
                Education
              </label>

              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="B.Tech, BBA, MBA..."
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
                  errors.education
                    ? "border-red-500"
                    : "border-[#E5E7EB] focus:border-[#10B981]"
                }`}
              />

              {errors.education && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.education}
                </p>
              )}
            </div>

            {/* Graduation Year */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#334155]">
                Graduation Year
              </label>

              <input
                type="text"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                placeholder="2024"
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
                  errors.graduationYear
                    ? "border-red-500"
                    : "border-[#E5E7EB] focus:border-[#10B981]"
                }`}
              />

              {errors.graduationYear && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.graduationYear}
                </p>
              )}
            </div>

            {/* Current Status */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#334155]">
                Current Status
              </label>

              <select
                name="currentStatus"
                value={formData.currentStatus}
                onChange={handleChange}
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
                  errors.currentStatus
                    ? "border-red-500"
                    : "border-[#E5E7EB] focus:border-[#10B981]"
                }`}
              >
                <option value="">Select...</option>
                <option>Student</option>
                <option>Working Professional</option>
                <option>Entrepreneur</option>
                <option>Career Switcher</option>
              </select>

              {errors.currentStatus && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.currentStatus}
                </p>
              )}
            </div>

            {/* LinkedIn */}
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#334155]">
                LinkedIn Profile
              </label>

              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="linkedin.com/in/..."
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
                  errors.linkedin
                    ? "border-red-500"
                    : "border-[#E5E7EB] focus:border-[#10B981]"
                }`}
              />

              {errors.linkedin ? (
                <p className="mt-1 text-xs text-red-500">
                  {errors.linkedin}
                </p>
              ) : (
                <p className="mt-1 text-xs text-[#64748B]">
                  Optional but recommended
                </p>
              )}
            </div>

            {/* Current Occupation */}
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#334155]">
                Current Occupation
              </label>

              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g. Marketing associate"
                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none transition ${
                  errors.occupation
                    ? "border-red-500"
                    : "border-[#E5E7EB] focus:border-[#10B981]"
                }`}
              />

              {errors.occupation && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.occupation}
                </p>
              )}
            </div>

          </div>
                    {/* Buttons */}
          <div className="mt-6 flex items-center justify-between">

            <Link
              to="/form1"
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
              Continue
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