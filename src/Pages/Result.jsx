import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
  // بيانات تجريبية لنتائج المسح
  const scanResults = [
    {
      id: "001",
      title: "Living Room Design",
      date: "December 15, 2024 at 10:30 AM",
      area: "25.5 m²",
      suggestions: "8 AI Suggestions",
      icon: "fa-home",
      gradient: "from-orange-500 to-orange-600",
      status: "Complete"
    },
    // تقدر تضيف أي عدد من النتائج هنا وهتظهر لوحدها
  ];
  const [zones, setZones] = useState([]);

// 💡 المصفوفة الاحتياطية (الفيك) بتاعتك
const fakeZones = [
  { id: "wall", title: "Wall Design", subtitle: "Optimal paint colors and wall treatments", icon: "fa-paint-roller", items: [{ label: "Recommended Paint", sub: "Premium Quality", name: "Warm Beige #EBEBD3", color: "#EBEBD3", extra: "Manufacturer: ColorTech Pro" }] },
  { id: "floor", title: "Flooring Options", subtitle: "Durable and stylish flooring recommendations", icon: "fa-layer-group", items: [{ label: "Engineered Hardwood", tag: "Best Match", tagCol: "bg-green-100 text-green-700", name: "Light Oak finish, scratch-resistant", extra: "Manufacturer: FloorMaster Elite", price: "Est. $45-65 per m²" }] },
  { id: "ceiling", title: "Ceiling & Lighting", subtitle: "Lighting solutions and ceiling treatments", icon: "fa-lightbulb", items: [{ label: "Recessed LED Lights", tag: "Energy Efficient", tagCol: "bg-yellow-100 text-yellow-700", name: "Warm white, dimmable, 6 units", extra: "Manufacturer: LightPro Systems", price: "Est. $320-480 total" }] },
  { id: "furniture", title: "Smart Furniture Layout", subtitle: "Optimized placement for functionality", icon: "fa-couch", items: [{ label: "3-Seater Sofa", tag: "Perfect Fit", tagCol: "bg-green-100 text-green-700", name: "220cm width, fabric upholstery", extra: "Manufacturer: ComfortLine Home", price: "Est. $1,200-1,800" }] }
];
useEffect(() => {
  const fetchAIData = async () => {
    try {
      const token = localStorage.getItem('token');
      // استخدام الـ ID الافتراضي من مثال زميلتك
      const response = await axios.get('http://localhost:5000/api/elements/project/6a25c651d3e87e1547704872', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data?.data?.length > 0) {
        const serverItems = response.data.data.map(item => ({
          label: item.itemName,
          sub: "AI Calculated",
          name: `Quantity: ${item.quantity} ${item.unit}`,
          extra: item.remarks,
          price: `Total: $${item.totalPrice}`,
          tag: "AI verified",
          tagCol: "bg-purple-100 text-purple-700"
        }));

        setZones([
          { id: "ai-features", title: "AI Quantity Survey Results", subtitle: "Real calculations from drawings", icon: "fa-wand-magic-sparkles", items: serverItems },
          ...fakeZones
        ]);
      } else {
        setZones(fakeZones);
      }
    } catch (error) {
      setZones(fakeZones); // لو السيرفر مش شغال يعرض الفيك
    }
  };
  fetchAIData();
}, []);

  const [searchQuery, setSearchQuery] = useState("");
  const roomDimensions = [
  { label: "Total Area", value: "25.5 m²" },
  { label: "Length", value: "5.8 m" },
  { label: "Width", value: "4.4 m" },
  { label: "Ceiling Height", value: "2.8 m" },
  { label: "Door Width", value: "0.9 m" },
];
const furnitureData = [
  { 
    name: "Sofa", 
    tag: "Perfect Fit", 
    tagColor: "bg-green-100 text-green-700",
    recommendation: "200-230cm width", 
    clearance: "80-100cm front space" 
  },
  { 
    name: "Coffee Table", 
    tag: "Optimal", 
    tagColor: "bg-green-100 text-green-700",
    recommendation: "100-130cm diameter", 
    height: "40-45cm standard" 
  },
  { 
    name: "Side Tables", 
    tag: "Suggested", 
    tagColor: "bg-blue-100 text-blue-700",
    recommendation: "50-60cm width", 
    placement: "Beside sofa ends" 
  },
];
const designs = [
  {
    id: 1,
    name: "Modern Minimalist",
    desc: "Clean lines, neutral palette with warm beige and white tones. Perfect for creating a spacious and calming atmosphere.",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/491ad0bc58-53467a41fc48930cd536.png",
    colors: ["#FFFFFF", "#EBEBD3", "#8B7355"],
    items: "7 items",
    budget: "$3,200 - $4,500",
    recommended: true
  },
  {
    id: 2,
    name: "Scandinavian Comfort",
    desc: "Cozy and functional with natural materials, soft textures, and a warm gray color palette for ultimate comfort.",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/04fb753b45-666d90be349b0f9f95cb.png",
    colors: ["#E8E8E8", "#9CA3AF", "#D4A574"],
    items: "9 items",
    budget: "$2,800 - $4,000"
  },
  {
    id: 3,
    name: "Industrial Loft",
    desc: "Bold and edgy with exposed materials, metal accents, and a mix of vintage and modern elements.",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2848185584-cd89962bb7de4f948bf3.png",
    colors: ["#3A3A3A", "#8B4513", "#708090"],
    items: "8 items",
    budget: "$3,500 - $5,200"
  },
  {
    id: 4,
    name: "Bohemian Eclectic",
    desc: "Vibrant and artistic with mixed patterns, rich textures, and a free-spirited approach to design.",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/be9a199aa1-5b36a424550c4821fcce.png",
    colors: ["#D2691E", "#8B4789", "#CD853F"],
    items: "11 items",
    budget: "$2,400 - $3,800"
  },
  {
    id: 5,
    name: "Mid-Century Modern",
    desc: "Retro-inspired with clean lines, organic curves, and iconic furniture pieces from the golden age.",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3518b5ae19-20ee86cf62f4f4fc1efd.png",
    colors: ["#D2691E", "#8B7355", "#4A7C59"],
    items: "6 items",
    budget: "$4,200 - $6,000"
  },
  {
    id: 6,
    name: "Coastal Breeze",
    desc: "Light and airy with ocean-inspired colors, natural materials, and relaxed beach house vibes.",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ad6aa911eb-241b52dac780ee5538c5.png",
    colors: ["#F0F8FF", "#4682B4", "#F5DEB3"],
    items: "8 items",
    budget: "$2,900 - $4,100"
  }
];
const allItems = [
  {
    id: 1,
    name: "Modern Fabric Sofa",
    sub: "3-Seater, 220cm",
    category: "Furniture",
    manufacturer: "ComfortLine Home",
    colorName: "Warm Beige",
    colorCode: "#EBEBD3",
    price: "$1,450",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8597e3bd3d-71d1e1d89253128efdca.png"
  },
  {
    id: 2,
    name: "Glass Coffee Table",
    sub: "120cm diameter",
    category: "Furniture",
    manufacturer: "ModernCraft Furniture",
    colorName: "Walnut Wood",
    colorCode: "#8B7355",
    price: "$520",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/621118765c-7959e0bc1b7a656ce4c5.png"
  },
  {
    id: 3,
    name: "Premium Wall Paint",
    sub: "5L coverage",
    category: "Paint",
    manufacturer: "ColorTech Pro",
    colorName: "Warm Beige",
    colorCode: "#EBEBD3",
    price: "$85",
    isIcon: true,
    icon: "fa-paint-roller"
  },
  {
    id: 4,
    name: "Geometric Pendant",
    sub: "LED compatible",
    category: "Lighting",
    manufacturer: "DesignLux Studio",
    colorName: "Brass Finish",
    colorCode: "#B8860B",
    price: "$230",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f9c1da0153-5ebeb0a657ef631988e3.png"
  },
  {
    id: 5,
    name: "Decorative Pillows Set",
    sub: "4 pieces, patterns",
    category: "Accessories",
    manufacturer: "HomeDecor Plus",
    colorName: "Mixed",
    colorCode: "linear-gradient(45deg, #EBEBD3 50%, #FF8812 50%)",
    price: "$120",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/426974d2dc-bde80028c0f91ec9cef3.png"
  },
  {
    id: 6,
    name: "Indoor Plant Set",
    sub: "3 plants with pots",
    category: "Accessories",
    manufacturer: "GreenLife Botanicals",
    colorName: "Natural Green",
    colorCode: "#228B22",
    price: "$95",
    img: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f2f5693a78-cc3b130c9b3bc9c6e8e8.png"
  }
];
const summaryStats = [
  { label: "Design Style", value: "Modern Minimalist", isBold: true },
  { label: "Total Items", value: "18 pieces" },
  { label: "Furniture Pieces", value: "7 items" },
  { label: "Paint Colors", value: "2 colors" },
  { label: "Accessories", value: "9 items" },
  { label: "Est. Total Budget", value: "$3,200 - $4,500", isPrice: true },
];
const manufacturers = [
  { name: "ComfortLine Home", desc: "3 furniture items", icon: "fa-couch" },
  { name: "ColorTech Pro", desc: "2 paint colors", icon: "fa-paint-roller" },
  { name: "DesignLux Studio", desc: "4 lighting fixtures", icon: "fa-lightbulb" },
  { name: "FloorMaster Elite", desc: "Flooring solution", icon: "fa-layer-group" },
  { name: "HomeDecor Plus", desc: "8 accessories", icon: "fa-gem" },
];
const interactiveTools = [
  { title: "I Like This Design", desc: "Save and bookmark your favorite designs", icon: "fa-heart", gradient: "from-pink-500 to-red-500" },
  { title: "Try Another Design", desc: "Generate alternative AI suggestions instantly", icon: "fa-rotate", gradient: "from-blue-500 to-purple-500" },
  { title: "Share Design", desc: "Share with designers or contractors", icon: "fa-share-nodes", gradient: "from-green-500 to-teal-500" },
  { title: "AR Preview", desc: "See the design in your real room using AR", icon: "fa-cube", gradient: "from-orange-500 to-yellow-500" },
];
  return (
    <div className="bg-white min-h-screen">
      {/* --- Hero Section --- */}
      <section id="hero-section" className="bg-gradient-to-br from-[#EBEBD3] to-white py-12 md:py-20 pt-32 md:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Your Scan Results
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore AI-powered design suggestions for your room. Click 'Open in App' to continue in the application and interact with designs.
            </p>
          </motion.div>
          
          {/* Search Bar Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto border border-gray-50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4 w-full md:w-auto flex-grow max-w-xl">
                <div className="bg-orange-500 bg-opacity-10 p-3 rounded-2xl shrink-0">
                  <i className="fa-solid fa-search text-orange-600 text-xl"></i>
                </div>
                <input 
                  type="text" 
                  placeholder="Search your scans..." 
                  className="text-blue-900 placeholder-gray-400 focus:outline-none text-base md:text-lg w-full bg-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button className="w-full md:w-auto px-6 py-2.5 border-2 border-orange-500 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold text-sm md:text-base">
                  <i className="fa-solid fa-filter mr-2"></i>Filter
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- Scan Results List --- */}
      <section id="scan-results-list" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6">
            {scanResults.map((scan) => (
              <motion.div 
                key={scan.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row items-center p-6 gap-6">
                  {/* Icon Section */}
                  <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${scan.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <i className={`fa-solid ${scan.icon} text-white text-3xl`}></i>
                  </div>

                  {/* Info Section */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                      {scan.title} - Scan #{scan.id}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 mb-3">
                      Scanned on: {scan.date}
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <span className="px-3 py-1 bg-[#EBEBD3] text-blue-900 rounded-full text-xs font-bold">
                        {scan.area}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold flex items-center">
                        <i className="fa-solid fa-check mr-1"></i>{scan.status}
                      </span>
                      <span className="text-gray-500 text-xs font-medium flex items-center">
                        <i className="fa-solid fa-lightbulb text-orange-500 mr-1"></i>
                        {scan.suggestions}
                      </span>
                    </div>
                  </div>

                  {/* Action Section */}
                  <div className="flex-shrink-0">
                    <Link 
                      to={`/scan-details/${scan.id}`} 
                      className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors group"
                    >
                      <i className="fa-solid fa-chevron-right text-orange-500 text-xl group-hover:text-white"></i>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- Room Requirements Analysis Section --- */}
      <section id="room-requirements" className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Room Requirements Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis of your room dimensions, furniture sizing, and material recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Room Dimensions */}
            <div id="req-dimensions" className="bg-gradient-to-br from-[#EBEBD3] to-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="bg-orange-500 bg-opacity-10 p-4 rounded-2xl inline-block mb-6 text-orange-600">
                <i className="fa-solid fa-ruler-combined text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Room Dimensions</h3>
              <div className="space-y-4">
                {roomDimensions.map((dim, idx) => (
                  <div key={idx} className={`flex items-center justify-between py-3 ${idx !== roomDimensions.length -1 ? 'border-b border-gray-200' : ''}`}>
                    <span className="text-gray-600 font-medium">{dim.label}</span>
                    <span className="font-bold text-blue-900 text-xl">{dim.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Furniture Sizing */}
            <div id="req-furniture" className="bg-gradient-to-br from-[#EBEBD3] to-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="bg-orange-500 bg-opacity-10 p-4 rounded-2xl inline-block mb-6 text-orange-600">
                <i className="fa-solid fa-couch text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Furniture Sizing</h3>
              <div className="space-y-4">
                {furnitureData.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-blue-900">{item.name}</span>
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-1 leading-relaxed">Recommended: {item.recommendation}</p>
                    <p className="text-xs text-gray-500 italic">
                      {item.clearance ? `Clearance: ${item.clearance}` : 
                       item.height ? `Height: ${item.height}` : 
                       `Placement: ${item.placement}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Material Recommendations */}
            <div id="req-materials" className="bg-gradient-to-br from-[#EBEBD3] to-white rounded-3xl shadow-lg p-8 border border-gray-100">
              <div className="bg-orange-500 bg-opacity-10 p-4 rounded-2xl inline-block mb-6 text-orange-600">
                <i className="fa-solid fa-certificate text-4xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Material Recommendations</h3>
              <div className="space-y-4">
                {[
                  { icon: "fa-check-circle", iconCol: "text-green-600", title: "Durability", desc: "Engineered hardwood, luxury vinyl, stain-resistant fabrics." },
                  { icon: "fa-droplet", iconCol: "text-blue-500", title: "Maintenance", desc: "Washable paint finish, wipeable upholstery recommended." },
                  { icon: "fa-leaf", iconCol: "text-green-500", title: "Eco-Friendly", desc: "Low-VOC paints, sustainable wood, natural fiber textiles." }
                ].map((mat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-2">
                      <i className={`fa-solid ${mat.icon} ${mat.iconCol} text-lg mr-3`}></i>
                      <span className="font-bold text-blue-900">{mat.title}</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{mat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Banner: Space Density Analysis */}
          <div className="mt-12 bg-gradient-to-r from-blue-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative Background Icon */}
            <i className="fa-solid fa-rocket absolute -right-10 -bottom-10 text-white opacity-5 text-9xl -rotate-12"></i>
            
            <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h3 className="text-3xl font-bold mb-4">Space Density Analysis</h3>
                <p className="text-lg text-blue-100 mb-8 max-w-xl">
                  Your room has optimal furniture density for comfortable living and efficient traffic flow.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12">
                  <div className="text-center">
                    <p className="text-sm text-blue-300 mb-1 uppercase tracking-widest font-semibold">Furniture</p>
                    <p className="text-4xl font-black text-orange-400">32%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-300 mb-1 uppercase tracking-widest font-semibold">Open Space</p>
                    <p className="text-4xl font-black text-white">68%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-300 mb-1 uppercase tracking-widest font-semibold">Traffic Flow</p>
                    <p className="text-4xl font-black text-green-400 flex items-center justify-center">
                      Excellen <i className="fa-solid fa-star ml-2 text-xl"></i>
                    </p>
                  </div>
                </div>
              </div>

              {/* Chart Icon Placeholder */}
              <div className="hidden lg:block">
                <div className="w-56 h-56 bg-white bg-opacity-10 backdrop-blur-sm rounded-[3rem] border border-white border-opacity-20 flex items-center justify-center shadow-inner">
                  <i className="fa-solid fa-chart-pie text-white text-8xl animate-pulse"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- AI-Powered Design Suggestions Section --- */}
      <section id="design-suggestions" className="py-20 bg-gradient-to-br from-[#EBEBD3] to-white text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">AI-Powered Design Suggestions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore multiple design options tailored to your space. Each suggestion includes furniture layout, color schemes, and decor recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design) => (
              <div 
                key={design.id} 
                className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                {/* Image Container */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={design.img} 
                    alt={design.name} 
                  />
                  {design.recommended && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                      <i className="fa-solid fa-star mr-1 animate-pulse"></i> Recommended
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{design.name}</h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed h-12 overflow-hidden">
                    {design.desc}
                  </p>
                  
                  {/* Design Info Stats */}
                  <div className="mb-8 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <i className="fa-solid fa-palette text-orange-500 mr-2 w-5"></i> Color Scheme
                      </span>
                      <div className="flex space-x-1.5">
                        {design.colors.map((color, i) => (
                          <div 
                            key={i}
                            className="w-5 h-5 rounded-full border border-gray-200 shadow-sm" 
                            style={{ backgroundColor: color }}
                            title={color}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <i className="fa-solid fa-couch text-orange-500 mr-2 w-5"></i> Furniture Pieces
                      </span>
                      <span className="font-bold text-blue-900">{design.items}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 flex items-center">
                        <i className="fa-solid fa-dollar-sign text-orange-500 mr-2 w-5"></i> Est. Budget
                      </span>
                      <span className="font-bold text-blue-900">{design.budget}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-orange-600 text-white py-3.5 rounded-2xl hover:bg-orange-700 transition-all duration-300 font-bold shadow-lg shadow-orange-200 flex items-center justify-center active:scale-95">
                      <i className="fa-solid fa-mobile-screen mr-2"></i> Open in App
                    </button>
                    <button className="w-12 h-12 border-2 border-orange-100 text-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center active:scale-90 shadow-sm">
                      <i className="fa-solid fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- Room Zone Analysis Section --- */}
      <section id="room-zones" className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Room Zone Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of your room divided into functional zones with specific recommendations for each area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zones.map((zone) => (
              <div key={zone.id} 
                className="bg-gradient-to-br from-[#EBEBD3] to-white rounded-[2.5rem] shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                {/* Zone Header */}
                <div className="flex items-start mb-8">
                  <div className="bg-orange-600 bg-opacity-10 p-4 rounded-2xl mr-5 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <i className={`fa-solid ${zone.icon} text-3xl text-orange-600 group-hover:text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-1">{zone.title}</h3>
                    <p className="text-sm text-gray-500">{zone.subtitle}</p>
                  </div>
                </div>

                {/* Zone Items */}
                <div className="space-y-4">
                  {zone.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-blue-900">{item.label}</span>
                        {item.tag ? (
                          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${item.tagCol}`}>
                            {item.tag}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400 font-medium">{item.sub}</span>
                        )}
                      </div>

                      <div className="flex items-center space-x-4">
                        {item.color && (
                          <div 
                            className="w-12 h-12 rounded-xl border border-gray-200 shadow-inner shrink-0" 
                            style={{ backgroundColor: item.color }}
                          ></div>
                        )}
                        <div className="flex-grow">
                          <p className="text-sm font-semibold text-gray-700">{item.name}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{item.extra}</p>
                          {item.price && (
                            <p className="text-sm font-bold text-orange-600 mt-2">{item.price}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Zone Action Button */}
                  <div className="pt-4">
                    <button className="w-full bg-blue-900 text-white py-4 rounded-2xl hover:bg-orange-600 transition-all duration-300 font-bold text-sm shadow-lg shadow-blue-100 flex items-center justify-center group/btn active:scale-95">
                      <i className="fa-solid fa-mobile-screen mr-2 group-hover/btn:animate-bounce"></i>
                      {zone.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- Complete Items List Section --- */}
      <section id="items-list" className="py-20 bg-gradient-to-br from-white to-[#EBEBD3] text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Complete Items List</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed catalog of all recommended furniture, paint, flooring, and accessories with manufacturer information.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl p-4 md:p-8 mb-8 border border-gray-100">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { name: 'All Items', icon: 'fa-layer-group' },
                { name: 'Furniture', icon: 'fa-couch' },
                { name: 'Paint', icon: 'fa-paint-roller' },
                { name: 'Flooring', icon: 'fa-table-cells' },
                { name: 'Accessories', icon: 'fa-gem' }
              ].map((tab, idx) => (
                <button 
                  key={idx}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center shadow-sm
                    ${idx === 0 ? 'bg-orange-600 text-white shadow-orange-200' : 'bg-[#EBEBD3] text-blue-900 hover:bg-orange-600 hover:text-white'}`}
                >
                  <i className={`fa-solid ${tab.icon} mr-2`}></i>{tab.name}
                </button>
              ))}
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-gray-50">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#EBEBD3] bg-opacity-50">
                    <th className="text-left py-5 px-6 text-blue-900 font-black text-xs uppercase tracking-wider">Item</th>
                    <th className="text-left py-5 px-6 text-blue-900 font-black text-xs uppercase tracking-wider">Category</th>
                    <th className="text-left py-5 px-6 text-blue-900 font-black text-xs uppercase tracking-wider">Manufacturer</th>
                    <th className="text-left py-5 px-6 text-blue-900 font-black text-xs uppercase tracking-wider">Color/Finish</th>
                    <th className="text-left py-5 px-6 text-blue-900 font-black text-xs uppercase tracking-wider">Est. Price</th>
                    <th className="text-center py-5 px-6 text-blue-900 font-black text-xs uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {allItems.map((item) => (
                    <tr key={item.id} className="hover:bg-[#EBEBD3] hover:bg-opacity-20 transition-all duration-300 group">
                      <td className="py-5 px-6">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-2xl mr-4 overflow-hidden shadow-inner flex items-center justify-center shrink-0 border border-gray-50 group-hover:scale-105 transition-transform">
                            {item.isIcon ? (
                              <i className={`fa-solid ${item.icon} text-orange-600 text-2xl`}></i>
                            ) : (
                              <img className="w-full h-full object-cover" src={item.img} alt={item.name} />
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-blue-900">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.sub}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest
                          ${item.category === 'Furniture' ? 'bg-blue-100 text-blue-700' : 
                            item.category === 'Paint' ? 'bg-green-100 text-green-700' : 
                            item.category === 'Lighting' ? 'bg-yellow-100 text-yellow-700' : 'bg-purple-100 text-purple-700'}`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="py-5 px-6 text-sm text-gray-600 font-medium">{item.manufacturer}</td>
                      <td className="py-5 px-6">
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-6 h-6 rounded-lg shadow-sm border border-gray-200" 
                            style={{ background: item.colorCode }}
                          ></div>
                          <span className="text-xs font-semibold text-gray-600">{item.colorName}</span>
                        </div>
                      </td>
                      <td className="py-5 px-6 font-black text-blue-900">{item.price}</td>
                      <td className="py-5 px-6 text-center">
                        <button className="px-5 py-2.5 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-all duration-300 text-xs font-bold shadow-md shadow-orange-100 flex items-center justify-center mx-auto active:scale-95">
                          <i className="fa-solid fa-mobile-screen mr-2"></i>Open
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <button className="px-10 py-5 bg-blue-900 text-white rounded-[2rem] hover:bg-orange-600 transition-all duration-500 font-black text-lg shadow-2xl shadow-blue-100 flex items-center mx-auto group">
              <i className="fa-solid fa-mobile-screen mr-3 group-hover:rotate-12 transition-transform"></i>
              View Complete Catalog in App
            </button>
          </div>
        </div>
      </section>
      {/* --- Final Room Summary Section --- */}
      <section id="final-summary" className="py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Final Room Summary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Complete overview of your selected design with all items, colors, and manufacturers</p>
          </div>

          <div className="bg-gradient-to-br from-[#EBEBD3] to-white rounded-[2.5rem] shadow-xl p-6 md:p-10 mb-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
              {/* Left Column: Stats */}
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  <i className="fa-solid fa-clipboard-list mr-3 text-orange-600"></i> Design Summary
                </h3>
                <div className="space-y-2">
                  {summaryStats.map((stat, i) => (
                    <div key={i} className={`flex items-center justify-between py-4 ${i !== summaryStats.length - 1 ? 'border-b border-gray-200/60' : ''}`}>
                      <span className="text-gray-600 font-medium">{stat.label}</span>
                      <span className={`font-bold ${stat.isPrice ? 'text-orange-600 text-xl' : 'text-blue-900'}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Manufacturers */}
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  <i className="fa-solid fa-industry mr-3 text-orange-600"></i> Manufacturers Used
                </h3>
                <div className="space-y-3">
                  {manufacturers.map((man, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow group">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-orange-600 bg-opacity-10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-orange-600 transition-colors">
                          <i className={`fa-solid ${man.icon} text-orange-600 group-hover:text-white transition-colors`}></i>
                        </div>
                        <div>
                          <p className="font-bold text-blue-900">{man.name}</p>
                          <p className="text-xs text-gray-500">{man.desc}</p>
                        </div>
                      </div>
                      <button className="text-orange-500 hover:text-blue-900 transition-colors p-2">
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-gray-200">
              <button className="px-8 py-4 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all font-bold shadow-lg flex items-center active:scale-95">
                <i className="fa-solid fa-mobile-screen mr-2"></i> Continue in App
              </button>
              <button className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all font-bold flex items-center active:scale-95">
                <i className="fa-solid fa-download mr-2 text-sm"></i> Download PDF
              </button>
              <button className="px-8 py-4 bg-white text-blue-900 border-2 border-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition-all font-bold flex items-center active:scale-95">
                <i className="fa-solid fa-share-nodes mr-2 text-sm"></i> Share with Designer
              </button>
            </div>
          </div>

          {/* Call to Action Banner */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-[2.5rem] p-10 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <i className="fa-solid fa-circle-check text-6xl mb-6 text-green-400"></i>
              <h3 className="text-3xl font-black mb-4">Your Design is Ready!</h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
                Open the DP TECH app to interact with your design, visualize it in AR, and start making your dream room a reality.
              </p>
              <button className="px-10 py-5 bg-orange-600 text-white rounded-full hover:bg-orange-700 hover:scale-105 transition-all font-black text-xl shadow-2xl flex items-center mx-auto">
                <i className="fa-solid fa-mobile-screen-button mr-3"></i> Launch DP TECH App
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- Interactive Features Section --- */}
      <section id="interactive-features" className="py-20 bg-gradient-to-br from-[#EBEBD3] to-white text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Interactive Design Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">Engage with your design using powerful interactive features available in the DP TECH app.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTools.map((tool, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-50 flex flex-col items-center">
                <div className={`bg-gradient-to-br ${tool.gradient} w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-lg shadow-gray-200`}>
                  <i className={`fa-solid ${tool.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{tool.title}</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">{tool.desc}</p>
                <button className="mt-auto px-6 py-3.5 bg-orange-600 text-white rounded-2xl hover:bg-orange-700 transition-all font-bold w-full shadow-md active:scale-95 text-sm flex items-center justify-center">
                  <i className="fa-solid fa-mobile-screen mr-2"></i> Open in App
                </button>
              </div>
            ))}
          </div>

          {/* AI Feedback Footer */}
          <div className="mt-16 bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-gray-50">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-blue-900 mb-4">AI Feedback & Smart Recommendations</h3>
              <p className="text-lg text-gray-500 font-medium">Our AI learns from your choices to provide increasingly personalized suggestions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Learning System", icon: "fa-brain", desc: "AI analyzes your preferences and refines future recommendations", color: "from-orange-500 to-orange-600" },
                { title: "Smart Reports", icon: "fa-chart-line", desc: "Get top 3 design options based on your taste and room size", color: "from-blue-700 to-blue-900" },
                { title: "Personalization", icon: "fa-wand-magic-sparkles", desc: "Each interaction makes suggestions more tailored to you", color: "from-purple-500 to-pink-500" }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className={`bg-gradient-to-br ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                    <i className={`fa-solid ${item.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium px-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;