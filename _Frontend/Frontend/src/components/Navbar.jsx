import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-2 px-6 sticky top-0 z-50">
      <nav className="w-full max-w-6xl bg-white rounded-full border border-gray-200 shadow-md px-5 py-2.5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] flex items-center justify-center text-white font-bold text-sm">
            G
          </div>

          <span className="text-[16px] font-bold text-[#0F172A]">
            GrowthYari
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-10 text-[14px] font-medium text-[#4B5563]">
          <li><Link to="/">Home</Link></li>
          <li><a href="#program">Program</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        {/* Apply Button */}
        <Link
          to="/form1"
          className="px-6 py-2 rounded-full text-[15px] font-semibold text-white bg-gradient-to-r from-[#0F172A] to-[#059669] hover:scale-105 transition"
        >
          Apply Now
        </Link>

      </nav>
    </header>
  );
}