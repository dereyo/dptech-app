import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-dp-blue relative overflow-hidden min-h-[700px] flex items-center pt-20">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-dp-orange rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-dp-orange/20 text-dp-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <i className="fa-solid fa-sparkles mr-2"></i>AI-Powered Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Smart Finishing<br/>Starts Here
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              A smart platform that helps you scan your space, choose the right design, and work with trusted engineers using AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-dp-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-2xl flex items-center justify-center group">
                Start Your Project
                <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-white/30 flex items-center justify-center">
                <i className="fa-solid fa-camera mr-3"></i>
                Scan Your Space
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 flex items-center space-x-8">
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div>
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-white/70 text-sm">Trusted Engineers</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div>
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-white/70 text-sm">Client Rating</div>
              </div>
            </div>
          </motion.div>
          
{/* Right Image Card */}
<motion.div 
  className="relative"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

{/* Floating Animation for the whole card */}
  <motion.div 
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-4 sm:p-6 md:p-8 relative"
  >
    <div className="bg-gradient-to-br from-dp-beige to-gray-100 rounded-[1.5rem] sm:rounded-[2rem] h-52 sm:h-64 md:h-80 flex items-center justify-center mb-6 overflow-hidden">
      <img 
        className="w-full h-full object-cover" 
        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fca16074ad-063b4b8af4473177d361.png" 
        alt="modern living room" 
      />
    </div>
    
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-dp-blue">Your Dream Space</h3>
        <p className="text-gray-600 text-xs sm:text-sm">Visualize before you build</p>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 border-gray-50 pt-2 sm:pt-0">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[2, 5, 8].map(num => (
              <img 
                key={num}
                src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-${num}.jpg`} 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" 
                alt="Engineer" 
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-600 font-medium whitespace-nowrap">+150 Engineers Ready</span>
        </div>
        
        <div className="bg-dp-orange/10 p-2.5 rounded-xl shrink-0">
          <i className="fa-solid fa-wand-magic-sparkles text-dp-orange text-xl sm:text-2xl"></i>
        </div>
      </div>
    </div>
    
  </motion.div>
  
  {/* Floating Badges (الكارت العلوي) */}
  <motion.div 
    animate={{ opacity: [1, 0.7, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="absolute -top-6 -right-4 bg-white rounded-2xl shadow-xl p-4 w-44 hidden sm:block"
  >
    <div className="flex items-center space-x-2 mb-1">
      <i className="fa-solid fa-check-circle text-green-500"></i>
      <span className="text-sm font-semibold text-dp-blue">AI Verified</span>
    </div>
    <div className="text-[10px] text-gray-500">Quality assured by AI</div>
  </motion.div>

  {/* الكارت البرتقالي رجعناه برة الموشن الأبيض عشان يخرج عن حدوده تماماً */}
  {/* غيرنا القيم لـ -bottom-10 و -left-6 وأهم حاجة أضفنا z-50 عشان يظهر فوق الكارت الأبيض */}
  <div className="absolute -bottom-10 -left-6 bg-dp-orange rounded-2xl shadow-xl p-4 w-44 text-white hidden sm:block z-50">
    <div className="text-2xl font-bold mb-1">24/7</div>
    <div className="text-xs">Support Available</div>
  </div>
  
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;