'use client';

import { useState } from 'react';

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceArea: '',
    situation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="scroll-mt-28 relative w-full bg-[#07152f] text-white py-20 lg:py-28 overflow-hidden">

      {/* Background City / Tower Silhouette Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-900 to-black">
        {/* Optional background image / Toronto CN tower silhouette can be placed here if available as a public asset */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1980px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text & Bullet Points */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#cca34a] uppercase">
              LET&apos;S DISCUSS YOUR NEXT STEP
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Discuss Your Canadian <br /> Immigration Needs
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Whether you are exploring a business opportunity, seeking to sponsor a family member, or need help with a complex immigration matter, get in touch to discuss your circumstances and the services that may be relevant to you.
            </p>

            {/* Checklist Items */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-700/80 text-white flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-200">Tell us what you are hoping to achieve</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-700/80 text-white flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-200">Identify the service area most relevant to you</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-700/80 text-white flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-gray-200">Take the next step with more clarity</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-gray-900 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#07152f]">Start a Conversation</h3>
                <p className="text-xs text-gray-500 mt-1">Share a few details and prepare an inquiry.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#f4f7fc] border border-gray-200 rounded-lg focus:outline-none focus:border-[#cca34a] text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#f4f7fc] border border-gray-200 rounded-lg focus:outline-none focus:border-[#cca34a] text-gray-800 placeholder-gray-400"
                  />
                </div>

                {/* Service Area Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1">
                    What do you need help with?
                  </label>
                  <select
                    required
                    value={formData.serviceArea}
                    onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#f4f7fc] border border-gray-200 rounded-lg focus:outline-none focus:border-[#cca34a] text-gray-800"
                  >
                    <option value="" disabled>Choose a service area</option>
                    <option value="business">Business & Entrepreneur Immigration</option>
                    <option value="family">Family Sponsorship</option>
                    <option value="complex">Complex & Challenging Cases</option>
                    <option value="humanitarian">Humanitarian & Compassionate Applications</option>
                    <option value="temporary">Temporary Resident Visas & Other Services</option>
                    <option value="pathway">Find a Relevant Pathway</option>
                  </select>
                </div>

                {/* Situation Description */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wide mb-1">
                    Briefly describe your situation
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can we help?"
                    value={formData.situation}
                    onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#f4f7fc] border border-gray-200 rounded-lg focus:outline-none focus:border-[#cca34a] text-gray-800 placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-gray-900 bg-gradient-to-r from-[#d8b248] via-[#e2c15e] to-[#ba8f2e] rounded-lg shadow-md hover:opacity-95 transition-all"
                >
                  Prepare Email Inquiry
                  <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}