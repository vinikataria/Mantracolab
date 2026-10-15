export default function FloatingContact() {
  return (
    <aside
      aria-label="Quick contact options"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end space-y-3.5 select-none"
    >
      {/* 1. Call Now Tab */}
      <a
        href="tel:+1234567890"
        className="group flex items-center h-12 w-[180px] bg-[#002D77] rounded-l-full shadow-[-4px_4px_16px_rgba(0,0,0,0.35)] translate-x-[126px] hover:translate-x-0 transition-transform duration-500 ease-in-out cursor-pointer"
      >
        {/* Full Uncut Circular Button */}
        <span className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ffffff] via-[#f4f6f8] to-[#afb1b2] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center flex-shrink-0 ml-[-1px]">
          <svg
            className="w-6 h-6 text-black transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            <path d="M16.5 3c3.87 0 7 3.13 7 7h-2c0-2.76-2.24-5-5-5V3z" />
            <path d="M15 6.5c2.21 0 4 1.79 4 4h-2c0-1.1-.9-2-2-2v-2z" />
          </svg>
        </span>
        {/* Text */}
        <span className="font-bold text-white text-base tracking-wide whitespace-nowrap pl-3.5 pr-5">
          Call Now
        </span>
      </a>

      {/* 2. Email Now Tab */}
      <a
        href="mailto:info@professionalimmigration.ca"
        aria-label="Send us an email"
        className="group flex items-center h-12 w-[180px] bg-[#002D77] rounded-l-full shadow-[-4px_4px_16px_rgba(0,0,0,0.35)] translate-x-[126px] hover:translate-x-0 transition-transform duration-500 ease-in-out cursor-pointer"
      >
        {/* Full Uncut Circular Button */}
        <span className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ffffff] via-[#f4f6f8] to-[#afb1b2] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center flex-shrink-0 ml-[-1px]">
          <svg
            className="w-5 h-5 text-black transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </span>
        {/* Text */}
        <span className="font-bold text-white text-base tracking-wide whitespace-nowrap pl-3.5 pr-5">
          Email Now
        </span>
      </a>

      {/* 3. Chat Now (WhatsApp) Tab */}
      <a
        href="https://wa.me/+1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center h-12 w-[180px] bg-[#002D77] rounded-l-full shadow-[-4px_4px_16px_rgba(0,0,0,0.35)] translate-x-[126px] hover:translate-x-0 transition-transform duration-500 ease-in-out cursor-pointer"
      >
        {/* Full Uncut Circular Button with WhatsApp Icon */}
        <span className="w-[54px] h-[54px] rounded-full bg-gradient-to-b from-[#ffffff] via-[#f4f6f8] to-[#afb1b2] shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center flex-shrink-0 ml-[-1px]">
          <svg
            className="w-6 h-6 text-black transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z" />
          </svg>
        </span>
        {/* Text */}
        <span className="font-bold text-white text-base tracking-wide whitespace-nowrap pl-3.5 pr-5">
          Chat Now
        </span>
      </a>
    </aside>
  );
}