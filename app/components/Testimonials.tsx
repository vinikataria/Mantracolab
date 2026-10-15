'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Jaden Smith',
    avatar: '/images/services/men.webp', // Add your avatar image path here
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
  },
  {
    id: 2,
    name: 'Jaden Smith',
    avatar: '/images/avatar-1.webp',
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
  },
  {
    id: 3,
    name: 'Jaden Smith',
    avatar: '/images/avatar-1.webp',
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
  },
];

export default function Testimonials() {
  const [, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="w-full bg-white py-20 relative overflow-hidden">
      {/* Background Watermark Leaf Top Left */}
      <div className="absolute left-6 top-10 opacity-10 pointer-events-none">
        <svg className="w-28 h-28 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L9.5 8.5 2 9.5 7.5 14.5 6 22 12 18.5 18 22 16.5 14.5 22 9.5 14.5 8.5z" />
        </svg>
      </div>

      {/* Background Large Text Watermark at the Bottom */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-full text-center text-slate-100 font-extrabold text-6xl sm:text-8xl lg:text-9xl select-none pointer-events-none tracking-widest whitespace-nowrap opacity-60">
        PROFESSIONAL
      </div>

      <div className="relative z-10 mx-auto max-w-[1980px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center space-y-2 mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#cca34a] uppercase">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1b38]">
            Success <span className="text-[#cca34a]">Stories</span>
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm relative flex flex-col justify-between transition-shadow hover:shadow-md pt-12"
            >
              {/* Floating Avatar Circle */}
              <div className="absolute -top-7 left-8 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-200">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Quote Mark Icon Top Right */}
              <div className="absolute top-6 right-6 text-gray-200">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Body Text */}
              <p className="text-xs text-gray-500 leading-relaxed mb-6 pt-2">
                {item.text}
              </p>

              {/* Card Footer: Name & Rating Stars */}
              <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                <h4 className="text-sm font-bold text-[#0a1b38]">{item.name}</h4>
                <div className="flex text-[#cca34a] space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#cca34a] hover:text-[#cca34a] transition-colors bg-white shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#cca34a] hover:text-[#cca34a] transition-colors bg-white shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}