import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import shneiderImg from "../assets/img/كهرباء.webp";
import shneiderImg2 from "../assets/img/istockphoto-1077270860-1024x1024.jpg";

const Home = () => {
  // بيانات الأعمدة الخمسة (Pillars)
  const pillars = [
    {
      title: "Plumbing",
      desc: "Precision water systems & premium fixture installation.",
      icon: "fa-faucet-drip",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      circleBg: "bg-blue-50",
      hoverBg: "group-hover:bg-blue-600",
    },
    {
      title: "Electricity",
      desc: "Advanced wiring & smart lighting solutions for modern homes.",
      icon: "fa-bolt-lightning",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600",
      circleBg: "bg-yellow-50",
      hoverBg: "group-hover:bg-yellow-500",
    },
    {
      title: "Plastering",
      desc: "Smooth wall preparation with industrial-grade materials.",
      icon: "fa-trowel",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      circleBg: "bg-purple-50",
      hoverBg: "group-hover:bg-purple-600",
    },
    {
      title: "Ceramics",
      desc: "Elegant tiling & porcelain designs with laser precision.",
      icon: "fa-border-all",
      bgColor: "bg-orange-100",
      textColor: "text-dp-orange",
      circleBg: "bg-orange-50",
      hoverBg: "group-hover:bg-dp-orange",
    },
    {
      title: "Painting",
      desc: "Final artistic touches and high-durability coatings.",
      icon: "fa-paint-roller",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      circleBg: "bg-green-50",
      hoverBg: "group-hover:bg-green-600",
    },
  ];

  // بيانات منتجات الماركت بليس
  const products = [
    {
      id: 1,
      name: "Schneider Panel",
      category: "Electrical Systems",
      image: shneiderImg,
      tag: "Member Deal",
    },
    {
      id: 2,
      name: "Grohe Mixer Set",
      category: "Premium Fixtures",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
      tag: "Exclusive",
    },
    {
      id: 3,
      name: "Porcelain Tiles",
      category: "Flooring Solutions",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=400",
      tag: null,
    },
    {
      id: 4,
      name: "Ready-Mix Plaster",
      category: "Wall Foundation",
      image: shneiderImg2,
      tag: null,
    },
    {
      id: 5,
      name: "Jotun Fenomastic",
      category: "Finishing Paints",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400",
      tag: "Hot Deal",
    },
  ];

  return (
    <div >
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Finishing Pillars Section */}
      <section id="finishing-pillars" className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-dp-orange font-black uppercase tracking-[0.2em] text-sm mb-4">Our Expertise</motion.h2>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black text-dp-blue leading-tight">
              The 5 Essential Pillars of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-dp-blue to-dp-orange">Master Finishing</span>
            </motion.h3>
            <div className="w-20 h-1.5 bg-dp-orange mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ y: -16 }} className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-dp-orange transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-dp-orange/10 overflow-hidden">
                <div className={`absolute -right-4 -top-4 w-24 h-24 ${pillar.circleBg} rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50`}></div>
                <div className="relative z-10 text-center md:text-left">
                  <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center ${pillar.textColor} mb-6 transition-all duration-300 ${pillar.hoverBg} group-hover:text-white mx-auto md:mx-0`}>
                    <i className={`fa-solid ${pillar.icon} text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-dp-blue mb-3">{pillar.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Exclusive Offers Section (Marketplace) */}
      <section id="exclusive-offers" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-dp-orange font-bold text-lg tracking-widest uppercase mb-3">Marketplace Preview</motion.h2>
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-dp-blue mb-6">Premium Materials at <span className="text-dp-orange">Contractor Prices</span></motion.h3>
            <p className="text-gray-600">Logging in gives you access to exclusive supplier prices and discounts of up to 40% on top-quality materials.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {products.map((product) => (
              <motion.div key={product.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -10 }} className="group bg-white rounded-[2.5rem] p-4 shadow-xl shadow-gray-200/50 border border-transparent hover:border-dp-orange transition-all duration-500">
                <div className="relative h-48 overflow-hidden rounded-[1.5rem] mb-6">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={product.name} />
                  {product.tag && <div className="absolute top-3 right-3 bg-gradient-to-r from-dp-orange to-[#ffb366] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{product.tag}</div>}
                </div>
                <div className="px-2">
                  <h4 className="text-dp-blue font-bold text-lg mb-1">{product.name}</h4>
                  <p className="text-gray-400 text-xs mb-4">{product.category}</p>
                  <div className="bg-white border border-gray-100 rounded-2xl p-3 relative overflow-hidden group-hover:bg-orange-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">Price:</span>
                      <span className="blur-[5px] select-none text-dp-blue font-bold tracking-tighter">0000.00 EGP</span>
                    </div>
                    <Link to="/login" className="absolute inset-0 flex items-center justify-center bg-dp-blue/0 group-hover:bg-dp-blue/5 transition-all">
                      <div className="flex items-center gap-2 text-dp-orange">
                        <i className="fa-solid fa-lock animate-bounce text-sm"></i>
                        <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity uppercase">Unlock Price</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-dp-blue rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20"><div className="absolute -top-10 -right-10 w-64 h-64 bg-dp-orange rounded-full blur-3xl"></div></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-bold mb-4">Ready to see the real numbers?</h4>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">Join +500 homeowners who saved up to 30% on their finishing costs through our platform.</p>
              <Link to="/login" className="inline-block bg-white text-dp-blue px-12 py-4 rounded-full font-black hover:bg-dp-orange hover:text-white transition-all transform hover:scale-105 shadow-xl">CREATE FREE ACCOUNT</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Project Tracking Section (تم نقله للأعلى كما طلبتِ) */}
      <section id="project-tracking" className="py-28 bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] relative overflow-hidden text-dp-blue">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dp-orange/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <span className="inline-block px-5 py-1.5 bg-dp-orange/10 rounded-full text-dp-orange text-xs font-bold mb-4 tracking-widest uppercase border border-dp-orange/20">Member Privileges</span>
            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-dp-blue">Monitor Your <span className="text-dp-orange">Construction Journey</span></h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Log in to access your professional dashboard. Manage designs, track material quantities, and monitor real-time site progress.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Design Catalog */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -10 }} className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8"><div className="w-14 h-14 bg-dp-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><i className="fa-solid fa-palette text-xl text-white"></i></div></div>
              <h4 className="text-xl font-bold mb-3">Design Catalog</h4>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">Identify the specific styles that will define your future home.</p>
              <div className="grid grid-cols-2 gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="h-24 rounded-2xl overflow-hidden relative border border-white"><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover blur-[1px]" alt="Style" /><div className="absolute inset-0 bg-white/20 flex items-center justify-center"><i className="fa-solid fa-lock text-dp-blue/40"></i></div></div>
                <div className="h-24 rounded-2xl overflow-hidden relative border border-white"><img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover blur-[1px]" alt="Style" /><div className="absolute inset-0 bg-white/20 flex items-center justify-center"><i className="fa-solid fa-lock text-dp-blue/40"></i></div></div>
              </div>
            </motion.div>
            {/* Material BOQ */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} whileHover={{ y: -10 }} className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-dp-orange/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8"><div className="w-14 h-14 bg-dp-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform"><i className="fa-solid fa-file-contract text-xl text-white"></i></div></div>
              <h4 className="text-xl font-bold mb-3">Material BOQ</h4>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">Review your professional Bill of Quantities. Know exactly what materials are allocated.</p>
              <div className="space-y-3 bg-white/50 p-5 rounded-2xl border border-gray-100">
                <div className="flex justify-between text-[10px] text-dp-blue font-bold uppercase opacity-50"><span>Material</span><span>Status</span></div>
                <div className="h-px bg-gray-100 w-full"></div>
                <div className="flex justify-between text-xs font-medium"><span>Porcelain Tiles</span><span className="text-dp-orange blur-[3px]">Verified</span></div>
                <div className="flex justify-between text-xs font-medium"><span>Cable Packs</span><span className="text-dp-orange blur-[3px]">Verified</span></div>
              </div>
            </motion.div>
            {/* Project Status */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -10 }} className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="mb-8"><div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform"><i className="fa-solid fa-spinner text-xl text-white"></i></div></div>
              <h4 className="text-xl font-bold mb-3">Project Status</h4>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">Track material arrivals and monitor stage-by-stage completion in real-time.</p>
              <div className="relative pt-2">
                <div className="flex mb-3 items-center justify-between"><span className="text-[10px] font-bold px-2 py-1 rounded-md bg-green-100 text-green-700 uppercase">On Schedule</span><span className="text-[10px] font-bold text-gray-400">Phase 2/5</span></div>
                <div className="overflow-hidden h-2.5 mb-4 flex rounded-full bg-gray-100">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '45%' }} transition={{ duration: 1, delay: 0.5 }} className="shadow-none flex flex-col text-center bg-green-500"></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-20 text-center">
            <Link to="/login" className="inline-flex items-center gap-4 bg-dp-blue text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-dp-orange transition-all transform hover:scale-105 shadow-xl uppercase tracking-wide">
              Unlock My Dashboard <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Process Section (Simple Steps to Success) */}
      <section id="process" className="py-24 bg-gradient-to-br from-[#1A2F48] to-[#142436] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-dp-orange/20 rounded-full mb-4">
              <span className="text-dp-orange font-semibold text-sm">How It Works</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Simple Steps to Success</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">From initial consultation to project completion, we guide you through every step of the journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 1, title: "Sign Up", desc: "Create your account in minutes. Choose whether you're a client or an engineer." },
              { id: 2, title: "Browse & Connect", desc: "Explore portfolios or use AI tools to scan spaces and get instant estimates." },
              { id: 3, title: "Start Project", desc: "Agree on terms, sign contracts digitally, and begin work. Track progress in real-time." },
              { id: 4, title: "Complete & Review", desc: "Final inspection, secure payment release, and leave reviews. Enjoy your space." }
            ].map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-dp-orange rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:rotate-6 transition-transform">
                    <span className="text-4xl font-bold">{step.id}</span>
                  </div>
                  {idx < 3 && <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-dp-orange/20"></div>}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Section (Innovation) */}
      <section id="technology" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-dp-orange/10 rounded-full mb-4">
              <span className="text-dp-orange font-semibold text-sm">Innovation</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dp-blue mb-6">Powered by Advanced Technology</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <img className="w-full h-auto rounded-[3rem] shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/51582156d6-22ab1518766a065feb7f.png" alt="AI Technology" />
            </motion.div>
            <div className="space-y-10">
              {[
                { title: "AI Room Scanning", icon: "fa-brain", desc: "Use your smartphone camera to scan any room. Our AI instantly calculates dimensions and material estimates." },
                { title: "Smart Cost Estimation", icon: "fa-calculator", desc: "Get instant cost breakdowns based on current market prices and labor rates." },
                { title: "3D Visualization", icon: "fa-cube", desc: "See your finished project before work begins with photorealistic previews." },
                { title: "Project Timeline AI", icon: "fa-chart-gantt", desc: "Intelligent scheduling that creates realistic, achievable project timelines." }
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="flex gap-5 group">
                  <div className="w-14 h-14 bg-dp-orange/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-dp-orange transition-colors">
                    <i className={`fa-solid ${item.icon} text-2xl text-dp-orange group-hover:text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-dp-blue mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#EBEBD3] to-white rounded-[3rem] p-12 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div><div className="text-5xl font-bold text-dp-orange mb-2">99.8%</div><h4 className="text-xl font-semibold text-dp-blue">Accuracy Rate</h4><p className="text-gray-600 text-xs mt-2">Our AI scanning technology delivers precise measurements</p></div>
              <div><div className="text-5xl font-bold text-dp-orange mb-2">10x</div><h4 className="text-xl font-semibold text-dp-blue">Faster Planning</h4><p className="text-gray-600 text-xs mt-2">Complete project planning in minutes instead of days</p></div>
              <div><div className="text-5xl font-bold text-dp-orange mb-2">24/7</div><h4 className="text-xl font-semibold text-dp-blue">Platform Access</h4><p className="text-gray-600 text-xs mt-2">Monitor and manage your projects anytime, anywhere</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;