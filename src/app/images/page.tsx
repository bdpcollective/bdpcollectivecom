'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Images() {
  const scrollToCards = () => {
    document.getElementById('image-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images-hero.jpg"
            alt="Photography hero background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center h-full">
          <div className="flex-1 flex items-center">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Images
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                A collection of my photography and artwork.
              </p>
            </div>
          </div>
          
          {/* Chevron */}
          <button
            onClick={scrollToCards}
            className="animate-bounce p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors mb-8"
            aria-label="Scroll to image categories"
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

      {/* Images Grid */}
      <section id="image-cards" className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <Link 
              key={index}
              href={image.link}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow block overflow-hidden"
            >
              <div className="relative h-48 group overflow-hidden">
                <Image
                  src={image.previewImage}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const images = [
  {
    title: "Lacrosse",
    description: "Bringing the energy and excitement of lacrosse to life through photography.",
    link: "/images/lacrosse",
    previewImage: "/images/lacrosse/20250308_Varsity_MWHS_vsAkeny/20250309_MWHS_Lacrosse - 1.jpeg"
  },
  {
    title: "Zoo",
    description: "Up Close with the Wild: Striking Portraits & Natural Behaviors",
    link: "/images/zoo",
    previewImage: "/images/zoo/2010-12-11_PenguinBlog1200_3425.jpg"
  },
  {
    title: "University of Nebraska Sports",
    description: "Capturing the excitement and energy of University of Nebraska sports through photography.",
    link: "/images/nu",
    previewImage: "/images/nu/2011-10-27_BrianandTom843.jpg"
  },
  {
    title: "Omaha",
    description: "Urban life and city scenes.",
    link: "/images/omaha",
    previewImage: "/images/omaha/20110704_Fireworks_bp-1.jpg"
  },
  {
    title: "Event Photography",
    description: "Capturing special moments at events.",
    link: "/images/events/20100616_NationalSpecialOlympics",
    previewImage: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 9.jpeg"
  }
]; 