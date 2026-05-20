import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Scan = () => {
  // حالة للتحكم في الكارت المفتوح (Accordion)
  const [activeCard, setActiveCard] = useState(null);

  // مصفوفة البيانات (الداتا) لنتائج المسح
  const scans = [
    {
      id: "001",
      title: "Living Room Design",
      date: "December 15, 2024 at 10:30 AM",
      area: "25.5 m²",
      suggestions: "AI suggestions Ready",
      icon: "fa-home",
      gradient: "from-dp-orange to-orange-600",
      shadow: "shadow-orange-500/20"
    },
    {
      id: "002",
      title: "Master Bedroom",
      date: "December 14, 2024 at 3:45 PM",
      area: "18.2 m²",
      suggestions: "6 AI Suggestions Ready",
      icon: "fa-bed",
      gradient: "from-blue-500 to-blue-700",
      shadow: "shadow-blue-500/20"
    },
    {
      id: "005",
      title: "Children Bedroom",
      date: "December 14, 2024 at 3:45 PM",
      area: "18.2 m²",
      suggestions: "6 AI Suggestions",
      icon: "fa-child",
      gradient: "from-green-500 to-green-700",
      shadow: "shadow-green-500/20"
    },
    {
      id: "003",
      title: "Kitchen & Dining Area",
      date: "December 13, 2024 at 11:20 AM",
      area: "32.8 m²",
      suggestions: "10 AI Suggestions",
      icon: "fa-utensils",
      gradient: "from-purple-500 to-purple-700",
      shadow: "shadow-purple-500/20"
    }
  ];

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen pt-15">
        {/* Hero Section - Scan Page */}
      <section id="hero-section" className="bg-gradient-to-br from-[#EBEBD3] to-white py-12 md:py-20 pt-32 md:pt-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Text */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dp-blue mb-4">
              Your Scan Results
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore AI-powered design suggestions for your room. Click 'Open in App' to continue in the application and interact with designs.
            </p>
          </motion.div>
          
          {/* Search and Filter Bar Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-8 max-w-5xl mx-auto border border-gray-50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Search Input Side */}
              <div className="flex items-center space-x-4 w-full md:w-auto flex-grow max-w-2xl">
                <div className="bg-dp-orange/10 p-4 rounded-2xl shrink-0">
                  <i className="fa-solid fa-magnifying-glass text-dp-orange text-xl"></i>
                </div>
                <input 
                  type="text" 
                  placeholder="Search your scans by ID or date..." 
                  className="text-dp-blue placeholder-gray-400 focus:outline-none text-base md:text-lg w-full bg-transparent font-medium"
                />
              </div>

              {/* Filter Buttons Side */}
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none px-8 py-3.5 border-2 border-dp-orange text-dp-orange rounded-full hover:bg-dp-orange hover:text-white transition-all duration-300 font-bold text-sm md:text-base flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-orange-500/10">
                  <i className="fa-solid fa-filter"></i>
                  Filter
                </button>
                
                {/* إضافة زرار "فتح في التطبيق" بما أن النص فوق أشار إليه */}
                <button className="hidden md:flex px-8 py-4 bg-dp-blue text-white rounded-full font-bold text-sm hover:bg-dp-orange transition-all shadow-xl active:scale-95">
                  Open In App
                </button>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ... سيكشن الهيرو والبحث اللي عملناه قبل كدا ... */}

      <section id="scan-results-list" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-6">
            
            {scans.map((scan) => (
              <div 
                key={scan.id}
                className={`bg-white rounded-[2.5rem] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 p-6 cursor-pointer ${activeCard === scan.id ? 'ring-2 ring-dp-orange' : ''}`}
                onClick={() => toggleCard(scan.id)}
              >
                {/* الجزء العلوي من الكارت */}
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${scan.gradient} rounded-3xl flex items-center justify-center shadow-lg ${scan.shadow}`}>
                    <i className={`fa-solid ${scan.icon} text-white text-3xl`}></i>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-dp-blue mb-2">
                      {scan.title} - Scan #{scan.id}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">Scanned on: {scan.date}</p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <span className="px-3 py-1 bg-[#EBEBD3] text-dp-blue rounded-full text-xs font-bold">{scan.area}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        <i className="fa-solid fa-check mr-1"></i>Complete
                      </span>
                      <span className="text-gray-400 text-xs font-medium">
                        <i className="fa-solid fa-wand-magic-sparkles text-dp-orange mr-1"></i>
                        {scan.suggestions}
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 hidden md:block">
                    <motion.i 
                      animate={{ rotate: activeCard === scan.id ? 90 : 0 }}
                      className="fa-solid fa-chevron-right text-gray-300 text-2xl"
                    ></motion.i>
                  </div>
                </div>

                {/* الجزء السفلي (التفاصيل) - يظهر عند الضغط */}
                <AnimatePresence>
                  {activeCard === scan.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 mt-6 border-t border-gray-100">
                        
                        {/* Option 1: Quantity Survey */}
                        <Link to="/result" className="group p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-md text-center transition-all border border-transparent hover:border-blue-100">
                          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                            <i className="fa-solid fa-calculator text-xl"></i>
                          </div>
                          <h4 className="font-bold text-dp-blue text-sm uppercase">Quantity Survey</h4>
                          <p className="text-[10px] text-gray-500 mt-1">Detailed material estimates</p>
                        </Link>

                        {/* Option 2: Style Catalog */}
                        <Link to="/steps" className="group p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-md text-center transition-all border border-transparent hover:border-orange-100">
                          <div className="w-12 h-12 bg-orange-100 text-dp-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-dp-orange group-hover:text-white transition-all">
                            <i className="fa-solid fa-palette text-xl"></i>
                          </div>
                          <h4 className="font-bold text-dp-blue text-sm uppercase">Style Catalog</h4>
                          <p className="text-[10px] text-gray-500 mt-1">View room color palettes</p>
                        </Link>

                        {/* Option 3: Supply Status */}
                        {/* صح: اكتب المسار اللي عرفته في App.js */}
                        <Link to="/resources" className="group p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-md text-center transition-all border border-transparent hover:border-green-100">
                          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                            <i className="fa-solid fa-truck-fast text-xl"></i>
                          </div>
                          <h4 className="font-bold text-dp-blue text-sm uppercase">Supply Status</h4>
                          <p className="text-[10px] text-gray-500 mt-1">Track delivery progress</p>
                        </Link>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Scan;