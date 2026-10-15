import Image from 'next/image';
import Link from 'next/link';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  badgeIcon: React.ReactNode;
  linkText: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'business',
    title: 'Business & Entrepreneur Immigration',
    description: 'Support for entrepreneurs and businesses exploring opportunities to establish or expand operations in Canada, temporarily or permanently.',
    points: [
      'C11 Entrepreneur Work Permit',
      'Intra-Company Transfer',
      'Provincial Nominee Programs',
    ],
    image: '/images/services/services-1.webp',
    linkText: 'Discuss business options',
    badgeIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    ),
  },
  {
    id: 'family',
    title: 'Family Sponsorship',
    description: 'Explore sponsorship options that may help Canadian citizens and permanent residents reunite with eligible family members.',
    points: [
      'Spousal sponsorship',
      'Dependent children sponsorship',
      'Lonely Canadian sponsorship',
    ],
    image: '/images/services/services-2.webp',
    linkText: 'Discuss family options',
    badgeIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'complex',
    title: 'Complex & Challenging Cases',
    description: 'Careful review for immigration matters that may require detailed consideration of personal circumstances and immigration history.',
    points: [
      'Temporary Resident Permits (TRPs)',
      'Responses to procedural fairness letters',
      'Authorization to Return to Canada',
    ],
    image: '/images/services/services-3.webp',
    linkText: 'Discuss complex cases',
    badgeIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'humanitarian',
    title: 'Humanitarian & Compassionate Applications',
    description: 'Individualized assessments for people considering a Humanitarian and Compassionate (H&C) application as a possible pathway to permanent residence.',
    points: [
      'Review of individual circumstances',
      'Consideration of relevant personal and family',
      'Discussion of whether H&C applies',
    ],
    image: '/images/services/services-4.webp',
    linkText: 'Discuss H&C options',
    badgeIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'temporary',
    title: 'Temporary Resident Visas & Other Services',
    description: 'Services for visitors, students, travellers, individuals, and employers with different temporary resident and related needs.',
    points: [
      'Study Permits, Visitor, Business & Visas',
      'Super Visas & eTA Applications',
      'Citizenship Grants, Descent & Certificates',
    ],
    image: '/images/services/services-5.webp',
    linkText: 'Discuss visa options',
    badgeIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V8.5a.5.5 0 01.5-.5h.5a2.5 2.5 0 002.5-2.5V3.935" />
      </svg>
    ),
  },
  {
    id: 'pathway',
    title: 'Find a Relevant Pathway',
    description: 'Not sure where to start? Share your goal and we can discuss which service area may be relevant to your circumstances.',
    points: [
      'Business or relocation goals',
      'Family sponsorship questions',
      'Previous refusals or immigration history',
    ],
    image: '/images/services/services-6.webp',
    linkText: 'Discuss your pathway',
    badgeIcon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-28 w-full bg-[#fafbfc] py-20 relative overflow-hidden">
      
      {/* Background Watermark Leaf Top Left */}
      <div className="absolute left-[-40px] top-10 opacity-5 pointer-events-none">
        <svg className="w-64 h-64 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.5 8.5 2 9.5 7.5 14.5 6 22 12 18.5 18 22 16.5 14.5 22 9.5 14.5 8.5z" />
        </svg>
      </div>

      {/* Background Watermark Leaf Bottom Right */}
      <div className="absolute right-[-40px] bottom-10 opacity-5 pointer-events-none">
        <svg className="w-64 h-64 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.5 8.5 2 9.5 7.5 14.5 6 22 12 18.5 18 22 16.5 14.5 22 9.5 14.5 8.5z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1980px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Header Section */}
        <div className="text-center max-w-[1980px] mx-auto space-y-3 mb-16 px-6 sm:px-10 lg:px-16 xl:px-20">
  {/* Subheading */}
  <p className="font-[Poppins,sans-serif] text-xs sm:text-sm font-semibold tracking-widest text-[#C08A0B] uppercase">
    OUR IMMIGRATION SERVICES
  </p>
  {/* Main Title: Added lg:whitespace-nowrap to guarantee it never wraps into two lines on desktop */}
  <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold text-[#25475C] tracking-tight lg:whitespace-nowrap">
    Explore the support that fits your <span className="text-[#C08A0B]">situation</span>
  </h2>
  {/* Description Paragraph */}
  <p className="font-[Poppins,sans-serif] text-[#52778D]/80 text-sm sm:text-base pt-2 max-w-3xl mx-auto">
    Browse our key service areas to learn which options may be relevant to your goals.<br className="hidden sm:inline" />
    Select a category to see more details.
  </p>
</div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image & Badge Container */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gold Badge Icon */}
                  <div className="absolute right-4 bottom-[-18px] w-12 h-12 rounded-xl bg-[#cba33f] text-white flex items-center justify-center shadow-md">
                    {item.badgeIcon}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-8 space-y-4">
                  <h3 className="text-xl font-bold text-[#0a1b38] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed min-h-[48px]">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {item.points.map((point, index) => (
                      <li key={index} className="flex items-center text-xs font-semibold text-[#0a1b38] space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Link Button */}
              <div className="p-6 pt-0">
                <Link
                  href={`/services#${item.id}`}
                  className="inline-flex items-center text-xs font-bold text-[#cca34a] hover:text-[#b38d38] transition-colors space-x-1"
                >
                  <span>{item.linkText}</span>
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}