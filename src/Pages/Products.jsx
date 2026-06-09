import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/CSS/pro.css';
import Img from "../assets/img/2010678-AfriSam-Cement-Bags-Update-2026-–-Website-–-Rapid-Hard-1920x1493.webp";
import Img2 from "../assets/img/Advantages-pic-EuroPlaster.png";
import Img3 from "../assets/img/atlantic_storm_grey_marble_effect_polished_porcelain_wall___floor_tile.jpg";
import Img4 from "../assets/img/eletric-panels_1000x.webp";
import Img5 from "../assets/img/istockphoto-1077270860-1024x1024.jpg";
import Img6 from "../assets/img/istockphoto-1340466022-1024x1024.jpg";
import Img7 from "../assets/img/lineup_img01.png";
import Img8 from "../assets/img/lineup_img01_01.png";
import Img9 from "../assets/img/lineup_img02.png";
import Img10 from "../assets/img/marseille_parquet_oak_wood_effect_porcelain_floor_tile_1000x1000mm_lifestyle.jpg";
import Img11 from "../assets/img/PRW675.png";
import Img12 from "../assets/img/PRW786.png";
import Img13 from "../assets/img/ramco-super-plaster.webp";
import Img14 from "../assets/img/white_marble_effect_gloss_ceramic_floor_tiles_1.jpg";

