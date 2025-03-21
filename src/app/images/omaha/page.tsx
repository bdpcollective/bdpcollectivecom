import Image from "next/image";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";

const omahaPhotos = [
  {
    src: "/images/omaha/20110704_Fireworks_bp-1.jpg",
    alt: "Fourth of July fireworks in Omaha",
    date: "July 4, 2011",
  },
  {
    src: "/images/omaha/2010-12-09_flowers_1024_3412.jpg",
    alt: "Flowers in Omaha",
    date: "December 9, 2010",
  },
  {
    src: "/images/omaha/2010-12-09_bobkerrybridge_1024_3409.jpg",
    alt: "Bob Kerry Bridge",
    date: "December 9, 2010",
  },
];

export default function OmahaPhotos() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Omaha Photography</h1>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/images"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Images
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {omahaPhotos.map((photo, index) => (
            <ImageCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              date={photo.date}
              photos={omahaPhotos}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 