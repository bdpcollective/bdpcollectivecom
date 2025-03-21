import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const metadata: Metadata = {
  title: "Brian Pope - UX Design & Photography",
  description: "Principal User Experience Design Consultant and photographer based in Omaha, Nebraska.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoSerif.variable}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 