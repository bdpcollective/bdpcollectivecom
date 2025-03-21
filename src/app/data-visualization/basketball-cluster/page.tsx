'use client';

import BasketballClusterTree from '@/app/components/BasketballClusterTree';
import Link from 'next/link';

export default function BasketballCluster() {
  return (
    <main>
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-normal mb-4">Basketball Radial Cluster Tree</h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <Link href="/data-visualization" className="text-gray-600 hover:text-gray-900 mb-8 inline-block">
            ← Back to Data Visualization
          </Link>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="w-full">
              <div className="w-full">
                <BasketballClusterTree />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 