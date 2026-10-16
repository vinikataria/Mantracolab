'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
  { name: 'Home', href: '/#home', hash: '#home' }, // Add id="home" to your hero section
  { name: 'About', href: '/#footer', hash: '#footer' },
  { name: 'Services', href: '/#services', hash: '#services' },
  { name: 'FAQ', href: '/#faq', hash: '#faq' },
  { name: 'Contact', href: '/#contact', hash: '#contact' },
];

  useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -50% 0px', // Triggers when section is near the center
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(`#${entry.target.id}`);
      }
    });
  }, observerOptions);

  ['home', 'services', 'faq', 'contact', 'footer'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  return (
    <header id="" className="sticky top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">

        {/* Hanging Logo Badge Overlapping the Hero */}
        <div className="relative left-2 z-50 self-start sm:left-4 lg:left-11 xl:left-[calc(704px_-_50vw)] min-[1981px]:left-[-196px]!">
          <Link
            href="/"
            className="inline-flex flex-col items-center justify-center bg-white px-4 sm:px-6 pt-2 sm:pt-2.5 pb-3.5 sm:pb-4 rounded-b-xl shadow-lg"
          >
            <Image
              src="/images/PICS_Landing Page_12 Oct 2026__02.png"
              alt="Professional Immigration Consulting Services Logo"
              width={190}
              height={97}
              priority
              className="w-[140px] sm:w-[165px] md:w-[180px] h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links & CTA */}
        <div className="flex items-center space-x-8 lg:space-x-12 lg:translate-x-4 xl:translate-x-0 min-[1281px]:translate-x-[calc(50vw_-_640px)]! min-[1981px]:translate-x-[260px]!">
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[15px]">
            {navLinks.map((link) => {
              
              // Find this inside your navLinks.map loops and change it:
const isActive = activeSection === link.hash;

              return (
                <div key={link.name} className="relative flex flex-col items-center py-1">
                  <Link
                    href={link.href}
                    className={`transition-colors ${isActive
                      ? 'text-black font-semibold'
                      : 'text-[#62707A] hover:text-black font-medium'
                      }`}
                  >
                    {link.name}
                  </Link>
                  {/* {isActive && (
                    <span className="absolute -bottom-2.5 left-0 w-full h-[3px] bg-[#E00606] rounded-full" />
                  )} */}
             {isActive && (
          <div className="absolute -bottom-[29px] left-1/2 -translate-x-1/2 flex justify-center pointer-events-none z-20 w-auto">
            <Image
              src="/images/line2.webp"
              alt="Active tab indicator"
              width={140}
              height={55}
              priority
              unoptimized
              className="!w-[80px] sm:!w-[55px] !max-w-none h-auto object-contain object-bottom mix-blend-multiply"
            />
          </div>
        )}
                </div>
              );
            })}
          </nav>

          {/* Request a Consultation CTA Button with #F4C256 and Mantra Collab Sweep */}
          <Link
            href="/consultation"
            className="relative overflow-hidden group hidden sm:inline-flex items-center justify-center rounded-xl border border-[#F4C256] bg-[linear-gradient(to_bottom,#f4c256,#b5842b)] px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition-all active:scale-[0.98]"
          >
            {/* Mantra Collab sliding sweep animation layer */}
            <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none" />

            {/* Content */}
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F4C256]">Request a Consultation</span>
            <svg
              className="relative z-10 w-4 h-4 ml-2 transition-[color,transform] duration-300 group-hover:text-[#F4C256] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-navigation-menu"
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-lg`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.hash;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base rounded-lg transition-colors ${isActive
                ? 'font-semibold text-[#E00606] bg-red-50'
                : 'text-[#62707A] hover:text-black hover:bg-gray-50 font-medium'
                }`}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="pt-2">
          <Link
            href="/consultation"
            onClick={() => setMobileMenuOpen(false)}
            className="relative overflow-hidden group flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-slate-900 bg-[linear-gradient(to_bottom,#f4c256,#b5842b)] rounded-xl shadow-md border border-[#F4C256] transition-all active:scale-[0.98]"
          >
            <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out pointer-events-none" />
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F4C256]">Request a Consultation</span>
            <svg
              className="relative z-10 w-4 h-4 ml-2 transition-[color,transform] duration-300 group-hover:text-[#F4C256] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
    </header>
  );
}
