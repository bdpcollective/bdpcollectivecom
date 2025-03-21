'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function DataVisualization() {
  const scrollToCards = () => {
    document.getElementById('data-viz-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/data-viz-hero.jpg"
            alt="Data visualization hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center h-full">
          <div className="flex-1 flex items-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Data Visualization
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Interactive data visualizations and analytics projects.
              </p>
            </div>
          </div>
          
          {/* Chevron */}
          <button
            onClick={scrollToCards}
            className="animate-bounce p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors mb-8"
            aria-label="Scroll to visualization categories"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="data-viz-cards" className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Nebraska Football */}
          <Link href="/data-visualization/nebraska-football" className="group h-full">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
              <div className="h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/nu/football.png"
                  alt="Nebraska Football"
                  width={800}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Nebraska Football</h3>
              <p className="text-gray-600">Visualizing key statistics and trends from Nebraska football games</p>
            </div>
          </Link>

          {/* Poverty Levels */}
          <Link href="/data-visualization/poverty-levels" className="group h-full">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
              <div className="h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/poverty/poverty-map.png"
                  alt="Poverty Levels by County"
                  width={800}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Poverty Levels</h3>
              <p className="text-gray-600">Interactive map showing poverty rates across US counties</p>
            </div>
          </Link>

          <Link href="/data-visualization/basketball-cluster" className="group h-full">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
              <div className="h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/ncaa/ncaa-tree.png"
                  alt="Basketball Collapsible Tree"
                  width={800}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">NCAA Basketball Collapsible Tree</h3>
              <p className="text-gray-600">Interactive visualization of NCAA basketball team clustering</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 