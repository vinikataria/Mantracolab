import { Briefcase, Users, FileSearch, Eye } from 'lucide-react';

interface ServiceItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}


export default function ServicesHighlight() {
 const services: ServiceItem[] = [
  {
    title: "Business Immigration",
    subtitle: "Entrepreneurs & employers",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect width="20" height="14" x="2" y="7" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Family Sponsorship",
    subtitle: "Helping families reunite",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Complex Cases",
    subtitle: "Individualized case review",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <circle cx="11.5" cy="14.5" r="2.5" />
        <path d="M13.3 16.3 16 19" />
      </svg>
    ),
  },
  {
    title: "Temporary Residence",
    subtitle: "Visas, permits & more",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];
  return (
    // Locate this opening section and grid div block:
<section id="services" className="bg-[#F4F7FB] border-t border-[#F8F2E4] py-6 text-gray-900">
  <div className="mx-auto grid max-w-[1980px] grid-cols-1 gap-6 divide-y divide-[#F8F2E4] px-6 sm:grid-cols-2 sm:px-10 sm:divide-y-0 sm:divide-x sm:divide-[#F8F2E4] lg:grid-cols-4 lg:px-16 xl:px-20">
       {services.map((service: ServiceItem, index: number) => (
          <div key={index} className="flex items-center space-x-4 pt-4 sm:pt-0 sm:px-4">
            <div className="w-12 h-12 rounded-xl bg-[#ffffff] text-[#b8922e] flex items-center justify-center flex-shrink-0">
              {service.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800 text-[#25475C]">{service.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5 text-[#848F95]">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}