export default function ProcessSteps() {
  const steps = [
    {
      step: 'STEP 01',
      title: 'Share your situation',
      description:
        'Outline your goals, family or business circumstances, and any relevant immigration history.',
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
    {
      step: 'STEP 02',
      title: 'Explore relevant services',
      description:
        'Review the service areas and possible pathways that may align with your circumstances.',
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      step: 'STEP 03',
      title: 'Decide on next steps',
      description:
        'Understand what additional information or professional assessment may be needed before moving forward.',
      icon: (
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process-steps" aria-labelledby="process-steps-heading" className="scroll-mt-28 relative w-full overflow-hidden bg-[#f4f7fc] py-20">
      <div className="pointer-events-none absolute -right-5 -top-5 opacity-10">
        <svg className="h-48 w-48 text-gray-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2L9.5 8.5 2 9.5 7.5 14.5 6 22 12 18.5 18 22 16.5 14.5 22 9.5 14.5 8.5z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1980px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto mb-14 max-w-3xl space-y-3 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#cca34a] uppercase sm:text-sm">
            WHY EXPLORE OUR SERVICES
          </p>
          <h2 id="process-steps-heading" className="text-3xl font-bold text-[#0a1b38] sm:text-4xl lg:text-5xl">
            A clear, thoughtful <span className="text-[#cca34a]">place to begin</span>
          </h2>
          <p className="pt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
            Immigration needs differ from one person or organization to another. <br className="hidden sm:inline" />
            A structured first conversation can help identify the questions and service areas worth exploring.
          </p>
        </div>

        <div role="list" aria-label="How our process works" className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <article
              key={item.title}
              role="listitem"
              aria-label={`Step ${index + 1}: ${item.title}`}
              className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#cca34a] uppercase">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#cba33f] shadow-sm">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#0a1b38]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}