import React from 'react';

const CONTACT_INFO = [
  {
    label: "Drop Us an Email",
    value: "hello@cipherit.io",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    )
  },
  {
    label: "We Reply Within",
    value: "24 Hours, Guaranteed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    )
  },
  {
    label: "We're Available",
    value: "7 Days a Week",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    )
  }
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Side: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">Let's Connect</h2>
            <h3 className="text-2xl md:text-3xl font-medium font-syne mb-8 leading-tight">
              We're Here to Help <br />
              <span className="text-secondary">Your Vision Grow</span>
            </h3>
            <p className="text-gray-400 text-lg font-space-grotesk mb-12 max-w-lg leading-relaxed">
              Have a question or a project in mind? We'd love to hear from you. Send us a message and let's start a conversation about how we can support your journey.
            </p>

            <div className="space-y-8">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-[0_0_10px_rgba(156,254,202,0.1)] group-hover:shadow-[0_0_20px_rgba(156,254,202,0.3)] transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-xl font-medium text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            {/* Decorative glow behind form */}
            <div className="absolute -inset-4 bg-secondary/5 rounded-[40px] blur-3xl pointer-events-none" />

            <form className="relative bg-white/5 border border-white/10 p-10 rounded-[32px] backdrop-blur-xl shadow-2xl">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Project Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all appearance-none cursor-pointer">
                      <option className="bg-black text-white">Custom Software Development</option>
                      <option className="bg-black text-white">Mobile App Architecture</option>
                      <option className="bg-black text-white">SEO & Marketing Domination</option>
                      <option className="bg-black text-white">E-commerce Transformation</option>
                      <option className="bg-black text-white">Maintenance & Security</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your goals and technical requirements..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(156,254,202,0.1)] hover:shadow-[0_0_40px_rgba(156,254,202,0.3)]"
                >
                  Send My Message — It's Free
                </button>

                <p className="text-center text-xs text-gray-500 font-space-grotesk mt-6">
                  🔒 Your information is private and will never be shared.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
