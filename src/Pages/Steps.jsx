import React, { useState } from 'react';
import { motion } from 'framer-motion';
import shneiderImg from "../assets/img/محارى.webp";
import shneiderImg2 from "../assets/img/دهان.webp";

const Steps = () => {
  // نحدد السؤال المفتوح حالياً باستخدام الـ index بتاعه (null يعني كله مقفول في البداية)
const [activeIndex, setActiveIndex] = useState(null);
  // 1. بيانات التايم لاين (الأيقونات العلوية)
  const processTimeline = [
    { id: 1, title: "Plumbing", icon: "fa-wrench" },
    { id: 2, title: "Electricity", icon: "fa-bolt" },
    { id: 3, title: "Plastering", icon: "fa-trowel" },
    { id: 4, title: "Ceramics", icon: "fa-th-large" },
    { id: 5, title: "Painting", icon: "fa-paint-roller" },
  ];

  // 2. بيانات تفاصيل كل مرحلة (الصور والمهام)
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
    <div>
      {/* --- Section 1: Hero --- */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-[#EBEBD3]/30 min-h-[500px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl lg:text-6xl font-bold text-dp-blue mb-6">
            Our <span className="text-dp-orange">Process</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive five-step approach to transform your space. Each phase is carefully executed to ensure premium quality.
          </motion.p>
        </div>
      </section>

      {/* --- Section 2: Process Timeline --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {processTimeline.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="text-center">
                <div className="bg-dp-orange rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mx-auto mb-6 shadow-lg text-white text-3xl font-bold">
                  {step.id}
                </div>
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-50 hover:border-dp-orange transition-all group">
                  <i className={`fa-solid ${step.icon} text-4xl text-dp-orange mb-4 group-hover:scale-110 transition-transform`}></i>
                  <h3 className="text-lg font-bold text-dp-blue">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Step-by-Step Details --- */}
      {detailedSteps.map((step, idx) => (
        <section key={idx} className={`py-20 ${step.bgColor}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side (يتغير مكانه يمين/يسار في كل خطوة) */}
              <motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} className={`${idx % 2 !== 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                <div className="bg-gradient-to-br from-dp-orange/10 to-[#EBEBD3]/50 rounded-[3rem] p-8">
                  <img className="w-full h-96 object-cover rounded-3xl shadow-2xl" src={step.image} alt={step.title} />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} className={`${idx % 2 !== 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                <div className="bg-dp-orange text-white px-4 py-1.5 rounded-full inline-block mb-4 font-semibold uppercase text-xs tracking-widest">
                  Step {step.id}
                </div>
                <h2 className="text-4xl font-bold text-dp-blue mb-6">{step.title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.desc}</p>
                <ul className="space-y-4">
                  {step.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start">
                      <i className="fa-solid fa-check-circle text-dp-orange text-xl mr-3 mt-1"></i>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg flex items-center justify-between border border-white">
                  <div><div className="text-sm text-gray-500 mb-1">Average Duration</div><div className="text-2xl font-bold text-dp-blue">{step.duration}</div></div>
                  <i className="fa-solid fa-calendar text-4xl text-dp-orange"></i>
                </div>
              </motion.div>

            </div>
          </div>
        </section>
      ))}

      {/* --- Section 4: Benefits --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-dp-blue mb-16">Why Choose Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Expert Craftsmanship", icon: "fa-medal", desc: "Certified professionals with years of experience." },
              { title: "Quality Materials", icon: "fa-shield-halved", desc: "Premium materials from trusted manufacturers." },
              { title: "Timely Completion", icon: "fa-clock", desc: "Projects completed within the agreed timeline." }
            ].map((benefit, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-50">
                <div className="bg-dp-orange/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <i className={`fa-solid ${benefit.icon} text-3xl text-dp-orange`}></i>
                </div>
                <h3 className="text-2xl font-bold text-dp-blue mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* --- سيكشن إضافي: الأسئلة الشائعة التفاعلية بتصميم فخم --- */}
<section className="py-24 bg-gradient-to-br from-[#0F1E31] via-[#1A2F48] to-[#0F1E31] text-white rounded-t-[4rem] relative overflow-hidden">
  
  {/* دوائر ضوئية خلفية ناعمة لإعطاء عمق للتصميم */}
  <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-dp-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">
    
    {/* الهيدر أو عنوان السيكشن */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-dp-orange/20 to-orange-500/10 text-dp-orange text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full border border-dp-orange/20 shadow-lg shadow-orange-500/5">
        <i className="fa-solid fa-circle-question animate-pulse"></i> FAQ Platform
      </div>
      <h2 className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tight">
        Frequently Asked <span className="bg-gradient-to-r from-dp-orange to-orange-400 bg-clip-text text-transparent">Questions</span>
      </h2>
      <p className="text-gray-400 mt-4 text-base max-w-lg mx-auto">
        Everything you need to know about our smart finishing phases and policies.
      </p>
    </div>

    {/* قائمة الأسئلة */}
    <div className="space-y-5">
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
            className={`transition-all duration-500 rounded-3xl overflow-hidden backdrop-blur-md border ${
              isOpen 
                ? 'bg-white/[0.07] border-dp-orange/50 shadow-2xl shadow-orange-500/5 scale-[1.01]' 
                : 'bg-white/[0.03] border-white/5 hover:border-white/10 hover:bg-white/[0.05] hover:-translate-y-0.5'
            }`}
          >
            {/* زر السؤال */}
            <button 
              onClick={() => setActiveIndex(isOpen ? null : fIdx)}
              className="w-full px-6 md:px-8 py-6 flex items-center gap-5 text-left outline-none transition-colors"
            >
              {/* أيقونة السؤال الجانبية المتفاعلة */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                isOpen ? 'bg-dp-orange text-white shadow-lg shadow-orange-500/30' : 'bg-white/5 text-gray-400 group-hover:text-white'
              }`}>
                <i className={`fa-solid ${faq.icon} text-lg`}></i>
              </div>

              {/* نص السؤال */}
              <span className={`flex-grow font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-dp-orange" : "text-white/90"}`}>
                {faq.q}
              </span>

              {/* سهم الفتح والإغلاق */}
              <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180 bg-dp-orange/20 text-dp-orange' : 'text-white/30'}`}>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </div>
            </button>
            
            {/* صندوق الإجابة المنسدل بسلاسة */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 md:px-8 py-6 bg-[#0B1522]/40 text-gray-300 text-sm md:text-base leading-relaxed pl-20">
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