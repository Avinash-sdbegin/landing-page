import {
  Phone,
  Search,
  BriefcaseBusiness,
  FileText,
  Presentation,
  Database,
  Mail,
  Users,
  BookOpen,
} from "lucide-react";

export default function Portfolio() {
  const items = [
    { icon: Phone, title: "Cold Call Recordings" },
    { icon: Search, title: "Discovery Calls" },
    { icon: BriefcaseBusiness, title: "LinkedIn Profile" },
    { icon: FileText, title: "Professional Resume" },
    { icon: Presentation, title: "Sales Presentation" },
    { icon: Database, title: "CRM Practice" },
    { icon: Mail, title: "Email Writing" },
    { icon: Users, title: "Mock Interviews" },
    { icon: BookOpen, title: "Reflection Journal" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">

      {/* Badge */}
      <div className="flex justify-center">
        <span className="rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-1 text-[12px] font-medium text-[#0F172A]">
          Proof-of-work
        </span>
      </div>

      {/* Heading */}
      <h2 className="mx-auto mt-4 max-w-3xl text-center text-[42px] leading-[46px] font-bold tracking-[-0.03em] text-[#0F172A]">
        Graduate with more than a certificate.
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-3xl text-center text-[15px] leading-7 text-[#475569]">
        Companies hire evidence. You'll leave with a portfolio that shows
        recruiters, clients and partners exactly what you can do.
      </p>

      {/* Cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[18px] border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F5F9]">
                  <Icon
                    size={18}
                    strokeWidth={2.2}
                    className="text-[#0F172A]"
                  />
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-[#10B981]">
                    DELIVERABLE
                  </p>

                  <h3 className="mt-1 text-[15px] font-semibold leading-5 text-[#0F172A]">
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}