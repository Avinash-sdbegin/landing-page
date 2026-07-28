export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12">

      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#071C34] to-[#10B981] flex items-center justify-center text-white font-bold text-xl">
            G
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0F172A]">
              GrowthYari
            </h3>

            <p className="text-[#64748B] mt-1">
              Professional Growth Accelerator
            </p>
          </div>

        </div>

        {/* Links */}

        <div className="flex gap-10 text-[18px] text-[#475569] my-8 md:my-0">

          <a href="#">Program</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Apply</a>

        </div>

        {/* Copyright */}

        <p className="text-[#64748B]">
          © 2026 GrowthYari. All rights reserved.
        </p>

      </div>

    </footer>
  );
}