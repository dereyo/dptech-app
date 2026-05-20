import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/img/Untitled-111-01.png';
import '../assets/CSS/style.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem('isLoggedIn');
    if (userStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // مسح كل البيانات بما فيها isLoggedIn
    window.location.href = "/"; // العودة للهوم وتحديث الموقع فوراً
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-lg border-b border-gray-100 h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link to="/">
            <img className="logo" src={myLogo} alt="Logo" />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Home</Link>
          
          {/* تظهر فقط إذا كان مسجل دخول */}
          {isLoggedIn && (
            <>
<Link to="/products" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Products</Link>
    <Link to="/scan" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Scan Result</Link>
            </>
          )}
          
          <Link to="/steps" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Steps</Link>
          <Link to="/about" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">About</Link>
        </nav>

        {/* Auth Button */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 active:scale-95"
            >
              Log Out
            </button>
          ) : (
            <Link 
              to="/login" 
              className="bg-dp-orange text-white px-7 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-95"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;