import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/section/Navbar";
import Footer from "./components/section/Footer";
import CustomCursor from "./components/utils/CustomCursor";
import Atmosphere from "./components/utils/Atmosphere";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CipherIT — We Build Websites, Apps & Online Stores That Grow Your Business",
  description: "CipherIT is a full-service digital agency. We build beautiful websites, mobile apps, and online stores for businesses of all sizes. Get found on Google, sell more, and grow faster — without the tech headache.",
  keywords: "website design, mobile app development, online store, SEO, digital agency, web development, e-commerce",
  openGraph: {
    title: "CipherIT — Your Business, Online & Growing",
    description: "We build websites, apps, and online stores that get results. No tech jargon. Just real growth for your business.",
    type: "website",
    url: "https://cipherit.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherIT — Websites, Apps & Online Stores",
    description: "We help businesses grow online. Get a free consultation today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        <CustomCursor />
        <Atmosphere />
        <Navbar />
        <main className="flex-1 w-full relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
