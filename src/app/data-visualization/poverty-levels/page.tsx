'use client';

import Link from 'next/link';
import PovertyMap from '@/app/components/PovertyMap';

export default function PovertyLevels() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[25vh] bg-black pt-16">
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-6xl font-normal mb-4 text-white text-center font-['var(--font-noto-serif)']">
            Poverty Levels by County
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto text-center">
            Interactive map showing poverty rates across US counties
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">US County Poverty Rates | 2023</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#f7fbff] border border-gray-300 mr-2"></div>
                <span className="text-sm text-gray-600">Lowest</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#c6dbef] border border-gray-300 mr-2"></div>
                <span className="text-sm text-gray-600">Low</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#6baed6] border border-gray-300 mr-2"></div>
                <span className="text-sm text-gray-600">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#2171b5] border border-gray-300 mr-2"></div>
                <span className="text-sm text-gray-600">High</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-[#08306b] border border-gray-300 mr-2"></div>
                <span className="text-sm text-gray-600">Highest</span>
              </div>
            </div>
          </div>
          <PovertyMap />
        </div>
      </section>
    </main>
  );
} 