const Products = () => {
  // بيانات الفئات (Categories) كما في الكود الأصلي
  const categories = [
    { id: "plumbing", title: "Plumbing", count: "24+", icon: "fa-droplet", bgColor: "bg-blue-50", textColor: "text-dp-blue", hoverColor: "group-hover:bg-dp-blue", badgeColor: "bg-blue-100", rotate: "rotate-3" },
    { id: "electrical", title: "Electrical", count: "18+", icon: "fa-bolt-lightning", bgColor: "bg-yellow-50", textColor: "text-yellow-600", hoverColor: "group-hover:bg-yellow-500", badgeColor: "bg-yellow-100", rotate: "-rotate-3" },
    { id: "plastering", title: "Plastering", count: "12+", icon: "fa-trowel-bricks", bgColor: "bg-zinc-50", textColor: "text-zinc-600", hoverColor: "group-hover:bg-zinc-700", badgeColor: "bg-zinc-100", rotate: "rotate-6" },
    { id: "ceramic", title: "Ceramic", count: "45+", icon: "fa-border-all", bgColor: "bg-orange-50", textColor: "text-dp-orange", hoverColor: "group-hover:bg-dp-orange", badgeColor: "bg-orange-100", rotate: "-rotate-6" },
    { id: "painting", title: "Painting", count: "30+", icon: "fa-paint-roller", bgColor: "bg-rose-50", textColor: "text-rose-600", hoverColor: "group-hover:bg-rose-600", badgeColor: "bg-rose-100", rotate: "rotate-3", isFullWidth: true }
  ];
  // الحالة لتخزين الستايل المختار
  const [selectedStyle, setSelectedStyle] = useState('modern');

  const styles = [
    { id: "modern", title: "Modern", desc: "Clean lines & minimalist", icon: "fa-crown", gradient: "bg-gradient-to-br from-orange-400 to-dp-orange" },
    { id: "classic", title: "Classic", desc: "Timeless elegance", icon: "fa-landmark", gradient: "bg-gradient-to-br from-blue-400 to-dp-blue" },
    { id: "minimal", title: "Minimal", desc: "Less is more", icon: "fa-cube", gradient: "bg-gradient-to-br from-orange-400 to-dp-orange" },
    { id: "industrial", title: "Industrial", desc: "Raw & edgy", icon: "fa-industry", gradient: "bg-gradient-to-br from-blue-400 to-dp-blue" },
    { id: "rustic", title: "Rustic", desc: "Natural warmth", icon: "fa-tree", gradient: "bg-gradient-to-br from-orange-400 to-dp-orange" },
  ];
  const offersData = [
    {
      category: "Ceramic",
      title: "Luxury Marble Tiles",
      desc: "Premium quality porcelain tiles with marble finish",
      price: "$18.99",
      oldPrice: "$31.99",
      discount: "-40%",
      rating: "4.7",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a124ee625e-65c2704ffe2e8d747e17.png",
      icon: "fa-cube",
      backTitle: "3D Room Preview",
      backDesc: "Visualize these tiles in your space with our AR technology",
      features: ["Water resistant & durable", "Easy to clean & maintain", "10-year warranty included"]
    },
    {
      category: "Plumbing",
      title: "Designer Brass Faucet",
      desc: "Premium brass construction with gold finish",
      price: "$129.99",
      oldPrice: "$199.99",
      discount: "-35%",
      rating: "4.9",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5974322206-6e036c7c27fb606da4cc.png",
      icon: "fa-droplet",
      backTitle: "Premium Quality",
      backDesc: "Experience luxury with our designer collection",
      features: ["Solid brass construction", "Corrosion resistant finish", "Lifetime warranty"]
    },
    {
      category: "Electricity",
      title: "Smart LED Chandelier",
      desc: "Energy-efficient with app control & dimming",
      price: "$149.99",
      oldPrice: "$299.99",
      discount: "-50%",
      rating: "5.0",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2d1c02bf8c-1bf0b770aa222e8848a8.png",
      icon: "fa-lightbulb",
      backTitle: "Smart Features",
      backDesc: "Control brightness & color from your phone",
      features: ["Voice control compatible", "Energy saving LED technology", "5-year manufacturer warranty"]
    },
    {
      category: "Painting",
      title: "Premium Wall Paint Set",
      desc: "Low VOC, washable, premium finish paint",
      price: "$69.99",
      oldPrice: "$99.99",
      discount: "-30%",
      rating: "4.8",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/eb27050d0c-daa04091640f2572e705.png",
      icon: "fa-paint-roller",
      backTitle: "Color Matching",
      backDesc: "AI-powered color recommendations for your space",
      features: ["Zero VOC eco-friendly formula", "Covers 400 sq ft per gallon", "Washable & stain resistant"]
    },
    {
      category: "Plastering",
      title: "Pro Trowel Tool Set",
      desc: "Professional grade plastering tool collection",
      price: "$89.99",
      oldPrice: "$119.99",
      discount: "-25%",
      rating: "4.6",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/0d80e14c20-d7115e8406a7f0804dbb.png",
      icon: "fa-trowel",
      backTitle: "Professional Grade",
      backDesc: "Tools trusted by professional contractors",
      features: ["Stainless steel construction", "Ergonomic comfort grip", "2-year tool warranty"]
    },
    {
      category: "Ceramic",
      title: "Mosaic Tile Collection",
      desc: "Handcrafted decorative mosaic tiles",
      price: "$32.99",
      oldPrice: "$59.99",
      discount: "-45%",
      rating: "4.9",
      img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4a41044554-b071b0e34b5483618c52.png",
      icon: "fa-border-all",
      backTitle: "Artistic Design",
      backDesc: "Create stunning feature walls and accents",
      features: ["Handcrafted quality", "Unique patterns & colors", "Easy installation system"]
    }
  ];    
// 1. التحكم في القائمة المفتوحة حالياً (city, room, category, budget)
const [openDropdown, setOpenDropdown] = useState(null);

// 2. حفظ القيم التي يختارها المستخدم (حطينا القيم الافتراضية اللي كانت عندك)
const [selectedCity, setSelectedCity] = useState('Select City');
const [selectedRoom, setSelectedRoom] = useState('All Rooms');
const [selectedCategory, setSelectedCategory] = useState('Plumbing');
const [selectedBudget, setSelectedBudget] = useState('All Prices');

// 3. دالة لفتح وقفل القوائم بسلاسة
const toggleDropdown = (name) => {
  setOpenDropdown(openDropdown === name ? null : name);
};
// تحديد عدد المنتجات المعروضة في البداية (مثلاً 6 منتجات)
const [visibleProducts, setVisibleProducts] = useState(6);
// 4. دالة لتحديث القيمة الممسوكة عند الضغط على أي خيار
const handleSelect = (type, value) => {
  if (type === 'city') setSelectedCity(value);
  if (type === 'room') setSelectedRoom(value);
  if (type === 'category') setSelectedCategory(value);
  if (type === 'budget') setSelectedBudget(value);
  setOpenDropdown(null); // اقفل القائمة تلقائياً بعد الاختيار
};
// States الخاصة بحاسبة المواد
const [area, setArea] = useState('');
const [result, setResult] = useState(null);

const handleCalc = (e) => {
  e.preventDefault();
  const val = parseFloat(area);
  if (!val || val <= 0) return;

  // معادلات احترافية دقيقة (بناءً على معايير هندسية)
  setResult({
    paint: (val * 0.2).toFixed(1),      // لتر دهان (بناءً على وجهين)
    tiles: (val * 1.1).toFixed(1),      // متر سيراميك شامل 10% هالك
    cement: Math.ceil(val * 0.45),      // شكارة أسمنت للتركيب والمحارة
    bricks: Math.ceil(val * 55)         // عدد الطوب الأحمر لتقسيم المساحة
  });

};

  return (
    <div className=" bg-white min-h-screen">
      
      {/* 1. Products Hero Section */}
      <section id="products-hero" className="relative pt-32 pb-24 overflow-hidden bg-slate-50">
        {/* Floating Background Shapes */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 left-10 w-4 h-4 bg-dp-orange rounded-full opacity-20"></motion.div>
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-40 right-20 w-6 h-6 bg-dp-blue rounded-full opacity-10"></motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }} className="absolute bottom-20 left-1/4 w-3 h-3 bg-dp-orange rounded-full opacity-20"></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-dp-blue uppercase tracking-widest">New Stocks Available</span>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-dp-blue mb-6 leading-tight"
            >
              Building <span className="text-dp-orange">Excellence</span> <br /> From Start to Finish
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Everything you need to transform your space. Browse by category to find premium materials for your next project.
            </motion.p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((cat, index) => (
              <motion.a
                key={cat.id}
                href={`#${cat.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -10 }}
                className={`group relative flex flex-col items-center p-8 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 ${cat.isFullWidth ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <span className={`absolute top-4 right-6 ${cat.badgeColor} ${cat.textColor} text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                  {cat.count}
                </span>

                <div className={`w-16 h-16 ${cat.bgColor} rounded-2xl flex items-center justify-center ${cat.textColor} mb-4 transition-all duration-500 ${cat.rotate} group-hover:rotate-0 ${cat.hoverColor} group-hover:text-white`}>
                  <i className={`fa-solid ${cat.icon} text-2xl`}></i>
                </div>

                <span className="font-bold text-dp-blue tracking-wide">{cat.title}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Filters Section */}
      <section id="product-filters" className="py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-dp-blue rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-blue-900/20 -mt-24 relative z-10 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 items-end">
              
{/* Location Filter */}
        <div className="space-y-3 relative">
  <label className="text-blue-200 text-xs font-medium ml-2 uppercase tracking-wider">Location (Egypt)</label>
  <div className="relative group">
    <div 
      onClick={() => toggleDropdown('city')}
      className={`w-full bg-white/10 border ${openDropdown === 'city' ? 'border-dp-orange ring-2 ring-dp-orange/20' : 'border-white/20'} text-white rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-white/15`}
    >
      <span className={selectedCity === 'Select City' ? 'text-white/40' : 'text-white'}>{selectedCity}</span>
      <i className={`fa-solid fa-location-dot transition-all duration-300 ${openDropdown === 'city' ? 'text-dp-orange scale-110' : 'text-dp-orange/70'}`}></i>
    </div>
    
    {openDropdown === 'city' && (
      <div className="absolute left-0 w-full mt-2 bg-[#1A2F48] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 max-h-60 overflow-y-auto">
        {['Cairo (القاهرة)', 'Alexandria (الإسكندرية)', 'Giza (الجيزة)', 'Tanta (طنطا)', 'Mansoura (المنصورة)'].map((city) => (
          <div 
            key={city}
            onClick={() => handleSelect('city', city)}
            className="px-5 py-3 text-sm text-white/90 hover:bg-dp-orange hover:text-white transition-colors cursor-pointer"
          >
            {city}
          </div>
        ))}
      </div>
    )}
  </div>
        </div>

{/* Room Type Filter */}
<div className="space-y-3 relative">
  <label className="text-blue-200 text-xs font-medium ml-2 uppercase tracking-wider">Room Type</label>
  <div className="relative group">
    <div 
      onClick={() => toggleDropdown('room')}
      className={`w-full bg-white/10 border ${openDropdown === 'room' ? 'border-dp-orange ring-2 ring-dp-orange/20' : 'border-white/20'} text-white rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-white/15`}
    >
      <span>{selectedRoom}</span>
      <i className={`fa-solid fa-couch transition-all duration-300 ${openDropdown === 'room' ? 'text-dp-orange scale-110' : 'text-white/40'}`}></i>
    </div>
    
    {openDropdown === 'room' && (
      <div className="absolute left-0 w-full mt-2 bg-[#1A2F48] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
        {['All Rooms', 'Living Room', 'Bathroom', 'Kitchen'].map((room) => (
          <div 
            key={room}
            onClick={() => handleSelect('room', room)}
            className="px-5 py-3 text-sm text-white/90 hover:bg-dp-orange hover:text-white transition-colors cursor-pointer"
          >
            {room}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

{/* Category Filter */}
<div className="space-y-3 relative">
  <label className="text-blue-200 text-xs font-medium ml-2 uppercase tracking-wider">Category</label>
  <div className="relative group">
    <div 
      onClick={() => toggleDropdown('category')}
      className={`w-full bg-white/10 border ${openDropdown === 'category' ? 'border-dp-orange ring-2 ring-dp-orange/20' : 'border-white/20'} text-white rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-white/15`}
    >
      <span>{selectedCategory}</span>
      <i className={`fa-solid fa-tags transition-all duration-300 ${openDropdown === 'category' ? 'text-dp-orange scale-110' : 'text-white/40'}`}></i>
    </div>
    
    {openDropdown === 'category' && (
      <div className="absolute left-0 w-full mt-2 bg-[#1A2F48] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
        {['Plumbing', 'Electrical', 'Ceramics', 'Paints'].map((cat) => (
          <div 
            key={cat}
            onClick={() => handleSelect('category', cat)}
            className="px-5 py-3 text-sm text-white/90 hover:bg-dp-orange hover:text-white transition-colors cursor-pointer"
          >
            {cat}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

{/* Budget Filter */}
<div className="space-y-3 relative">
  <label className="text-blue-200 text-xs font-medium ml-2 uppercase tracking-wider">Budget</label>
  <div className="relative group">
    <div 
      onClick={() => toggleDropdown('budget')}
      className={`w-full bg-white/10 border ${openDropdown === 'budget' ? 'border-dp-orange ring-2 ring-dp-orange/20' : 'border-white/20'} text-white rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-white/15`}
    >
      <span>{selectedBudget}</span>
      <i className={`fa-solid fa-money-bill-wave transition-all duration-300 ${openDropdown === 'budget' ? 'text-dp-orange scale-110' : 'text-white/40'}`}></i>
    </div>
    
    {openDropdown === 'budget' && (
      <div className="absolute left-0 w-full mt-2 bg-[#1A2F48] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
        {['All Prices', 'Economical', 'Mid-Range', 'Luxury'].map((budget) => (
          <div 
            key={budget}
            onClick={() => handleSelect('budget', budget)}
            className="px-5 py-3 text-sm text-white/90 hover:bg-dp-orange hover:text-white transition-colors cursor-pointer"
          >
            {budget}
          </div>
        ))}
      </div>
    )}
  </div>
</div>

              {/* Filter Button */}
              <div>
                <button className="w-full bg-dp-orange text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-3 active:scale-95 h-[58px]">
                  <i className="fa-solid fa-sliders"></i>
                  Filter
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Products Display Grid */}
      <section id="products-display" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-dp-blue">Recommended for you</h2>
              <p className="text-gray-500 mt-2">Based on your location and preferences</p>
            </div>
            <span className="text-sm font-semibold text-dp-blue bg-slate-100 px-6 py-2.5 rounded-full border border-gray-100">
              Showing 124 Products
            </span>
          </div>
{/* Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  {[
    { category: "Plumbing", title: "Premium Gold Mixer", price: "1,250", oldPrice: "1,800", rating: "4.8", badge: "Popular", badgeColor: "bg-dp-orange", img: Img, desc: "High-quality brass bathroom mixer with 5-year guarantee." },
    { category: "Ceramics", title: "Marble Grey Porcelain", price: "450", unit: "/ m²", rating: "4.9", badge: "Limited", badgeColor: "bg-blue-600", img: Img2, desc: "Italian-inspired porcelain floor tiles with gloss finish." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img3, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img4, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img5, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img6, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img7, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img8, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img9, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img10, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img11, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img12, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img13, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: "https://images.unsplash.com/photo-1562591970-254bc62245c0?q=80&w=800", desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
    { category: "Painting", title: "Silk Finish Paint", price: "890", rating: "4.7", img: Img14, desc: "Velvet touch washable interior paint. Eco-friendly & odorless." },
  ]
  // التعديل السحري الأول: قص المصفوفة لعرض العدد المطلوب فقط حالياً
  .slice(0, visibleProducts)
  .map((product, idx) => (
    <motion.div 
      key={idx}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
      className="group relative bg-white rounded-[2.5rem] border border-gray-100 p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden rounded-[2rem] bg-slate-50">
        {product.badge && (
          <span className={`absolute top-4 left-4 z-10 ${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
            {product.badge}
          </span>
        )}
        <img 
          src={product.img} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          alt={product.title} 
        />
        
        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 bg-dp-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dp-blue hover:bg-dp-orange hover:text-white transition-all shadow-xl">
            <i className="fa-solid fa-eye"></i>
          </button>
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dp-blue hover:bg-dp-orange hover:text-white transition-all shadow-xl">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-dp-orange uppercase tracking-widest mb-1">{product.category}</p>
            <h3 className="text-xl font-bold text-dp-blue group-hover:text-dp-orange transition-colors">{product.title}</h3>
          </div>
          <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
            <i className="fa-solid fa-star"></i> {product.rating}
          </div>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">{product.desc}</p>
        
        {/* Price and Add Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-dp-blue">
              {product.price} <small className="text-xs font-normal">{product.unit || "EGP"}</small>
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">{product.oldPrice} EGP</span>
            )}
          </div>
          <button className="bg-dp-blue text-white p-4 rounded-2xl hover:bg-dp-orange transition-all active:scale-90 shadow-lg shadow-blue-900/10">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>

{/* Load More Button Section */}
{/* التعديل السحري الثاني: الزرار يظهر فقط لو لسه فيه منتجات مظهرتش (أقل من 15) */}
{visibleProducts < 15 && (
  <div className="text-center mt-16">
    <button 
      onClick={() => setVisibleProducts((prev) => prev + 6)} // بيزود 6 منتجات كل ما تضغطي
      className="px-12 py-5 border-2 border-dp-blue text-dp-blue rounded-[2rem] font-bold hover:bg-dp-blue hover:text-white transition-all duration-300 active:scale-95"
    >
      Load More Products
    </button>
  </div>
)}

        </div>
      </section>
      {/* 4. styles */}
      <section id="filter-by-style" className="py-20 bg-[#EBEBD3]/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-dp-blue mb-4"
          >
            Filter by Your Style
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Choose your preferred design aesthetic and discover personalized offers
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {styles.map((style) => (
            <motion.div
              key={style.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedStyle(style.id)}
              className={`bg-white rounded-2xl p-8 text-center cursor-pointer border-2 transition-all group shadow-sm hover:shadow-xl ${
                selectedStyle === style.id ? 'border-dp-orange ring-1 ring-dp-orange' : 'border-transparent'
              }`}
            >
              {/* Icon Circle */}
              <div className={`w-20 h-20 mx-auto mb-4 ${style.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                <i className={`fa-solid ${style.icon} text-white text-3xl`}></i>
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-dp-blue mb-2">{style.title}</h3>
              <p className="text-gray-600 text-sm">{style.desc}</p>

              {/* Custom Radio Label */}
              <div className="mt-6">
                <div 
                  className={`w-full py-2.5 rounded-xl border-2 font-bold text-sm transition-all ${
                    selectedStyle === style.id 
                    ? 'bg-dp-orange border-dp-orange text-white shadow-lg shadow-orange-500/30' 
                    : 'bg-transparent border-gray-100 text-gray-400 group-hover:border-dp-orange/30'
                  }`}
                >
                  {selectedStyle === style.id ? 'Selected' : 'Select'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    {/* 5. offers */}
    <section id="interactive-offers" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-dp-blue mb-4"
          >
            Featured Product Offers
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hover to reveal exclusive details and special pricing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer, index) => (
            <div key={index} className="flip-card h-[480px] w-full bg-transparent group perspective">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100">
                  <div className="relative h-64">
                    <img className="w-full h-full object-cover" src={offer.img} alt={offer.title} />
                    <div className="absolute top-4 right-4 bg-dp-orange text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      {offer.discount}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-dp-orange uppercase tracking-wide">{offer.category}</span>
                    <h3 className="text-xl font-bold text-dp-blue mt-2 mb-3">{offer.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{offer.desc}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-dp-blue">{offer.price}</span>
                        <span className="text-sm text-gray-400 line-through ml-2">{offer.oldPrice}</span>
                      </div>
                      <div className="flex items-center text-yellow-500 font-bold">
                        <i className="fa-solid fa-star text-sm mr-1"></i>
                        {offer.rating}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#1A2F48] to-blue-900 rounded-[2.5rem] p-8 flex flex-col justify-center shadow-lg rotate-y-180">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-dp-orange rounded-full flex items-center justify-center mx-auto mb-4 shadow-orange-500/20 shadow-lg">
                      <i className={`fa-solid ${offer.icon} text-white text-2xl`}></i>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{offer.backTitle}</h4>
                    <p className="text-gray-300 text-sm">{offer.backDesc}</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    {offer.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-white text-sm">
                        <i className="fa-solid fa-check-circle text-dp-orange mr-3"></i>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-dp-orange text-white py-3.5 rounded-full font-bold hover:bg-orange-600 transition-all transform active:scale-95 shadow-lg shadow-orange-500/30">
                    View in App
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* 6. Newsletter Subscription Section */}
      <section id="newsletter-cta" className="py-20 bg-[#EBEBD3]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#1A2F48] to-[#2A4F78] rounded-[3rem] p-12 md:p-16 relative overflow-hidden shadow-2xl"
          >
            {/* الدوائر الزخرفية في الخلفية */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF8812]/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF8812]/20 rounded-full -ml-40 -mb-40 blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* شارة التنبيه */}
              <div className="inline-flex items-center bg-[#FF8812]/20 text-[#FF8812] px-5 py-2 rounded-full mb-6 border border-[#FF8812]/30">
                <i className="fa-solid fa-bell mr-2 animate-bounce"></i>
                <span className="font-bold text-sm uppercase tracking-wider">Never Miss a Deal</span>
              </div>

              {/* العناوين */}
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Get Exclusive Offers Delivered
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and special promotions.
              </p>

              {/* فورم الاشتراك */}
              <form 
                onSubmit={(e) => e.preventDefault()} 
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
              >
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-8 py-5 rounded-full bg-white text-[#1A2F48] outline-none focus:ring-4 focus:ring-[#FF8812]/50 transition-all font-medium"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF8812] text-white px-10 py-5 rounded-full font-black hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 whitespace-nowrap"
                >
                  Subscribe Now
                </motion.button>
              </form>

              <p className="text-sm text-blue-200/60 mt-8 font-medium">
                Join 50,000+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -7-- سيكشن الحاسبة الذكية: التصميم الكامل (Full-Width Aesthetic) --- */}
<section className="relative w-full py-12 md:py-24 px-4 sm:px-6 overflow-hidden bg-[#f8fafc]">
  
  {/* الخلفية الفنية: دوائر ضوئية متحركة (Animated Background Blobs) */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute -top-24 -left-24 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-dp-orange/5 rounded-full blur-[80px] md:blur-[120px]"
    />
    <motion.div 
      animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -right-32 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-blue-400/5 rounded-full blur-[90px] md:blur-[130px]"
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* التعديل: جعل الحواف rounded-[2rem] في الموبايل وتعود لـ rounded-[4rem] في الشاشات الكبيرة */}
    <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] lg:rounded-[4rem] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* الجانب الأيسر: التحكم والمدخلات */}
        {/* التعديل: ضبط مسافات الـ padding وتوسيط النصوص للموبايل */}
        <div className="lg:col-span-5 p-6 sm:p-10 md:p-16 bg-gradient-to-br from-white/80 to-transparent border-b lg:border-b-0 lg:border-r border-white/40 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 w-full"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-dp-orange/10 border border-dp-orange/20 rounded-full mx-auto lg:mx-0">
              <div className="w-2 h-2 bg-dp-orange rounded-full animate-ping"></div>
              <span className="text-[10px] md:text-[11px] font-black text-dp-orange uppercase tracking-[0.2em]">Material Intelligence</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-dp-blue leading-tight">
                Plan Your Space <br className="hidden sm:inline" />
                <span className="text-dp-orange">Like a Pro</span>
              </h2>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
                Stop guessing. Our smart estimator uses building standards to give you precise material requirements for your renovation.
              </p>
            </div>

            {/* التعديل: تحويل الفورم إلى تصميم مرن في الموبايل (حقل إدخال وتحته زر Calculate كامل العرض) */}
            {/* وفي الشاشات الكبيرة sm:flex يعود الزر كـ absolute مدمج بذكاء كما كان */}
            <form onSubmit={handleCalc} className="space-y-4 w-full">
              <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0 group w-full">
                <input 
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Total Area (m²)"
                  className="w-full bg-white border-2 border-slate-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-dp-orange transition-all font-bold text-dp-blue text-base sm:text-lg shadow-sm group-hover:shadow-md"
                />
                <button 
                  type="submit" 
                  className="w-full sm:w-auto sm:absolute sm:right-3 sm:top-3 sm:bottom-3 bg-dp-blue hover:bg-dp-blue/90 text-white py-4 sm:py-0 px-8 rounded-xl sm:rounded-2xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Calculate</span> 
                  <i className="fa-solid fa-wand-magic-sparkles text-xs text-dp-orange"></i>
                </button>
              </div>
              <p className="text-[9px] md:text-[10px] text-gray-400 text-center lg:text-left ml-0 lg:ml-4">* Includes standard 5-10% material wastage factor</p>
            </form>
          </motion.div>
        </div>

        {/* الجانب الأيمن: عرض النتائج (Visual Results) */}
        {/* التعديل: استخدام grid-cols-1 للشاشات الصغيرة جداً و grid-cols-2 للموبايل العادي والتابلت */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-16 flex items-center justify-center bg-slate-50/30 w-full">
          {result ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6 w-full">
              {[
                { label: "Paint (Liters)", val: result.paint, icon: "fa-paint-roller", color: "text-orange-500", bg: "bg-orange-50" },
                { label: "Ceramics (m²)", val: result.tiles, icon: "fa-border-all", color: "text-blue-500", bg: "bg-blue-50" },
                { label: "Cement (Bags)", val: result.cement, icon: "fa-cubes", color: "text-slate-600", bg: "bg-slate-100" },
                { label: "Bricks (Pcs)", val: result.bricks, icon: "fa-layer-group", color: "text-red-500", bg: "bg-red-50" }
              ].map((item, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={i}
                  className="bg-white p-5 sm:p-6 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className={`${item.bg} ${item.color} w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 text-xl sm:text-2xl group-hover:rotate-12 transition-transform`}>
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-dp-blue mb-1">{item.val}</div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center space-y-4 py-8 lg:py-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-inner border border-slate-100">
                <i className="fa-solid fa-chart-pie text-3xl sm:text-4xl text-slate-200"></i>
              </div>
              <div className="text-slate-400 font-bold uppercase tracking-widest text-xs sm:text-sm">Ready to estimate?</div>
              <p className="text-slate-300 text-xs max-w-[250px] mx-auto">Enter your room measurements to generate a professional material breakdown.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Products;