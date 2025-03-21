import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hello friendos.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            I'm Brian, a Principal User Experience Design Consultant and photographer based in Omaha, Nebraska. 
          </p>
        </div>
      </div>
    </main>
  );
}

// Test deployment 