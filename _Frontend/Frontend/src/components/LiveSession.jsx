export default function LiveSession() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 mt-16">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-52 -translate-x-1/2 w-[500px] h-[280px] rounded-full bg-emerald-200/40 blur-[120px] -z-10"></div>

      {/* Pills */}
      <div className="flex flex-wrap justify-center gap-5 mb-12">

        <div className="px-7 py-3 rounded-full border border-gray-200 bg-white text-[18px] text-[#0F172A] shadow-sm">
          🎥 Live Online Sessions
        </div>

        <div className="px-7 py-3 rounded-full border border-gray-200 bg-white text-[18px] text-[#0F172A] shadow-sm">
          🕒 Up to 8 Weeks
        </div>

        <div className="px-7 py-3 rounded-full border border-gray-200 bg-white text-[18px] text-[#0F172A] shadow-sm">
          👥 Max 5 Learners
        </div>

        <div className="px-7 py-3 rounded-full border border-gray-200 bg-white text-[18px] text-[#0F172A] shadow-sm">
          📅 New Batch Monthly
        </div>

      </div>

      {/* Main Card */}
      <div className="rounded-[34px] bg-white border border-gray-200 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,.10)]">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b">

          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>

            <span className="ml-5 text-lg text-gray-600">
              live session · cohort 07
            </span>
          </div>

          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#ECFDF5] border border-[#A7F3D0]">

            <span className="w-3 h-3 rounded-full bg-green-600"></span>

            <span className="font-semibold text-[#0F172A]">
              Live now
            </span>

          </div>

        </div>

        {/* Body */}
        <div className="grid md:grid-cols-3">

          {/* Left */}
          <div className="p-10 border-r">

            <p className="text-gray-500 uppercase tracking-widest text-sm">
              TODAY'S PRACTICE
            </p>

            <h2 className="text-[22px] font-bold text-[#0F172A] mt-4">
              Discovery Call Roleplay
            </h2>

            <div className="flex mt-8">

              {["A", "B", "C", "D", "E"].map((item, index) => (
                <div
                  key={item}
                  style={{
                    marginLeft: index === 0 ? 0 : -10,
                    zIndex: 10 - index,
                  }}
                  className={`w-11 h-11 rounded-full border-2 border-white flex items-center justify-center text-white font-bold ${
                    index % 2 === 0
                      ? "bg-[#1E293B]"
                      : "bg-[#10B981]"
                  }`}
                >
                  {item}
                </div>
              ))}

            </div>

            <p className="text-gray-500 mt-6 text-lg">
              5 learners · 1 coach · recorded for review
            </p>

          </div>

          {/* Middle */}
          <div className="p-10 border-r">

            <p className="text-gray-500 uppercase tracking-widest text-sm">
              THIS WEEK'S PROOF-OF-WORK
            </p>

            <ul className="space-y-5 mt-6 text-[18px] text-[#0F172A]">

              <li>✅ Cold call recording</li>
              <li>✅ LinkedIn rewrite</li>
              <li>✅ Objection handling script</li>

            </ul>

          </div>

          {/* Right */}
          <div className="p-10">

            <p className="text-gray-500 uppercase tracking-widest text-sm">
              COACH FEEDBACK
            </p>

            <p className="text-[18px] leading-9 mt-5 text-[#0F172A] italic">
              "Your opener is tighter this week. Slow down on the value bridge —
              let the prospect hear the benefit."
            </p>

            <p className="mt-8 text-gray-500">
              💬 Personalized · 2h ago
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}