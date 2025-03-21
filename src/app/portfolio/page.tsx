'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {
  const scrollToCards = () => {
    document.getElementById('portfolio-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio-hero.jpg"
            alt="UX Portfolio hero background"
            fill
            className="object-cover brightness-50"
            priority
            quality={75}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center h-full">
          <div className="flex-1 flex items-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                UX Portfolio
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Recent work and projects.
              </p>
            </div>
          </div>
          
          {/* Chevron */}
          <button
            onClick={scrollToCards}
            className="animate-bounce p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors mb-8"
            aria-label="Scroll to portfolio categories"
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

      {/* Portfolio Grid */}
      <section id="portfolio-cards" className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Link 
              href={`/portfolio/${item.slug}`}
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow block"
            >
              <div className="relative w-36 h-36 flex items-center justify-center mb-4 mx-auto">
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={144}
                  height={144}
                  className="object-contain mx-auto"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const portfolioItems = [
  {
    title: "Health Journaling App",
    description: "Designed the HealthComms mobile app prototype to help cancer patients easily track symptoms during treatment—because better tracking means better care.",
    logo: "/logos/healthcomms-logo.png",
    slug: "healthcomms",
    heroImage: "/logos/healthcomms-logo.png",
    content: "Detailed content about HealthComms project..."
  },
  {
    title: "Vendor Portal",
    description: "NFM's Vendor Portal had the right resources, but it was in need of a clearer roadmap for vendors and more control for the internal team to keep everything on track!",
    logo: "/logos/nfm-logo.png",
    slug: "nfm",
    heroImage: "/logos/nfm-hero.png",
    content: "Detailed content about NFM project..."
  },
  {
    title: "Messaging Management System",
    description: "Shifting from old-school manual methods to a sleek digital app for managing product marketing messages.",
    logo: "/logos/bestbuy-logo.png",
    slug: "bestbuy",
    heroImage: "/portfolio/bestbuy-hero.jpg",
    content: "Detailed content about Best Buy project..."
  },
  {
    title: "Inventory Management System",
    description: "Refresh of inventory screens to give functionality and a modern look. Built a pause feature, ensuring SKUs didn't go live until they reached every store preventing expensive shipping costs.",
    logo: "/logos/gap-logo.png",
    slug: "gap",
    heroImage: "/portfolio/gallup-hero.jpg",
    content: "Detailed content about Gallup project..."
  },
  {
    title: "Tablet App for Sales and Exchange",
    description: "Designed and prototyped a tablet app to enhance in-store sales support, improving efficiency and customer interactions.",
    logo: "/logos/sleep-number-logo.png",
    slug: "sleepnumber",
    heroImage: "/portfolio/sleep-number-logo.png",
    content: "Detailed content about SleepNumber project..."
  },
  {
    title: "Update to Lend a Hand Up Fundraiser Site",
    description: "Teamed up with DMF to revamp their Giving Hearts search and donation workflow making it easier, friendlier, and more powerful for donors and fundraisers alike!",
    logo: "/logos/dmf-logo2.png",
    slug: "dakota-medical-foundation",
    heroImage: "/portfolio/dmf-hero.jpg",
    content: "Detailed content about Dakota Medical Foundation project..."
  }
];