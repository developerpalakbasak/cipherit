"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const METRICS = [
    { label: "Client ROI", value: "400%", description: "Average increase in revenue within the first year." },
    { label: "Systems Built", value: "150+", description: "Custom platforms delivered across 12 industries." },
    { label: "Code Quality", value: "99.9%", description: "Unit test coverage and architectural uptime." },
    { label: "Support SLA", value: "24/7", description: "Global monitoring and technical expert availability." }
];

const CASE_STUDIES = [
    {
        title: "Argent Financial Ecosystem",
        category: "Fintech & Security",
        outcome: "Zero breaches & 3x performance boost",
        description: "Re-engineered a legacy banking core into a high-security, distributed cloud architecture.",
        tags: ["Next.js", "Rust", "AWS", "Blockchain"]
    },
    {
        title: "Nexus Media Stream",
        category: "Scalable Infrastructure",
        outcome: "Handling 2M+ concurrent users",
        description: "Built a custom video streaming engine that reduced latency by 60% globally.",
        tags: ["Go", "WebRTC", "Redis", "Docker"]
    },
    {
        title: "Bloom Retail Hub",
        category: "E-commerce Transformation",
        outcome: "45% conversion rate increase",
        description: "Unified 5 separate store systems into one seamless headless commerce platform.",
        tags: ["Shopify Plus", "React", "Node.js", "SEO"]
    }
];

const AnimatedCounter = ({ value, delay }: { value: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className="inline-flex overflow-hidden py-1">
      {value.split('').map((char, i) => {
        const isEven = i % 2 === 0;
        const initialY = isEven ? 40 : -40;
        
        return (
          <motion.span
            key={i}
            initial={{ y: initialY, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: initialY, opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: delay + (i * 0.08), 
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
};

const Results: React.FC = () => {
    return (
        <section id="results" className="py-24 relative overflow-hidden bg-black/40">
            {/* Ambient background glow */}
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-10 relative z-10">
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32">
                    {METRICS.map((metric, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-secondary/30 transition-colors shadow-lg"
                        >
                            <h4 className="text-2xl md:text-3xl font-semibold font-syne text-secondary mb-2 drop-shadow-[0_0_15px_rgba(156,254,202,0.15)] flex justify-center">
                                <AnimatedCounter value={metric.value} delay={index * 0.15 + 0.3} />
                            </h4>
                            <p className="text-white font-bold mb-2 uppercase tracking-widest text-xs">{metric.label}</p>
                            <p className="text-gray-400 text-sm font-space-grotesk">{metric.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Case Studies</h2>
                        <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6 leading-tight">
                            Real Problems. <br />
                            <span className="text-secondary">Exceptional Solutions.</span>
                        </h3>
                    </motion.div>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {CASE_STUDIES.map((study, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative flex flex-col p-8 rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-secondary/30 shadow-2xl overflow-hidden"
                        >
                            {/* Accent line glow on card hover */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="mb-6">
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                                    {study.category}
                                </span>
                            </div>
                            <h4 className="text-lg font-semibold font-syne text-white mb-3 group-hover:text-secondary transition-colors">
                                {study.title}
                            </h4>
                            <p className="text-base md:text-lg font-medium text-gray-200 mb-4 font-space-grotesk italic">
                                "{study.outcome}"
                            </p>
                            <p className="text-gray-400 font-space-grotesk mb-8 flex-1 leading-relaxed">
                                {study.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                {study.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] uppercase font-bold text-gray-500 border border-white/10 bg-white/5 px-2.5 py-1 rounded transition-colors group-hover:border-secondary/20 group-hover:text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;
