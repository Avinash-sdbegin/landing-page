import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "Who is this program for?",
      a: "Students, professionals, entrepreneurs and career switchers who want practical skills and measurable career growth.",
    },
    {
      q: "Do I need sales experience?",
      a: "No. We start from fundamentals and gradually build practical skills.",
    },
    {
      q: "How long is the program?",
      a: "The program runs for up to 8 weeks with live coaching sessions.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes, but more importantly you'll graduate with a proof-of-work portfolio.",
    },
    {
      q: "Will you help me get interviews?",
      a: "Yes. Resume reviews, mock interviews and career guidance are included.",
    },
    {
      q: "How much time should I dedicate weekly?",
      a: "Around 5–8 hours each week is recommended.",
    },
    {
      q: "Difference between Group and 1:1?",
      a: "Group is small-cohort learning. 1:1 Accelerator provides personalized coaching and roadmap.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-8 pt-16 pb-20">
      <div className="grid lg:grid-cols-[340px_1fr] gap-24 items-start">

        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-xs font-medium text-[#0F172A]">
            FAQ
          </span>

          <h2 className="mt-7 text-[60px] leading-[60px] font-extrabold tracking-[-2px] text-[#0F172A]">
            Questions,
            <br />
            answered.
          </h2>

          <p className="mt-6 max-w-[310px] text-[16px] leading-8 text-[#475569]">
            Still unsure? Apply and use the Career Assessment Call to ask us
            anything.
          </p>
        </div>

        {/* Right */}
        <div>
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#E5E7EB] py-6 cursor-pointer"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-6">
                <h3 className="text-[18px] font-medium tracking-[-0.3px] text-[#0F172A]">
                  {item.q}
                </h3>

                <span className="text-xl font-light text-[#64748B] select-none">
                  {open === index ? "−" : "+"}
                </span>
              </div>

              {open === index && (
                <p className="mt-4 pr-10 text-[15px] leading-7 text-[#64748B]">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}