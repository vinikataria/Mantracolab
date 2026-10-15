import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="about" className="w-full bg-[#07152f] text-white pt-16 pb-8 border-t border-slate-800/80 relative overflow-hidden">

      {/* Background City Silhouette Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-black"></div>

      <div className="relative z-10 mx-auto max-w-[1980px] px-6 sm:px-10 lg:px-16 xl:px-20">

        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Left Column: Logo & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="bg-white rounded-xl p-3 inline-block shadow-sm">
              <Image
                src="/images/PICS_Landing Page_12 Oct 2026__02.png"
                alt="Professional Immigration Consulting Services Logo"
                width={180}
                height={55}
                className="object-contain"
              />
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm pt-2">
              Canadian immigration support for business, family, complex cases, humanitarian applications, and temporary resident services.
            </p>
          </div>

          {/* Middle Column: Explore Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Explore</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/#" className="text-[#cca34a] font-semibold hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#footer" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: More Services Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">More Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/services#temporary" className="text-gray-400 hover:text-white transition-colors">
                  Temporary Resident Visas & Other Services
                </Link>
              </li>
              <li>
                <Link href="/#why-explore" className="text-gray-400 hover:text-white transition-colors">
                  Why Explore Our Services
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">

          {/* Copyright notice */}
          <div className="text-[#cca34a] font-semibold">
            2026@Powered by Mantra Collab
          </div>

          {/* Legal Disclaimer */}
          <p className="text-gray-400 text-center md:text-right max-w-2xl leading-relaxed text-[10px]">
            Website information is general and for informational purposes only. It is not legal advice and does not guarantee eligibility, approval, or any immigration outcome. Program requirements and individual circumstances vary. Confirm all applicable requirements with the relevant Canadian authorities and a properly authorized immigration professional.
          </p>

        </div>

      </div>
    </footer>
  );
}