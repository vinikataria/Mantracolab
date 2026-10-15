import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28 relative w-full overflow-hidden bg-[#031428] text-white">
      {/* Background with Canadian Maple Leaf Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/bg.png"
          alt="Hero Background Graphic"
          fill
          priority
          className="object-cover object-right opacity-90 lg:object-center min-[1921px]:scale-[1.06]"
        />
        {/* Left Dark Gradient Overlay for Maximum Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031428] via-[#031428]/85 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[580px] max-w-[1980px] flex-col items-center justify-between px-6 pb-0 pt-8 sm:px-10 sm:pt-12 lg:flex-row lg:px-16 lg:pt-14 xl:px-20 lg:min-h-[640px] min-[1921px]:min-h-[720px]! min-[1981px]:max-w-[1800px]!">
        
        {/* Left Column Text Content */}
        <div className="w-full max-w-2xl pb-0 pt-4 sm:pt-6 lg:w-1/2 lg:pb-20 lg:pl-3 xl:pl-4 max-sm:text-center">
          
          {/* Subtitle Tagline */}
          <div className="flex items-center space-x-3 mb-4 max-sm:flex-col max-sm:justify-center max-sm:space-x-0 max-sm:gap-2">
            <span className="h-[2px] w-6 bg-[#E7C56E]"></span>
            <span className="text-[#E7C56E] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              YOUR FUTURE IN CANADA STARTS HERE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="ont-highlight mb-6 text-4xl font-bold leading-[0.94] tracking-[-0.06em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] max-[321px]:text-[2rem]">
            Canadian <br />
            Immigration Support <br />
            for <span className="font-highlight text-[#D4A046]">Your Next Chapter</span>
          </h1>

          {/* Body Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-[530px] mb-8 max-sm:mx-auto">
            Personalized guidance for individuals, families, entrepreneurs, and employers navigating Canadian immigration pathways. Explore service options shaped around your goals, circumstances, and immigration history.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 max-sm:flex-col max-sm:items-stretch max-sm:gap-3">
            <Link
              href="/services"
              className="relative inline-flex items-center justify-center overflow-hidden group px-6 sm:px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-b from-[#deb255] to-[#ba8629] rounded-xl shadow-md active:scale-[0.98] transition-all max-sm:w-full"
            >
              <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F4C256]">Explore Our Services</span>
              <svg className="relative z-10 w-4 h-4 ml-2.5 transition-[color,transform] duration-300 group-hover:text-[#F4C256] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-sm sm:text-base font-medium text-white border border-[#38bdf8]/60 bg-[#07192f]/80 hover:bg-[#07192f] rounded-xl active:scale-[0.98] transition-all group max-sm:w-full"
            >
              <span>Contact Us</span>
              <svg
                className="w-4 h-4 ml-2.5 text-[#00c0e8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Column Woman Image Anchored to Bottom */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end self-end">
          <div className="relative aspect-square h-auto w-full max-w-[380px] sm:aspect-auto sm:h-[500px] sm:max-w-[460px] lg:h-[580px] lg:max-w-[520px] xl:h-[620px] xl:max-w-[560px] min-[1921px]:h-[700px]! min-[1921px]:max-w-[640px]!">
            <Image
              src="/images/women.webp"
              alt="Canadian Immigration Support Client"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>

      </div>
    </section>
  );
}