import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay ,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import shneiderImg from "../assets/img/كهرباء.webp";
import shneiderImg2 from "../assets/img/382ed037-b687-4088-a235-aa3ccfe997d7-1024x1024.webp";

const UserHome = () => {
  // بيانات الأعمدة الخمسة (Pillars)
  const pillars = [
    { title: "Plumbing", desc: "Precision water systems & premium fixture installation.", icon: "fa-faucet-drip", bgColor: "bg-blue-100", textColor: "text-blue-600", circleBg: "bg-blue-50", hoverBg: "group-hover:bg-blue-600", animate: "animate-bounce-slow" },
    { title: "Electricity", desc: "Advanced wiring & smart lighting solutions for modern homes.", icon: "fa-bolt-lightning", bgColor: "bg-yellow-100", textColor: "text-yellow-600", circleBg: "bg-yellow-50", hoverBg: "group-hover:bg-yellow-500", pulse: true },
    { title: "Plastering", desc: "Smooth wall preparation with industrial-grade materials.", icon: "fa-trowel", bgColor: "bg-purple-100", textColor: "text-purple-600", circleBg: "bg-purple-50", hoverBg: "group-hover:bg-purple-600" },
    { title: "Ceramics", desc: "Elegant tiling & porcelain designs with laser precision.", icon: "fa-border-all", bgColor: "bg-orange-100", textColor: "text-dp-orange", circleBg: "bg-orange-50", hoverBg: "group-hover:bg-dp-orange" },
    { title: "Painting", desc: "Final artistic touches and high-durability coatings.", icon: "fa-paint-roller", bgColor: "bg-green-100", textColor: "text-green-600", circleBg: "bg-green-50", hoverBg: "group-hover:bg-green-600" },
  ];
  const products = [
    { title: "Plumbing Fixtures", price: "From $299", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f0b92e09fd-8a3fbdedc56325186eea.png" },
    { title: "Premium Fixtures", price: "From $299", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a96187ce98-9368e496fa384c7a3159.png" },
    { title: "Modern Hardware", price: "From $299", img: "https://cdn.salla.sa/bvXbz/ilNVZ3lZoU2wPHnvayN9W4RzxXMPsZfsDD8ccsFd.jpg" },
    { title: "Interior Decor", price: "From $299", img: "https://img.youm7.com/images/NewsPics/gallery/pics/1220151119142614%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-1.jpg" },
    { title: "Smart Systems", price: "From $299", img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/73177ca324-8795d2b745e66a389348.png" },
    { title: "Electrical Tools", price: "From $299", img: shneiderImg },
    { title: "Building Materials", price: "From $299", img: shneiderImg2 },
  ];
  const offers = [
  {
    tag: "Work From Home",
    title: "Home Office",
    sub: "Professional",
    desc: "Boost your productivity with ergonomic furniture and acoustic wall panels for a quiet workspace.",
    price: "$1,450",
    oldPrice: "$2,100",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000",
    bgColor: "bg-slate-50",
    textColor: "text-slate-600"
  },
  {
    tag: "Family Space",
    title: "Living Room",
    sub: "Modern Nordic",
    desc: "Clean lines and cozy textures. Get the full look including sofa set, rug, and center table.",
    price: "$5,600",
    oldPrice: "$7,200",
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000",
    bgColor: "bg-rose-50",
    textColor: "text-rose-600"
  },
  {
    tag: "Smart Home",
    title: "Lighting Suite",
    sub: "Ambient",
    desc: "Transform your mood with voice-controlled LED systems. Architectural lighting for modern homes.",
    price: "$1,200",
    oldPrice: "$1,900",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
  {
    tag: "Sweet Dreams",
    title: "Luxury Suite",
    sub: "Master Bedroom",
    desc: "Upgrade to a five-star hotel experience. Includes custom velvet headboards and smart bedside lighting.",
    price: "$3,200",
    oldPrice: "$4,500",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600"
  },
  {
    tag: "Premium Flooring",
    title: "Royal Ceramic & Porcelain",
    sub: "",
    desc: "Large-format porcelain tiles with marble effects. Scratch-resistant, easy to clean, and perfect for luxurious halls.",
    price: "Special Rates",
    oldPrice: "per sq/m",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1000",
    bgColor: "bg-stone-100",
    textColor: "text-stone-600"
  }
];

  return (
    <div >
      {/* 1. Hero Section - User Home */}
      <section id="hero" className="pt-25 pb-20 bg-gradient-to-br from-white to-dp-beige/30 min-h-[800px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-dp-blue mb-6 leading-tight">
                Complete Home <span className="text-dp-orange">Finishing</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                From plumbing to painting, we provide comprehensive apartment and house finishing services with premium quality materials and expert craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-dp-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-200">
                  See Our Work
                </button>
                <button className="border-2 border-dp-blue text-dp-blue px-8 py-4 rounded-full font-semibold hover:bg-dp-blue hover:text-white transition-all">
                  Get Free Quote
                </button>
              </div>
            </motion.div>

            {/* Right Image Card with Floating Animation */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
<motion.div 
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-6 md:p-8 relative z-10"
>
  {/* ضبط ارتفاع الصورة في الموبايل h-52 لتكون ملمومة وفي الشاشات الأكبر تعود h-80 كما هي */}
  <div className="bg-gradient-to-br from-dp-beige to-gray-100 rounded-2xl h-52 sm:h-80 flex items-center justify-center mb-6 overflow-hidden">
    <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fca16074ad-063b4b8af4473177d361.png" alt="modern living room" />
  </div>
  
  {/* تحويل الاتجاه إلى رأسي flex-col في الشاشات الصغيرة جداً ثم أفقي sm:flex-row لمنع تداخل النصوص والـ avatars */}
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-dp-blue">Your Dream Space</h3>
      <p className="text-gray-600 text-xs sm:text-sm">Visualize before you build</p>
    </div>
    
    <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 border-gray-50 pt-2 sm:pt-0">
      <div className="flex items-center space-x-2">
        <div className="flex -space-x-2">
          {[2, 5, 8].map(n => (
            <img key={n} src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${n}.jpg`} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" alt="avatar" />
          ))}
        </div>
        <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">+150 Engineers Ready</span>
      </div>
      
      <div className="bg-dp-orange/10 p-2.5 rounded-xl text-dp-orange text-xl shrink-0">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
      </div>
    </div>
  </div>
</motion.div>

              {/* Floating Badges */}
<motion.div 
  animate={{ opacity: [1, 0.7, 1] }}
  transition={{ duration: 2, repeat: Infinity }}
  className="absolute -top-6 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 w-44 sm:w-48 z-20 hidden sm:block"
>
  <div className="flex items-center space-x-2 mb-1">
    <i className="fa-solid fa-check-circle text-green-500"></i>
    <span className="text-sm font-semibold text-dp-blue">AI Verified</span>
  </div>
  <div className="text-[10px] text-gray-500">Quality assured by AI</div>
</motion.div>

<div className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:-left-6 bg-dp-orange rounded-2xl shadow-xl p-3 sm:p-4 w-36 sm:w-44 text-white hidden sm:block z-20 lg:z-30">
  <div className="text-xl sm:text-2xl font-bold mb-1">24/7</div>
  <div className="text-[9px] sm:text-[10px]">Support Available</div>
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Finishing Pillars Section */}
      <section id="finishing-pillars" className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-dp-orange font-black uppercase tracking-[0.2em] text-sm mb-4"
            >
              Our Expertise
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-dp-blue leading-tight"
            >
              The 5 Essential Pillars of <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dp-blue to-dp-orange">Master Finishing</span>
            </motion.h3>
            <div className="w-20 h-1.5 bg-dp-orange mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-dp-orange transition-all duration-500 shadow-xl hover:shadow-dp-orange/10 overflow-hidden"
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 ${pillar.circleBg} rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${pillar.bgColor} rounded-2xl flex items-center justify-center ${pillar.textColor} mb-6 transition-all duration-300 ${pillar.hoverBg} group-hover:text-white ${pillar.animate || ''}`}>
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

      {/* هنا هنكمل باقي السكاشن (Swiper والجدول) في الخطوات الجاية */}
      {/* سيكشن المنتجات بالكامل */}
      <section id="products-preview" className="py-20 bg-gradient-to-b from-[#EBEBD3]/10 to-[#EBEBD3]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* العنوان ووصف السيكشن */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-dp-blue mb-4"
              >
                Premium Products
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                High-quality materials from trusted brands
              </motion.p>
            </div>
          </div>

          {/* السوايبير (المعرض المتحرك) */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="productSwiper pb-12">
            {products.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col group">
                  {/* حاوية الصورة مع تأثير التكبير */}
                  <div className="overflow-hidden rounded-2xl mb-6">
                    <img 
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      src={product.img} 
                      alt={product.title} 
                    />
                  </div>
                  {/* النصوص */}
                  <h3 className="text-xl font-bold text-dp-blue mb-3">{product.title}</h3>
                  <p className="text-gray-500 mb-6 flex-grow">
                    Premium bathroom and kitchen fixtures from leading manufacturers
                  </p>
                  {/* السعر والزرار */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-dp-orange font-bold text-lg">{product.price}</span>
                    <button className="w-10 h-10 rounded-xl bg-dp-blue/5 text-dp-blue hover:bg-dp-orange hover:text-white transition-all flex items-center justify-center">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* الزر السفلي للكتالوج الكامل */}
          <div className="text-center mt-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dp-blue text-white px-10 py-4 rounded-full font-semibold hover:bg-dp-orange shadow-lg hover:shadow-dp-orange/30 transition-all duration-300"
            >
              Explore Full Catalog
            </motion.button>
          </div>

        </div>
      </section>
      {/* 4. Special Offers Section (Swiper) */}
<section id="offers-preview" className="py-12 md:py-20 bg-slate-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
    {/* Header with Navigation Arrows */}
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 md:mb-12">
      <div className="text-center sm:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-dp-blue">Special Offers</h2>
        <p className="text-gray-500 mt-2">Discover our exclusive <br className="hidden sm:inline" /> seasonal deals</p>
      </div>
      
      <div className="flex gap-3 justify-center sm:justify-end">
        <button className="prev-offer-btn w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dp-blue flex items-center justify-center text-dp-blue hover:bg-dp-blue hover:text-white transition-all duration-300">
          <i className="fa-solid fa-chevron-left text-sm md:text-base"></i>
        </button>
        <button className="next-offer-btn w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dp-blue flex items-center justify-center text-dp-blue hover:bg-dp-blue hover:text-white transition-all duration-300">
          <i className="fa-solid fa-chevron-right text-sm md:text-base"></i>
        </button>
      </div>
    </div>

    {/* Swiper Container */}
    {/* زوّدنا الـ pb-20 هنا ليعطي مساحة أكبر تحت السلايدر بالكامل */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: '.prev-offer-btn',
        nextEl: '.next-offer-btn',
      }}
      pagination={{ clickable: true }}
      spaceBetween={30}
      autoplay={{ delay: 4000 }}
      className="offersSwiper pb-20"
    >
      {offers.map((offer, index) => (
        <SwiperSlide key={index}>
          {/* 💡 التعديل السحري هنا: غيرنا p-4 لـ pt-4 px-4 pb-12 في الموبايل */}
          {/* الـ pb-12 بتعمل مسافة داخلية من تحت ترفع الزرار لفوق وتسيب مكان للنقط تظهر براحتها */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center bg-white pt-4 px-4 pb-12 sm:p-6 md:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-xl shadow-blue-900/5 border border-gray-100 h-full relative">
            
            {/* Image Side */}
            <div className="relative group overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl order-1 lg:order-2 w-full">
              <img 
                className="w-full h-52 sm:h-64 lg:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                src={offer.img} 
                alt={offer.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start w-full">
              <span className={`${offer.bgColor} ${offer.textColor} px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase inline-block`}>
                {offer.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dp-blue leading-tight">
                {offer.sub} <br className="hidden sm:inline" />
                <span className="text-dp-orange">{offer.title}</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed max-w-lg">
                {offer.desc}
              </p>
              
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <span className="text-3xl md:text-4xl font-black text-dp-blue">{offer.price}</span>
                {offer.oldPrice && (
                  <span className="text-lg md:text-xl text-gray-300 line-through">{offer.oldPrice}</span>
                )}
              </div>
              
              <button className="w-full sm:w-auto bg-dp-blue text-white px-10 py-3.5 md:py-4 rounded-xl font-bold hover:shadow-2xl hover:-translate-y-1 transition-all transform active:scale-95">
                {offer.price === "Special Rates" ? "Browse Catalog" : "Shop Now"}
              </button>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
      {/* 5. Scan Results Section (Table) */}
<section id="scan-preview" className="py-12 md:py-20 bg-[#EBEBD3]/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    
    {/* العناوين الرئيسية المتجاوبة */}
    <div className="text-center mb-10 md:mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold text-dp-blue mb-4"
      >
        Project Scan Results
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-base md:text-xl text-gray-600 max-w-xl mx-auto"
      >
        Track your project progress and quality assessments
      </motion.p>
    </div>

    {/* الحاوية الرئيسية للكروت والجدول */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-4 sm:p-8 shadow-xl overflow-hidden"
    >
      
      {/* 1️⃣ العرض على الشاشات الكبيرة (الجدول التقليدي المستقر) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 text-dp-blue font-bold">Project ID</th>
              <th className="py-4 text-dp-blue font-bold">Date</th>
              <th className="py-4 text-dp-blue font-bold">Phase</th>
              <th className="py-4 text-dp-blue font-bold">Status</th>
              <th className="py-4 text-dp-blue font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "#DP2024-001", date: "Dec 10, 2024", phase: "Plumbing", status: "Completed", statusStyle: "bg-green-100 text-green-800" },
              { id: "#DP2024-002", date: "Dec 11, 2024", phase: "Electricity", status: "In Progress", statusStyle: "bg-yellow-100 text-yellow-800" },
            ].map((row, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 font-medium">{row.id}</td>
                <td className="py-4 text-gray-600">{row.date}</td>
                <td className="py-4 font-semibold">{row.phase}</td>
                <td className="py-4">
                  <span className={`${row.statusStyle} px-3 py-1 rounded-full text-xs font-bold`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4">
                  <button className="text-dp-orange hover:text-orange-600 font-bold transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2️⃣ العرض على الموبايل (تحويل الصفوف لكروت رأسية أنيقة لمنع السكرول البايظ) */}
      <div className="block md:hidden space-y-4">
        {[
          { id: "#DP2024-001", date: "Dec 10, 2024", phase: "Plumbing", status: "Completed", statusStyle: "bg-green-100 text-green-800" },
          { id: "#DP2024-002", date: "Dec 11, 2024", phase: "Electricity", status: "In Progress", statusStyle: "bg-yellow-100 text-yellow-800" },
        ].map((row, index) => (
          <div key={index} className="border border-gray-100 rounded-2xl p-5 bg-slate-50/50 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-400 uppercase">Project ID</span>
              <span className="font-bold text-dp-blue">{row.id}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-100/70 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Date</span>
              <span className="text-sm text-gray-600">{row.date}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-100/70 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Phase</span>
              <span className="text-sm font-semibold text-dp-blue">{row.phase}</span>
            </div>
            <div className="flex justify-between items-center border-t border-gray-100/70 pt-2">
              <span className="text-xs font-bold text-gray-400 uppercase">Status</span>
              <span className={`${row.statusStyle} px-3 py-1 rounded-full text-[10px] font-black`}>
                {row.status}
              </span>
            </div>
            <div className="pt-2">
              <button className="w-full text-center bg-dp-orange/10 hover:bg-dp-orange text-dp-orange hover:text-white py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* الزر السفلي المتجاوب بالكامل */}
      <div className="text-center mt-6 md:mt-8">
        <Link to="/result" className="inline-block w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-dp-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg active:scale-95">
            View All Results
          </button>
        </Link>
      </div>

    </motion.div>
  </div>
</section>

      {/* 6. About Preview Section */}
      <section id="about-preview" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-dp-blue mb-6">About DP TECH</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in home finishing, DP TECH has established itself as a leader in providing comprehensive renovation solutions. Our expert team specializes in all aspects of interior finishing.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8 text-center md:text-left">
                <div>
                  <div className="text-4xl font-black text-dp-orange mb-1">500+</div>
                  <div className="text-gray-500 font-medium text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-dp-orange mb-1">15+</div>
                  <div className="text-gray-500 font-medium text-sm">Years Experience</div>
                </div>
              </div>

              <Link to="/about">
                <button className="bg-dp-orange text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-[#EBEBD3]/40 rounded-[3rem] p-6 md:p-8">
                <img 
                  className="w-full h-96 object-cover rounded-[2rem] shadow-2xl" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/6294e166ae-127403add418c5a1adc8.png" 
                  alt="DP TECH team" 
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-dp-orange/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHome;