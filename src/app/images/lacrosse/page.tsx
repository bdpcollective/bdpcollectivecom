import Image from 'next/image';
import Link from 'next/link';

interface EventCard {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  slug: string;
}

const lacrosseEvents: EventCard[] = [
  {
    title: "Varsity: MWHS vs Akeny",
    description: "Varsity lacrosse match between Millard West High School and Akeny.",
    image: "/images/lacrosse/20250308_Varsity_MWHS_vsAkeny/20250309_MWHS_Lacrosse - 1.jpeg",
    date: "March 8, 2025",
    location: "Millard West High School",
    slug: "20250308-varsity-mwhs-vs-akeny"
  },
  {
    title: "JV: MWHS vs Akeny",
    description: "Junior Varsity lacrosse match between Millard West High School and Akeny.",
    image: "/images/lacrosse/20250308_JV_MWHS_vsAkeny/20250309_MWHS_Lacrosse - 1.jpeg",
    date: "March 8, 2025",
    location: "Millard West High School",
    slug: "20250308-jv-mwhs-vs-akeny"
  }
];

export default function LacrosseEvents() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-[oklch(0.216_0.006_56.043)]">
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Lacrosse Photography
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Capturing the intensity and athleticism of lacrosse across Nebraska and the Midwest.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-20">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lacrosseEvents.map((event, index) => (
            <Link 
              key={index}
              href={`/images/lacrosse/${event.slug}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow block"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
} 