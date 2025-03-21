'use client';

import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-hero.jpg"
            alt="Contact hero background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Let’s Connect
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Have a question or a project in mind? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/30 shadow-lg rounded-xl p-8 backdrop-blur-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-lg bg-white/70 border-transparent shadow-sm focus:border-blue-500 focus:ring-blue-500 h-14 px-4 text-lg backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg bg-white/70 border-transparent shadow-sm focus:border-blue-500 focus:ring-blue-500 h-14 px-4 text-lg backdrop-blur-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 block w-full rounded-lg bg-white/70 border-transparent shadow-sm focus:border-blue-500 focus:ring-blue-500 p-4 text-lg backdrop-blur-sm"
                  placeholder="Your message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600/90 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 h-14 backdrop-blur-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 