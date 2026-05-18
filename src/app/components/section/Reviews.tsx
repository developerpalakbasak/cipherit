import React from 'react';

const REVIEWS = [
    {
        name: "Alexander Wright",
        role: "CEO, TechFlow Solutions",
        content: "CipherIT transformed our legacy systems into a high-performance cloud infrastructure. Their 24/7 support is truly unmatched in the industry.",
        rating: 5,
        avatar: "AW"
    },
    {
        name: "Sarah Chen",
        role: "Founder, Bloom E-commerce",
        content: "The custom Shopify integration they built for us increased our conversion rate by 40% in just two months. Their eye for detail is incredible.",
        rating: 5,
        avatar: "SC"
    },
    {
        name: "Marcus Thorne",
        role: "Marketing Director, Nexus Media",
        content: "From YouTube SEO to viral editing, CipherIT handles our entire digital presence. Our engagement metrics have tripled since partnering with them.",
        rating: 5,
        avatar: "MT"
    },
    {
        name: "Elena Rodriguez",
        role: "CTO, Argent Financial",
        content: "Security was our top priority, and CipherIT delivered a bulletproof architecture. They don't just write code; they build digital fortresses.",
        rating: 5,
        avatar: "ER"
    },
    {
        name: "Jameson P. Lee",
        role: "Product Manager, SkyBound Apps",
        content: "The UI/UX design work they did for our mobile app is world-class. Our users constantly compliment the intuitive and sleek interface.",
        rating: 5,
        avatar: "JL"
    },
    {
        name: "Olivia Vance",
        role: "Director, Global Logistics Inc.",
        content: "Managing global supply chains requires real-time data. CipherIT built us a dashboard that we now depend on every single minute. Exceptional work.",
        rating: 5,
        avatar: "OV"
    }
];

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Client Testimonials</h2>
                    <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6">
                        Trusted by <span className="text-secondary">Industry Leaders</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
                        Don't just take our word for it. Here's what our partners say about their digital transformation journey with CipherIT.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {REVIEWS.map((review, index) => (
                        <div 
                            key={index}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-secondary/50 hover:bg-white/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold border border-secondary/30">
                                    {review.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold font-syne text-white">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                            
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#9cfeca" stroke="#9cfeca" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                ))}
                            </div>

                            <p className="text-gray-300 font-space-grotesk leading-relaxed italic">
                                "{review.content}"
                            </p>
                            
                            {/* Decorative quotes */}
                            <div className="absolute top-6 right-8 text-secondary/10 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.466 15 15.521 15C16.576 15 17.025 16.896 17.025 18L17.025 21H14.017ZM6.017 21L6.017 18C6.017 16.896 6.466 15 7.521 15C8.576 15 9.025 16.896 9.025 18L9.025 21H6.017ZM21 3V10H16.141C15.424 10 14.773 10.378 14.414 11H12.586C12.227 10.378 11.576 10 10.859 10H6V3H21ZM16.141 8H19V5H8V8H10.859C11.576 8 12.227 8.378 12.586 9H14.414C14.773 8.378 15.424 8 16.141 8Z"/></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
