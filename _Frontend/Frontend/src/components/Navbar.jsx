import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-3 px-5 sticky top-0 z-50">
      <nav className="w-full max-w-7xl bg-white rounded-full border border-gray-200 shadow-md px-7 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0F172A] to-[#059669] flex items-center justify-center text-white font-bold text-lg">
            G
          </div>

          <span className="text-[18px] font-bold text-[#0F172A]">
            GrowthYari
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-12 text-[15px] font-medium text-[#4B5563]">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#program">Program</a>
          </li>

          <li>
            <a href="#pricing">Pricing</a>
          </li>

          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>

        {/* Apply Button */}
        <Link
          to="/apply"
          className="px-8 py-3 rounded-full text-[16px] font-semibold text-white bg-gradient-to-r from-[#0F172A] to-[#059669] hover:scale-105 transition"
        >
          Apply Now
        </Link>

      </nav>
    </header>
  );
}