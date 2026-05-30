import React from 'react';

const PLANS = [
    {
        name: "Starter",
        price: "999",
        description: "Perfect if you're just getting started and need a professional online presence that gets you noticed.",
        features: [
            "A Beautiful, Custom Website",
            "Works on All Phones & Tablets",
            "Show Up on Google (Basic SEO)",
            "Contact Form & Social Links",
            "1 Month of Free Support"
        ],
        buttonText: "Get Started",
        recommended: false
    },
    {
        name: "Growth",
        price: "2,499",
        description: "Best for growing businesses that want to attract more customers, sell online, and run smoother operations.",
        features: [
            "Website + Mobile App",
            "Online Store or Booking System",
            "Get Found on Google (Full SEO)",
            "Accept Payments Online",
            "Priority Support, Anytime",
            "Monthly Performance Report"
        ],
        buttonText: "Start Growing",
        recommended: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For established businesses that need a complete digital overhaul or a powerful custom system built from scratch.",
        features: [
            "Full Custom Software Solution",
            "Web + Mobile + Desktop Apps",
            "Advanced Google SEO Strategy",
            "Dedicated Account Manager",
            "Lifetime Ongoing Support",
            "Scales As Your Business Grows"
        ],
        buttonText: "Let's Talk",
        recommended: false
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-10 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Simple, Honest Pricing</h2>
                    <h3 className="text-2xl md:text-3xl font-medium font-syne mb-6">
                        You Know Exactly <br />
                        <span className="text-secondary">What You're Getting</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-space-grotesk">
                        No hidden fees. No confusing packages. Just clear, fair pricing that grows with your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {PLANS.map((plan, index) => (
                        <div 
                            key={index}
                            className={`relative flex flex-col p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                                plan.recommended 
                                ? "bg-white/10 border-secondary/50 shadow-[0_0_40px_rgba(156,254,202,0.1)] z-20" 
                                : "bg-white/5 border-white/10 hover:border-white/20 z-10"
                            }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-black text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_0_20px_rgba(156,254,202,0.4)]">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-base font-semibold font-syne text-white mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price !== "Custom" ? `$${plan.price}` : "Custom"}
                                    </span>
                                    {plan.price !== "Custom" && <span className="text-gray-400">/project</span>}
                                </div>
                                <p className="mt-4 text-gray-400 font-space-grotesk">{plan.description}</p>
                            </div>

                            <ul className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 font-space-grotesk">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={plan.recommended ? "#9cfeca" : "currentColor"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-70">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                                plan.recommended 
                                ? "bg-secondary text-black hover:brightness-110 shadow-[0_0_20px_rgba(156,254,202,0.2)]" 
                                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                            }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
