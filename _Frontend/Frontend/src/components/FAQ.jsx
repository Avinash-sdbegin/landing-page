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
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid lg:grid-cols-[420px_1fr] gap-20">

        {/* Left */}

        <div>

          <span className="px-5 py-2 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] text-[15px] font-medium">
            FAQ
          </span>

          <h2 className="mt-8 text-[72px] leading-[72px] font-extrabold text-[#0F172A]">
            Questions,
            <br />
            answered.
          </h2>

          <p className="mt-8 text-[20px] leading-9 text-[#475569]">
            Still unsure? Apply and use the Career Assessment Call to ask us
            anything.
          </p>

        </div>

        {/* Right */}

        <div>

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-8 cursor-pointer"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >
              <div className="flex justify-between items-center">

                <h3 className="text-[24px] font-semibold text-[#0F172A]">
                  {item.q}
                </h3>

                <span className="text-3xl text-gray-500">
                  {open === index ? "−" : "+"}
                </span>

              </div>

              {open === index && (
                <p className="mt-5 text-[18px] leading-8 text-[#64748B] pr-12">
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