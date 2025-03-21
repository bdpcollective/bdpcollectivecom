'use client';

import Link from 'next/link';
import NebraskaFootballChart from '@/app/components/NebraskaFootballChart';

export default function NebraskaFootball() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[25vh] bg-black pt-16">
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-6xl font-normal mb-4 text-white text-center font-['var(--font-noto-serif)']">
            Nebraska Football Analytics
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto text-center">
            Interactive visualizations of Nebraska football statistics and trends
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-20">
        <Link 
          href="/data-visualization" 
          className="inline-flex items-center text-gray-600 hover:text-[#E41E3F] transition-colors mb-8"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Data Visualization
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">20 Years of Nebraska Football | Statistics by Week | 2005-2024
           </h2>
          <NebraskaFootballChart />
        </div>
      </section>
    </main>
  );
}