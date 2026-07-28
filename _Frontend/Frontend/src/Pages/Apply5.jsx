import {
  Check,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

export default function Apply5() {
  return (
    <div className="min-h-screen bg-[#fafafa]">

      {/* ================= Navbar ================= */}

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

          {/* Logo */}

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-r from-green-600 to-teal-600 flex items-center justify-center text-white font-bold">
              G
            </div>

            <h2 className="text-2xl font-bold">
              Growth<span className="text-slate-800">Yari</span>
            </h2>
          </div>

          {/* Menu */}

          <div className="hidden md:flex gap-12 text-lg text-slate-600">
            <a href="/">Home</a>
            <a href="/">Program</a>
            <a href="/">Pricing</a>
            <a href="/">FAQ</a>
          </div>

          {/* Button */}

          <button className="rounded-full bg-gradient-to-r from-[#0b2447] to-[#0f766e] px-8 py-4 font-semibold text-white">
            Apply Now
          </button>
        </div>
      </header>

      {/* ================= Hero ================= */}

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-[#0b2447] to-[#11b981] shadow-xl">
          <Check className="h-12 w-12 text-white" />
        </div>

        <h1 className="mt-10 text-6xl font-bold text-slate-900">
          Application received!
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-2xl leading-10 text-slate-600">
          Thank you for applying to GrowthYari. Our team will review your
          application and contact you shortly to schedule your Career
          Assessment call.
        </p>

      </section>

      {/* ================= Steps ================= */}

      <section className="max-w-6xl mx-auto grid gap-8 px-6 md:grid-cols-3">

        {/* STEP 1 */}

        <div className="rounded-[32px] border bg-white p-10 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <Mail size={30} />
          </div>

          <p className="mt-8 font-bold tracking-[3px] text-green-500">
            STEP 1
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            Watch your email
          </h3>

          <p className="mt-5 text-xl text-slate-500">
            Confirmation is on its way.
          </p>

        </div>

        {/* STEP 2 */}

        <div className="rounded-[32px] border bg-white p-10 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <Phone size={30} />
          </div>

          <p className="mt-8 font-bold tracking-[3px] text-green-500">
            STEP 2
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            Expect our call
          </h3>

          <p className="mt-5 text-xl text-slate-500">
            Within 24–48 hours to schedule your assessment.
          </p>

        </div>

        {/* STEP 3 */}

        <div className="rounded-[32px] border bg-white p-10 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
            <MessageCircle size={30} />
          </div>

          <p className="mt-8 font-bold tracking-[3px] text-green-500">
            STEP 3
          </p>

          <h3 className="mt-4 text-3xl font-bold">
            Join the community
          </h3>

          <p className="mt-5 text-xl text-slate-500">
            Meet coaches and fellow applicants on WhatsApp.
          </p>

        </div>

      </section>

      {/* ================= Buttons ================= */}

      <div className="mt-16 flex flex-wrap justify-center gap-6">

        <button className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0b2447] to-[#0f766e] px-10 py-5 text-xl font-semibold text-white shadow-xl">
          Join WhatsApp
          <ArrowRight />
        </button>

        <button className="rounded-full border bg-white px-10 py-5 text-xl">
          Back to Home
        </button>

      </div>

      {/* ================= Footer ================= */}

      <footer className="mt-24 border-t bg-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-8 py-10 md:flex-row">

          {/* Left */}

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-teal-600 font-bold text-white">
              G
            </div>

            <div>

              <h2 className="text-2xl font-bold">
                GrowthYari
              </h2>

              <p className="text-slate-500">
                Professional Growth Accelerator
              </p>

            </div>

          </div>

          {/* Center */}

          <div className="flex gap-8 text-lg text-slate-600">

            <a href="/">Program</a>

            <a href="/">Pricing</a>

            <a href="/">FAQ</a>

            <a href="/">Apply</a>

          </div>

          {/* Right */}

          <p className="text-slate-500">
            © 2026 GrowthYari. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}