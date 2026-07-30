import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pt-6 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
      <div className="flex items-center gap-0">
        <img
          src="/logo.png"
          alt="GrowthYari Logo"
          className="w-14 h-10 object-cover"
        />

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
          <HashLink smooth to="/#program">
            Program
          </HashLink>
          <HashLink smooth to="/#pricing">
            Pricing
          </HashLink>
          <HashLink smooth to="/#faq">
            FAQ
          </HashLink>

          <Link to="/form1">
            Apply
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#64748B]">
          © 2026 GrowthYari. All rights reserved.
        </p>

      </div>
    </footer>
  );
}