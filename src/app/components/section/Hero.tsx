"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Typewriter from '../utils/Typewriter';
import Stars from '../utils/Stars';
import Magnetic from '../utils/Magnetic';

const quotes = [
  "Websites",
  "Mobile Apps",
  "Desktop Apps",
  "Secure API Integrations",
  "E-commerce Ecosystems",
  "Technical SEO",
  "Brand Identity"
];

const Hero: React.FC = () => {
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

  const floatingTags = [
    { text: "🔒 Zero-Trust Security", top: "18%", left: "8%", rotate: -8, delay: 0 },
    { text: "⚡ Lightning Fast", top: "42%", left: "4%", rotate: 12, delay: 1 },
    { text: "📈 99.9% Uptime Guarantee", top: "14%", right: "8%", rotate: 6, delay: 2 },
    { text: "🛡️ 24/7 Expert Maintenance", top: "48%", right: "5%", rotate: -10, delay: 3 },
  ];

  return (
    <div 
      id='hero' 
      className="relative flex flex-col gap-10 justify-center items-center pt-24 min-h-screen bg-black overflow-hidden"
    >
      {/* Background Cyber Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Subtle tech ambient gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Moving background stars */}
      <Stars />

      {/* Floating Cyber Badges */}
      {floatingTags.map((tag, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md text-xs font-semibold text-gray-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20"
          style={{
            top: tag.top,
            left: tag.left,
            right: tag.right,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.85,
            scale: 1,
            y: [0, -12, 0],
            rotate: [tag.rotate, tag.rotate + 3, tag.rotate - 3, tag.rotate],
          }}
          transition={{
            y: {
              duration: 5 + idx,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 7 + idx,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: { duration: 0.6 },
            scale: { duration: 0.6 }
          }}
          whileHover={{ 
            scale: 1.1, 
            opacity: 1, 
            borderColor: 'rgba(156,254,202,0.4)',
            boxShadow: '0 0 15px rgba(156,254,202,0.15)'
          }}
        >
          {tag.text}
        </motion.div>
      ))}

      {/* Strategic Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 px-6 py-2 rounded-full border border-secondary/30 bg-secondary/5 text-xs md:text-sm font-semibold tracking-wider text-secondary shadow-[0_0_15px_rgba(156,254,202,0.08)] backdrop-blur-sm"
      >
        🛡️ Strategic Software Solutions & Maintenance
      </motion.div>

      {/* Content Container */}
      <div className="z-10 flex flex-col justify-center items-center text-center px-4 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1] font-syne">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block text-white"
          >
            Innovative Solutions for
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block min-h-[75px] md:min-h-[90px] mt-2 bg-gradient-to-r from-secondary via-btn to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(156,254,202,0.15)]"
          >
            <Typewriter quotes={quotes} className="text-secondary" />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-base md:text-xl text-gray-400 max-w-2xl font-space-grotesk leading-relaxed"
        >
          From high-performance custom Web & Mobile apps to military-grade API security and viral digital SEO. We don't just engineer your foundation—we maintain it for life.
        </motion.p>
      </div>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="z-10 w-full flex flex-col items-center text-center gap-4 px-4"
      >
        <Magnetic>
          <Link
            href="/#contact"
            onClick={(e) => handleScroll(e, "/#contact")}
            className="btn-primary flex items-center gap-3 px-10 py-5 rounded-2xl text-base font-bold shadow-[0_0_20px_rgba(58,231,181,0.2)] hover:shadow-[0_0_40px_rgba(58,231,181,0.45)] hover:scale-[1.03] transition-all"
          >
            <span>Start Your Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </Magnetic>
        
        <p className="text-xs md:text-sm text-gray-500 font-space-grotesk tracking-wide mt-2">
          ⚡ Free Architecture Assessment • Lifetime Support Included
        </p>
      </motion.div>

      {/* bottom indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-secondary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
