import {
  Check,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Apply5() {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">

      <Navbar />

      {/* ================= Hero ================= */}

      <section className="max-w-3xl mx-auto px-4 pt-14 pb-10 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#0F172A] to-[#10B981] shadow-lg">

          <Check className="h-8 w-8 text-white" />

        </div>

        <h1 className="mt-6 text-4xl font-bold text-[#0F172A]">
          Application received!
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569]">
          Thank you for applying to GrowthYari. Our team will review your
          application and contact you shortly to schedule your Career
          Assessment call.
        </p>

      </section>

      {/* ================= Steps ================= */}

      <section className="max-w-5xl mx-auto grid gap-5 px-4 md:grid-cols-3 mb-10">

        {/* STEP 1 */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">

            <Mail size={18} />

          </div>

          <p className="mt-4 text-xs font-semibold tracking-[2px] text-[#10B981]">
            STEP 1
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
            Watch your email
          </h3>

          <p className="mt-3 text-base leading-6 text-[#64748B]">
            Confirmation is on its way.
          </p>

        </div>

        {/* STEP 2 */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">

          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">

            <Phone size={18} />

          </div>

          <p className="mt-4 text-xs font-semibold tracking-[2px] text-[#10B981]">
            STEP 2
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
            Expect our call
          </h3>

          <p className="mt-3 text-base leading-6 text-[#64748B]">
            Within 24–48 hours to schedule your assessment.
          </p>

        </div>

        {/* STEP 3 */}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">

          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">

            <MessageCircle size={18} />

          </div>

          <p className="mt-4 text-xs font-semibold tracking-[2px] text-[#10B981]">
            STEP 3
          </p>

          <h3 className="mt-3 text-xl font-semibold text-[#0F172A]">
            Join the community
          </h3>

          <p className="mt-3 text-base leading-6 text-[#64748B]">
            Meet coaches and fellow applicants on WhatsApp.
          </p>

        </div>

      </section>

            {/* ================= Buttons ================= */}

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-95"
        >
          Join WhatsApp
          <ArrowRight size={18} />
        </button>

        <Link
          to="/"
          className="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-medium text-[#0F172A] transition hover:bg-gray-50"
        >
          Back to Home
        </Link>

      </div>

      <div className="mt-20">
        <Footer />
      </div>

    </div>
  );
}