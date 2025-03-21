'use client';

import Image from "next/image";
import Link from "next/link";
import ImageCard from "@/components/ImageCard";

const zooPhotos = [
  {
    src: "/images/zoo/2010-12-11_PenguinBlog1200_3425.jpg",
    alt: "Penguin at the zoo",
    date: "December 11, 2010",
  },
  {
    src: "/images/zoo/2010-12-09_zoo_1024_3420.jpg",
    alt: "Zoo animal",
    date: "December 9, 2010",
  },
  {
    src: "/images/zoo/2010-12-09_zoo_1024_3418.jpg",
    alt: "Zoo animal",
    date: "December 9, 2010",
  },
  {
    src: "/images/zoo/2010-12-09_zoo_1024_3417.jpg",
    alt: "Zoo animal",
    date: "December 9, 2010",
  },
];

export default function ZooPhotos() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-64 bg-gray-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Zoo Photography</h1>
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
          {zooPhotos.map((photo, index) => (
            <ImageCard
              key={index}
              src={photo.src}
              alt={photo.alt}
              date={photo.date}
              photos={zooPhotos}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 