import Image from "next/image";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";

const nuPhotos = [
  {
    src: "/images/nu/2011-10-27_BrianandTom843.jpg",
    alt: "Brian and Tom at NU",
    date: "October 27, 2011",
  },
  {
    src: "/images/nu/2010-12-09_NU_1024_3414.jpg",
    alt: "NU campus",
    date: "December 9, 2010",
  },
  {
    src: "/images/nu/nu-vs-cu-2010.jpg",
    alt: "NU vs CU game",
    date: "2010",
  },
  {
    src: "/images/nu/2010-10-31_NUvsMU_Pano3272.jpg",
    alt: "NU vs MU game panorama",
    date: "October 31, 2010",
  },
  {
    src: "/images/nu/NUvsWKU3_web.jpg",
    alt: "NU vs WKU game",
    date: "2010",
  },
  {
    src: "/images/nu/CowboyStadium2.jpg",
    alt: "Cowboy Stadium",
    date: "2010",
  },
  {
    src: "/images/nu/DSC_0123.jpg",
    alt: "NU campus",
    date: "2010",
  },
];

export default function NUPhotos() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">University of Nebraska Sports</h1>
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
          {nuPhotos.map((photo, index) => (
            <ImageCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              date={photo.date}
              photos={nuPhotos}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 