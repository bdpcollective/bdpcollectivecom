import Image from "next/image";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";

const specialOlympicsPhotos = [
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 9.jpeg",
    alt: "Special Olympics event",
    date: "June 18, 2010",
  },
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 8.jpeg",
    alt: "Special Olympics event",
    date: "June 18, 2010",
  },
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 7.jpeg",
    alt: "Special Olympics event",
    date: "June 18, 2010",
  },
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 6.jpeg",
    alt: "Special Olympics event",
    date: "June 18, 2010",
  },
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 3.jpeg",
    alt: "Special Olympics event",
    date: "June 18, 2010",
  },
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 2.jpeg",
    alt: "Eddie Barbanell and Brooklyn Decker",
    date: "June 18, 2010",
  },
  {
    src: "/images/events/20100616_NationalSpecialOlympics/20100618_NationalSpecialOlymics - 1.jpeg",
    alt: "Tim Shriver",
    date: "June 18, 2010",
  },
];

export default function SpecialOlympicsPhotos() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">National Special Olympics 2010</h1>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col mb-8">
          <Link
            href="/images"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOlympicsPhotos.map((photo, index) => (
            <ImageCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              date={photo.date}
              photos={specialOlympicsPhotos}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 