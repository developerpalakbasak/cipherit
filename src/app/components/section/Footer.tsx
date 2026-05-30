"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Magnetic from '../utils/Magnetic';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden">
      {/* Accent glow elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link 
              href="/" 
              className="flex items-center gap-0 group"
            >
              <Image 
                src="/cipherit.svg" 
                alt="CipherIt logo" 
                width={32} 
                height={32} 
                className="mr-[-2px]" 
              />
              <span className="text-lg font-semibold font-syne tracking-tight text-white group-hover:text-secondary transition-colors">
                ipherIT
              </span>
            </Link>
            
            <p className="text-gray-400 font-space-grotesk text-sm max-w-sm leading-relaxed">
              We help businesses grow online with beautiful websites, mobile apps, online stores, and smart digital tools. You focus on your business — we handle the rest.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="text-[10px] uppercase font-bold text-gray-500 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                No Hidden Fees
              </span>
              <span className="text-[10px] uppercase font-bold text-gray-500 border border-white/10 bg-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-btn rounded-full" />
                Results Guaranteed
              </span>
            </div>
          </div>

          {/* Capabilities Col */}
          <div>
            <h4 className="text-sm font-semibold font-syne uppercase tracking-wider text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-4 text-sm font-space-grotesk text-gray-400">
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScroll(e, "/#services")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Websites & Web Apps
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScroll(e, "/#services")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScroll(e, "/#services")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Online Stores
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScroll(e, "/#services")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Get Found on Google
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  onClick={(e) => handleScroll(e, "/#services")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Ongoing Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Col */}
          <div>
            <h4 className="text-sm font-semibold font-syne uppercase tracking-wider text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm font-space-grotesk text-gray-400">
              <li>
                <Link 
                  href="/#results" 
                  onClick={(e) => handleScroll(e, "/#results")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/#pricing" 
                  onClick={(e) => handleScroll(e, "/#pricing")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Investment Plans
                </Link>
              </li>
              <li>
                <Link 
                  href="/#reviews" 
                  onClick={(e) => handleScroll(e, "/#reviews")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Partnerships
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  onClick={(e) => handleScroll(e, "/#contact")}
                  className="hover:text-secondary hover:underline transition-colors"
                >
                  Hire Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected Col */}
          <div>
            <h4 className="text-sm font-semibold font-syne uppercase tracking-wider text-white mb-6">
              Stay Connected
            </h4>
            <p className="text-gray-400 text-xs font-space-grotesk leading-relaxed mb-4">
              Get practical tips on growing your business online, straight to your inbox. No spam, ever.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="architect@company.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary transition-all"
              />
              <Magnetic>
                <button className="w-full btn-primary text-xs py-3 font-bold rounded-xl text-center shadow-none hover:shadow-[0_0_10px_#9cfeca] transition-all">
                  Subscribe
                </button>
              </Magnetic>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-space-grotesk text-gray-500">
          <p>
            © {new Date().getFullYear()} CipherIT. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
