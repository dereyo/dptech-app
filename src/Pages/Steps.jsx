import React, { useState } from 'react';
import { motion } from 'framer-motion';
import shneiderImg from "../assets/img/محارى.webp";
import shneiderImg2 from "../assets/img/دهان.webp";

const Steps = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const processTimeline = [
    { id: 1, title: "Plumbing", icon: "fa-wrench" },
    { id: 2, title: "Electricity", icon: "fa-bolt" },
    { id: 3, title: "Plastering", icon: "fa-trowel" },
    { id: 4, title: "Ceramics", icon: "fa-th-large" },
    { id: 5, title: "Painting", icon: "fa-paint-roller" },
  ];

  const detailedSteps = [
    {
      id: "01",
      title: "Plumbing Installation",
      desc: "We begin with a comprehensive plumbing system installation. Our expert plumbers install water supply lines, drainage systems, and fixtures with precision.",
      duration: "7-10 Days",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/73177ca324-8795d2b745e66a389348.png",
      points: ["Complete water supply network", "Drainage and sewage system setup", "Premium fixture installation", "Pressure testing and QA"],
      bgColor: "bg-[#EBEBD3]/20"
    },
    {
      id: "02",
      title: "Electrical Wiring",
      desc: "Our certified electricians handle all electrical installations following safety standards and building codes. We ensure your home is powered safely.",
      duration: "5-8 Days",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f0b92e09fd-8a3fbdedc56325186eea.png",
      points: ["Complete electrical wiring", "Circuit breaker and panel setup", "Switch and outlet installation", "Smart home integration"],
      bgColor: "bg-white"
    },
    {
      id: "03",
      title: "Plastering & Finishing",
      desc: "Expert plastering creates the perfect foundation for your walls. We ensure smooth, even surfaces ready for the final finishes.",
      duration: "10-14 Days",
      image: shneiderImg,
      points: ["Wall and ceiling preparation", "Multi-coat plaster application", "Smooth finishing and sanding", "Corner and edge perfection"],
      bgColor: "bg-[#EBEBD3]/20"
    },
    {
      id: "04",
      title: "Ceramic Installation",
      desc: "Professional ceramic transforms your spaces with beauty and durability. We work with premium materials and precise techniques.",
      duration: "8-12 Days",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a96187ce98-9368e496fa384c7a3159.png",
      points: ["Floor and wall tile installation", "Custom pattern design", "Precision cutting and fitting", "Professional grouting"],
      bgColor: "bg-white"
    },
    {
      id: "05",
      title: "Painting & Decoration",
      desc: "The final touch that brings your vision to life. Our skilled painters apply premium paints with attention to detail for a flawless finish.",
      duration: "6-9 Days",
      image: shneiderImg2,
      points: ["Premium paint selection", "Surface preparation and priming", "Multi-coat application", "Accent walls and finishes"],
      bgColor: "bg-[#EBEBD3]/20"
    }
  ];

  return (
    <div className="overflow-hidden"> {/* حماية قصوى لمنع أي سكرول عرضي خارجي */}
      
      {/* --- Section 1: Hero --- */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-white to-[#EBEBD3]/30 min-h-[400px] md:min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dp-blue mb-4 md:mb-6">
            Our <span className="text-dp-orange">Process</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive five-step approach to transform your space. Each phase is carefully executed to ensure premium quality.
          </motion.p>
        </div>
      </section>

      {/* --- Section 2: Process Timeline --- */}
      <section className="py-12 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* تم تعديل الجريد ليكون مرن جداً يبدأ من عمود واحد إلى 5 أعمدة */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
            {processTimeline.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }} viewport={{ once: true }} className="text-center bg-slate-50/50 p-4 rounded-3xl border border-gray-100 md:bg-transparent md:border-none md:p-0">
                <div className="bg-dp-orange rounded-full w-14 h-14 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-md text-white text-xl md:text-3xl font-bold">
                  {step.id}
                </div>
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-md md:shadow-xl border border-gray-50 hover:border-dp-orange transition-all group">
                  <i className={`fa-solid ${step.icon} text-2xl md:text-4xl text-dp-orange mb-2 md:mb-4 group-hover:scale-110 transition-transform`}></i>
                  <h3 className="text-sm md:text-lg font-bold text-dp-blue">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Step-by-Step Details --- */}
      {detailedSteps.map((step, idx) => (
        <section key={idx} className={`py-12 md:py-20 ${step.bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* تم حل تداخل العناصر بـ تغيير طريقة الـ Reverse الآمنة في الجريد */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Image Side - متجاوب تماماً */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full ${idx % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'} order-2`}
              >
                <div className="bg-gradient-to-br from-dp-orange/10 to-[#EBEBD3]/50 rounded-[2rem] md:rounded-[3rem] p-4 md:p-8">
                  <img className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl" src={step.image} alt={step.title} />
                </div>
              </motion.div>

              {/* Text Side - متجاوب تماماً */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full ${idx % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'} order-1`}
              >
                <div className="bg-dp-orange text-white px-4 py-1.5 rounded-full inline-block mb-4 font-semibold uppercase text-xs tracking-widest">
                  Step {step.id}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dp-blue mb-4 md:mb-6">{step.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">{step.desc}</p>
                <ul className="space-y-3 md:space-y-4">
                  {step.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <i className="fa-solid fa-check-circle text-dp-orange text-lg md:text-xl mr-3 mt-0.5 shrink-0"></i>
                      <span className="text-sm sm:text-base text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 md:mt-8 bg-white/80 backdrop-blur rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md md:shadow-lg flex items-center justify-between border border-white">
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500 mb-0.5">Average Duration</div>
                    <div className="text-xl md:text-2xl font-bold text-dp-blue">{step.duration}</div>
                  </div>
                  <i className="fa-solid fa-calendar text-2xl md:text-4xl text-dp-orange"></i>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      ))}

      {/* --- Section 4: Benefits --- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dp-blue mb-10 md:mb-16">Why Choose Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Expert Craftsmanship", icon: "fa-medal", desc: "Certified professionals with years of experience." },
              { title: "Quality Materials", icon: "fa-shield-halved", desc: "Premium materials from trusted manufacturers." },
              { title: "Timely Completion", icon: "fa-clock", desc: "Projects completed within the agreed timeline." }
            ].map((benefit, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-md md:shadow-xl border border-gray-50">
                <div className="bg-dp-orange/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <i className={`fa-solid ${benefit.icon} text-2xl text-dp-orange`}></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-dp-blue mb-2 md:mb-4">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- سيكشن إضافي: الأسئلة الشائعة التفاعلية بتصميم فخم --- */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F1E31] via-[#1A2F48] to-[#0F1E31] text-white rounded-t-[2.5rem] md:rounded-t-[4rem] relative overflow-hidden">
        
        <div className="absolute top-1/4 left-1/10 w-64 h-64 md:w-96 md:h-96 bg-dp-orange/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/10 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-dp-orange/20 to-orange-500/10 text-dp-orange text-[10px] sm:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-dp-orange/20 shadow-lg">
              <i className="fa-solid fa-circle-question animate-pulse"></i> FAQ Platform
            </div>
            <h2 className="text-3xl md:text-5xl font-black mt-4 text-white tracking-tight">
              Frequently Asked <span className="bg-gradient-to-r from-dp-orange to-orange-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-3 max-w-lg mx-auto">
              Everything you need to know about our smart finishing phases and policies.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: "fa-sliders",
                q: "Can I request modifications during the implementation phases?",
                a: "Yes, modifications can be made, but it is best to request them before the specific step begins. For example, any plumbing changes must be finalized before the plastering and ceramics phases start to avoid breaking completed work."
              },
              {
                icon: "fa-shield-halved",
                q: "How do you guarantee the quality of raw materials used?",
                a: "We only source premium materials from certified and trusted manufacturers. All materials undergo an AI-verified check and engineering approval before delivery to your site."
              },
              {
                icon: "fa-chart-line",
                q: "What happens if a phase takes longer than the average duration?",
                a: "Our timelines are highly optimized, but if any unexpected delay occurs (such as custom material delivery), our smart platform recalculates the subsequent steps immediately to ensure the ultimate deadline is met without compromising quality."
              },
              {
                icon: "fa-award",
                q: "Is there a guarantee on the finishing work after completion?",
                a: "Absolutely. We provide a comprehensive guarantee on core installations like plumbing and electrical networks for up to 5 years, giving you complete peace of mind."
              }
            ].map((faq, fIdx) => {
              
              const isOpen = activeIndex === fIdx;

              return (
                <div 
                  key={fIdx} 
                  className={`transition-all duration-300 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-md border ${
                    isOpen 
                      ? 'bg-white/[0.07] border-dp-orange/50 shadow-2xl scale-[1.01]' 
                      : 'bg-white/[0.03] border-white/5 hover:border-white/10 hover:bg-white/[0.05]'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(isOpen ? null : fIdx)}
                    className="w-full px-4 sm:px-6 md:px-8 py-5 md:py-6 flex items-center gap-4 md:gap-5 text-left outline-none"
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-dp-orange text-white shadow-md' : 'bg-white/5 text-gray-400'
                    }`}>
                      <i className={`fa-solid ${faq.icon} text-sm md:text-lg`}></i>
                    </div>

                    <span className={`flex-grow font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-dp-orange" : "text-white/90"}`}>
                      {faq.q}
                    </span>

                    <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 text-dp-orange' : 'text-white/30'}`}>
                      <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </div>
                  </button>
                  
                  {/* تم إصلاح الـ Padding هنا ليكون متجاوباً (حذف pl-20 القديم المسبب للمشكلة) */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 sm:px-6 md:px-8 md:pl-24 py-4 md:py-6 bg-[#0B1522]/40 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;