export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pt-6 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#071C34] to-[#10B981] flex items-center justify-center text-white font-bold text-sm">
            G
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0F172A] leading-none">
              GrowthYari
            </h3>

            <p className="text-xs text-[#64748B] mt-0.5">
              Professional Growth Accelerator
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-[#475569] my-4 md:my-0">
          <a href="#">Program</a>
          <a href="#">Pricing</a>
          <a href="#">FAQ</a>
          <a href="#">Apply</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#64748B]">
          © 2026 GrowthYari. All rights reserved.
        </p>

      </div>
    </footer>
  );
}