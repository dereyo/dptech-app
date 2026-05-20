import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // بيانات workflow لتسهيل العرض
  const workflow = [
    { title: "Plumbing", desc: "Water systems & drainage", icon: "fa-wrench" },
    { title: "Electricity", desc: "Wiring & power setup", icon: "fa-bolt" },
    { title: "Plastering", desc: "Wall finishing & smoothing", icon: "fa-trowel" },
    { title: "Ceramic", desc: "Tile installation", icon: "fa-table-cells-large" },
    { title: "Painting", desc: "Final touches & color", icon: "fa-paint-roller" },
  ];

  // بيانات المميزات
  const features = [
    { title: "Smart Calculator", icon: "fa-calculator", desc: "Calculate materials accurately with our intelligent estimation tool" },
    { title: "Scan & Measure", icon: "fa-camera", desc: "Use your phone camera to scan and measure construction areas" },
    { title: "Track Progress", icon: "fa-chart-line", desc: "Monitor your construction journey and save results" },
    { title: "Best Offers", icon: "fa-tags", desc: "Access exclusive deals and compare prices from trusted suppliers" },
  ];

  return (
    <main id="main-content">
      
      {/* --- Section 1: Hero About --- */}
      <section id="hero-about" className="relative bg-gradient-to-br from-[#EBEBD3] to-white py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-dp-orange bg-opacity-10 rounded-full">
                <span className="text-dp-orange font-semibold text-sm">About DP TECH</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-dp-blue leading-tight">
                Simplifying Your <span className="text-dp-orange">Construction</span> Journey
              </h1>
              <p className="text-lg text-dp-blue text-opacity-80 leading-relaxed">
                A smart platform designed to guide you through every step of house building and finishing with clarity and confidence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-3.5 bg-dp-orange text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center space-x-2 group">
                  <span>Explore Platform</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button className="px-8 py-3.5 border-2 border-dp-blue text-dp-blue rounded-full font-semibold hover:bg-dp-blue hover:text-white transition-all">
                  Watch Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/49b2095347-40a9ed9911b23076cb3a.png" alt="Smart construction" />
              <div className="absolute inset-0 bg-gradient-to-t from-dp-blue/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
        {/* Background Blobs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-dp-orange opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#EBEBD3] opacity-30 rounded-full blur-3xl"></div>
      </section>

      {/* --- Section 2: Mission --- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-dp-blue mb-4">Our Mission</h2>
            <div className="w-24 h-1.5 bg-dp-orange mx-auto rounded-full mb-12"></div>
            <div className="bg-gradient-to-br from-[#EBEBD3]/40 to-white rounded-[2.5rem] p-10 lg:p-16 shadow-xl border border-[#EBEBD3]">
              <p className="text-xl lg:text-2xl text-dp-blue leading-relaxed font-medium">
                Our mission is to make home construction more <span className="text-dp-orange font-bold">efficient</span>, <span className="text-dp-orange font-bold">transparent</span>, and <span className="text-dp-orange font-bold">stress-free</span> by combining guidance, products, offers, and smart scanning tools in one place.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 3: What We Offer --- */}
      <section className="py-20 lg:py-28 bg-[#EBEBD3]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dp-blue mb-6">What We Offer</h2>
            <p className="text-lg text-dp-blue/70 max-w-3xl mx-auto">We are a smart platform designed to simplify the house building and finishing process.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Website Offer */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-lg border border-gray-100 group">
              <div className="w-16 h-16 bg-dp-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-dp-orange transition-all">
                <i className="fa-solid fa-globe text-3xl text-dp-orange group-hover:text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-dp-blue mb-4">Comprehensive Website</h3>
              <p className="text-dp-blue/80 leading-relaxed mb-6">Our goal is to guide users through every construction step — from plumbing to painting — in an organized way.</p>
              <div className="space-y-3">
                {["Step-by-step guidance", "Product recommendations", "Expert tips"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check-circle text-dp-orange"></i>
                    <span className="text-dp-blue font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* App Offer */}
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-lg border border-gray-100 group">
              <div className="w-16 h-16 bg-dp-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-dp-orange transition-all">
                <i className="fa-solid fa-mobile-screen-button text-3xl text-dp-orange group-hover:text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-dp-blue mb-4">Dedicated Mobile App</h3>
              <p className="text-dp-blue/80 leading-relaxed mb-6">A dedicated application that helps users accurately calculate needs, track results, and make better decisions.</p>
              <div className="space-y-3">
                {["Smart scanning tech", "Accurate calculations", "Results tracking"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <i className="fa-solid fa-check-circle text-dp-orange"></i>
                    <span className="text-dp-blue font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Workflow --- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dp-blue mb-6">Construction Workflow</h2>
            <p className="text-lg text-dp-blue/70">Essential phases of your construction project</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workflow.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#EBEBD3]/30 to-white rounded-3xl p-6 text-center hover:shadow-xl transition-all border border-gray-50"
              >
                <div className="w-16 h-16 bg-dp-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
                  <i className={`fa-solid ${step.icon} text-2xl text-white`}></i>
                </div>
                <h4 className="font-bold text-dp-blue">{step.title}</h4>
                <p className="text-xs text-dp-blue/70 mt-1">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Features (Dark) --- */}
      <section className="py-20 lg:py-28 bg-dp-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Platform Features</h2>
            <p className="text-lg text-white/80">Everything you need to build smarter and faster</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-dp-orange rounded-xl flex items-center justify-center mb-4">
                  <i className={`fa-solid ${f.icon} text-xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-dp-orange opacity-10 rounded-full blur-3xl"></div>
      </section>

      {/* --- Section 6: Why Choose Us --- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden">
              <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7c8679145e-65a76941ffbe1b5a698d.png" alt="Happy family" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white rounded-2xl p-6 shadow-2xl flex items-center space-x-4">
                  <div className="w-14 h-14 bg-dp-orange rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-star text-xl text-white"></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dp-blue">4.9/5</div>
                    <div className="text-xs text-dp-blue/60 font-bold uppercase tracking-wider">User Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-dp-blue">Why Choose DP TECH?</h2>
              <div className="space-y-6">
                {[
                  { t: "Clear Guidance", d: "Step-by-step instructions for every phase", i: "fa-lightbulb" },
                  { t: "Transparent Process", d: "No hidden costs or surprises", i: "fa-shield-halved" },
                  { t: "Time Efficient", d: "Save time with smart tools", i: "fa-clock" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-dp-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-dp-orange transition-all">
                      <i className={`fa-solid ${item.i} text-xl text-dp-orange group-hover:text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dp-blue">{item.t}</h4>
                      <p className="text-dp-blue/60">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 7: Stats (Dark) --- */}
      <section className="py-20 bg-dp-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: "15K+", l: "Active Users" },
              { v: "8K+", l: "Projects Completed" },
              { v: "500+", l: "Expert Guides" },
              { v: "98%", l: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-dp-orange mb-2">{stat.v}</div>
                <div className="text-white font-medium">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 8: CTA --- */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-dp-orange to-orange-600 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Start Building Smarter?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-dp-orange rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl">
              Get Started Now
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-dp-orange transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;