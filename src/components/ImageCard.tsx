'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
  date: string;
}

interface ImageCardProps {
  src: string;
  alt: string;
  date: string;
  photos: Photo[];
  currentIndex: number;
}

export default function ImageCard({ src, alt, date, photos, currentIndex }: ImageCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLightboxLoading, setIsLightboxLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(currentIndex);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          setIsLightboxOpen(false);
          setIsFullscreen(false);
          break;
        case 'ArrowLeft':
          setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
          break;
        case 'ArrowRight':
          setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
          break;
        case 'f':
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, photos.length]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    setTouchEnd({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const deltaX = touchEnd.x - touchStart.x;
    const deltaY = touchEnd.y - touchStart.y;

    // Only handle horizontal swipes if vertical movement is minimal
    if (Math.abs(deltaY) < 50) {
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
        } else {
          setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
        }
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
    setLoadingProgress(100);
  };

  const handleLightboxImageLoad = () => {
    setIsLightboxLoading(false);
    setLoadingProgress(100);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      imageRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleZoom = (e: React.WheelEvent) => {
    if (!isLightboxOpen) return;
    
    e.preventDefault();
    const delta = e.deltaY * -0.01;
    setScale(prev => Math.min(Math.max(prev + delta, 1), 3));
  };

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <div className="relative aspect-[4/3]">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoadingComplete={handleImageLoad}
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiSk46NjVBQVRAQkBAQEBAQED/2wBDAR4eHh0aHTQaGjRAOC40QEA0QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQED/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setIsLightboxOpen(false);
            setIsFullscreen(false);
            setScale(1);
          }}
        >
          <div className="relative max-w-7xl w-full h-full">
            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPhotoIndex(prev => (prev > 0 ? prev - 1 : photos.length - 1));
              }}
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 z-50"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentPhotoIndex(prev => (prev < photos.length - 1 ? prev + 1 : 0));
              }}
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
              onClick={() => {
                setIsLightboxOpen(false);
                setIsFullscreen(false);
                setScale(1);
              }}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Fullscreen Button */}
            <button
              className="absolute top-4 right-16 text-white hover:text-gray-300 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isFullscreen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6v6M15 9l-6 6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                )}
              </svg>
            </button>

            {/* Loading Progress */}
            {loadingProgress < 100 && (
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
                <div 
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            )}

            {/* Image Container */}
            <div 
              ref={imageRef}
              className="relative w-full h-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onWheel={handleZoom}
            >
              {isLightboxLoading && (
                <div className="absolute inset-0 bg-gray-900 animate-pulse" />
              )}
              <div
                className="relative w-full h-full transition-transform duration-200"
                style={{ transform: `scale(${scale})` }}
              >
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    isLightboxLoading ? "opacity-0" : "opacity-100"
                  }`}
                  sizes="100vw"
                  priority
                  quality={90}
                  onLoadingComplete={handleLightboxImageLoad}
                />
              </div>
            </div>

            {/* Metadata */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm">{currentPhoto.date}</p>
                  <p className="text-sm opacity-75">{currentPhotoIndex + 1} of {photos.length}</p>
                </div>
                <p className="text-sm opacity-75">{currentPhoto.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 