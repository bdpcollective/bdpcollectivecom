import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PhotoGrid from './PhotoGrid';

interface EventData {
  title: string;
  description: string;
  date: string;
  location: string;
  photos: string[];
}

// This would typically come from a CMS or database
const eventData: Record<string, EventData> = {
  "nebraska-state-championship": {
    title: "Nebraska State Championship",
    description: "High school lacrosse state championship tournament featuring top teams from across Nebraska.",
    date: "May 2024",
    location: "Omaha, NE",
    photos: [
      "/images/lacrosse/state-championship/photo1.jpg",
      "/images/lacrosse/state-championship/photo2.jpg",
      "/images/lacrosse/state-championship/photo3.jpg",
      // Add more photos as needed
    ]
  },
  "20250308-varsity-mwhs-vs-akeny": {
    title: "Varsity: MWHS vs Akeny",
    description: "Varsity lacrosse match between Millard West High School and Akeny.",
    date: "March 8, 2025",
    location: "Millard West High School",
    photos: Array.from({ length: 53 }, (_, i) => 
      `/images/lacrosse/20250308_Varsity_MWHS_vsAkeny/20250309_MWHS_Lacrosse - ${i + 1}.jpeg`
    )
  },
  "20250308-jv-mwhs-vs-akeny": {
    title: "JV: MWHS vs Akeny",
    description: "Junior Varsity lacrosse match between Millard West High School and Akeny.",
    date: "March 8, 2025",
    location: "Millard West High School",
    photos: Array.from({ length: 53 }, (_, i) => 
      `/images/lacrosse/20250308_JV_MWHS_vsAkeny/20250309_MWHS_Lacrosse - ${i + 1}.jpeg`
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(eventData).map((event) => ({
    event,
  }));
}

export default function EventGallery({ params }: { params: { event: string } }) {
  const event = eventData[params.event];

  if (!event) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[oklch(0.216_0.006_56.043)]">
        <div className="absolute inset-0 z-0">
          <Image
            src={event.photos[0]}
            alt={event.title}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <Link 
              href="/images/lacrosse"
              className="inline-block mb-6 text-white hover:text-gray-200 transition-colors"
            >
              ← Back to Events
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {event.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              {event.description}
            </p>
            <div className="mt-4 text-gray-200">
              <span className="mr-4">{event.date}</span>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="container mx-auto px-4 py-20">
        <PhotoGrid photos={event.photos} eventTitle={event.title} />
      </section>
    </main>
  );
} 