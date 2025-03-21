'use client';

import ImageCard from '@/components/ImageCard';

interface PhotoGridProps {
  photos: string[];
  eventTitle: string;
}

export default function PhotoGrid({ photos, eventTitle }: PhotoGridProps) {
  const formattedPhotos = photos.map((photo, index) => ({
    src: photo,
    alt: `${eventTitle} photo ${index + 1}`,
    date: '', // You might want to add dates to your lacrosse photos
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {formattedPhotos.map((photo, index) => (
        <ImageCard
          key={index}
          src={photo.src}
          alt={photo.alt}
          date={photo.date}
          photos={formattedPhotos}
          currentIndex={index}
        />
      ))}
    </div>
  );
} 