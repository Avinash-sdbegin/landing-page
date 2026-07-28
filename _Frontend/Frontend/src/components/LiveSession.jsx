import { Check, MessageSquare } from "lucide-react";

export default function LiveSession() {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DFFFF4] blur-[90px] opacity-80"></div>

      <div className="relative mx-auto max-w-[760px]">
        <div className="overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF7B7B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFC542]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#45D39C]" />
              </div>

              <span className="text-[13px] text-[#475569]">
                live session · cohort 07
              </span>
            </div>

            <div className="rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-3 py-1">
              <span className="text-[11px] font-semibold text-[#0F172A]">
                ● Live now
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-3">
            {/* Left */}
            <div className="border-r border-[#E5E7EB] px-5 py-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                TODAY'S PRACTICE
              </p>

              <h3 className="mt-2 text-[16px] font-semibold text-[#0F172A]">
                Discovery Call Roleplay
              </h3>

              <div className="mt-5 flex">
                {["A", "B", "C", "D", "E"].map((item, i) => (
                  <div
                    key={item}
                    className={`-ml-1 first:ml-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-semibold ${
                      i === 1 || i === 3
                        ? "bg-[#18C37E] text-white"
                        : "bg-[#24324B] text-white"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[11px] text-[#64748B]">
                5 learners · 1 coach · recorded for review
              </p>
            </div>

            {/* Middle */}
            <div className="border-r border-[#E5E7EB] px-5 py-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                THIS WEEK'S PROOF-OF-WORK
              </p>

              <div className="mt-4 space-y-3">
                {[
                  "Cold call recording",
                  "LinkedIn rewrite",
                  "Objection handling script",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check size={14} className="text-[#18C37E]" />

                    <span className="text-[12px] text-[#0F172A]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="px-5 py-5">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">
                COACH FEEDBACK
              </p>

              <p className="mt-3 text-[12px] leading-6 text-[#0F172A]">
                "Your opener is tighter this week. Slow down on the value
                bridge — let the prospect hear the benefit."
              </p>

              <div className="mt-5 flex items-center gap-2 text-[#64748B]">
                <MessageSquare size={13} />

                <span className="text-[11px]">
                  Personalized · 2h ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}