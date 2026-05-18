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
  title: "CipherIt",
  description: "Your Business and Software Solution.",
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
