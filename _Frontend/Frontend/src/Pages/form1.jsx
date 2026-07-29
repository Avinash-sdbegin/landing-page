import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Form1() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Enter your phone number";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Enter your city";
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

    localStorage.setItem(
      "applicationData",
      JSON.stringify({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
      })
    );

    navigate("/form2");
  };

  const isFormValid =
    formData.fullName.trim() &&
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) &&
    /^[6-9]\d{9}$/.test(formData.phone) &&
    formData.city.trim();

  return (
    <div className="min-h-screen bg-[#F7F8FC]">

      <Navbar />

      <section className="max-w-xl mx-auto px-3 py-7">

        <div className="inline-flex items-center gap-1 bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-1 rounded-full text-xs font-semibold text-[#065F46]">
          🚀 Cohort application
        </div>

        <h1 className="text-2xl font-bold text-[#0F172A] mt-3">
          Apply to GrowthYari
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          Takes ~3 minutes. Your responses help us tailor the assessment call.
        </p>

        <div className="mt-5">

          <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
            <span>Step 1 of 4 · About you</span>
            <span>25%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="w-1/4 h-full rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981]"></div>
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 mt-5">

          <div className="grid md:grid-cols-2 gap-3 mt-5">
                        {/* Full Name */}
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-[#0F172A]">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Arjun Patel"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition ${
                  errors.fullName
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#10B981]"
                }`}
              />

              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#0F172A]">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#10B981]"
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#0F172A]">
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98xxxxxx"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#10B981]"
                }`}
              />

              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* City */}
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-[#0F172A]">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Bengaluru"
                className={`w-full border rounded-lg px-3 py-2 text-sm outline-none transition ${
                  errors.city
                    ? "border-red-500"
                    : "border-gray-300 focus:border-[#10B981]"
                }`}
              />

              {errors.city && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.city}
                </p>
              )}
            </div>

          </div>
                    {/* Buttons */}
          <div className="flex justify-between items-center mt-6">

            <Link
              to="/"
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition"
            >
              ← Back
            </Link>

            <button
              type="button"
              onClick={handleContinue}
              className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#0F172A] to-[#10B981] hover:opacity-95 inline-flex items-center justify-center"
            >
              Continue →
            </button>

          </div>

          {/* Bottom Text */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              Prefer to look around first?{" "}
              <Link
                to="/"
                className="text-[#10B981] text-xs font-semibold hover:underline"
              >
                Back to home
              </Link>
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}