import { Check } from 'lucide-react';
import Image from 'next/image';

export default function ApproachSection() {
  return (
    <section id="about" className="scroll-mt-28 relative w-full overflow-hidden  py-16 lg:py-24">
      <div className="mx-auto max-w-[1980px] px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-16 min-[1920px]:grid min-[1920px]:grid-cols-[1.05fr_0.95fr] min-[1920px]:gap-16">
          
          {/* Left Column: Image with Rounded Corners */}
          <div className="flex w-full justify-center lg:w-1/2 min-[1920px]:w-full!">
            <div className="relative h-[350px] w-full max-w-xl overflow-hidden rounded-2xl shadow-lg sm:h-[420px] md:h-[460px] md:max-lg:aspect-[1.4] md:max-lg:h-auto md:max-lg:max-w-none min-[1920px]:h-[540px]! min-[1920px]:max-w-none!">
              <Image
                src="/images/women2.webp"
                alt="Immigration consultant reviewing documents"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="relative w-full space-y-6 lg:w-1/2 min-[1920px]:w-full!">
            
            {/* Background watermark leaf */}
            <div className="absolute right-0 top-0 -translate-y-6 translate-x-4 opacity-10 pointer-events-none">
              <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 8.5 2 9.5 7.5 14.5 6 22 12 18.5 18 22 16.5 14.5 22 9.5 14.5 8.5z" />
              </svg>
            </div>

            {/* Subheading Tag */}
            <p className="font-[Poppins,sans-serif] text-xs sm:text-sm font-semibold tracking-widest text-[#C08A0B] uppercase">
              A CONSIDERED APPROACH
            </p>

            {/* Main Headline: Changed leading-tight to leading-[1.15] and tracking-tight to tracking-tighter to closely bunch the bold words like the image */}
            <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#25475C] leading-[1.15] tracking-tighter">
              Understand your options before deciding your <span className="text-[#C08A0B]">next move</span>
            </h2>

            {/* Descriptions */}
            <div className="font-[Poppins,sans-serif] space-y-4 text-[#25475C] text-sm sm:text-base leading-relaxed font-normal">
              <p>
               Canadian immigration pathways can vary based on your goals, family circumstances, business plans, and immigration history. We provide assistance across business and entrepreneur immigration, family sponsorship, complex and challenging cases, humanitarian and compassionate applications, and temporary or permanent resident-related services.
              </p>
              <p className="mt-12"> 
                Every situation is different. The appropriate pathway depends on the facts of the case and the applicable program requirements.
              </p>
            </div>

            {/* Checklist items */}
            <div className="font-[Poppins,sans-serif] grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm font-medium text-[#49575F]">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#49575E]/10 text-[#000000] flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Business and entrepreneur options</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#49575E]/10 text-[#000000] flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Family reunification pathways</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#49575E]/10 text-[#000000] flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Complex immigration matters</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#49575E]/10 text-[#000000] flex-shrink-0">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </span>
                <span>Temporary resident services</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
