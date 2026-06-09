import React, { useState } from 'react'; // 💡 أضفنا useState للتحكم في القائمة
import { Link, useNavigate } from 'react-router-dom'; 
import myLogo from '../assets/img/Untitled-111-01.png';
import '../assets/CSS/style.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate(); 
  const [isOpen, setIsOpen] = useState(false); // 💡 حالة فتح وإغلاق قائمة الموبايل

  const handleLogout = () => {
    localStorage.clear(); 
    if (setIsLoggedIn) {
      setIsLoggedIn(false);
    }
    setIsOpen(false); // إغلاق القائمة بعد تسجيل الخروج
    navigate('/'); 
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-lg border-b border-gray-100 h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img className="logo" src={myLogo} alt="Logo" />
          </Link>
        </div>
        
        {/* Navigation Links - Desktop (الشاشات الكبيرة) */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Home</Link>
          
          {isLoggedIn && (
            <>
              <Link to="/products" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Products</Link>
              <Link to="/scan" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Scan Result</Link>
            </>
          )}
          
          <Link to="/steps" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">Steps</Link>
          <Link to="/about" className="text-dp-blue font-semibold hover:text-dp-orange transition-colors">About</Link>
        </nav>

        {/* Auth Button - Desktop (الشاشات الكبيرة) */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <button 
              type="button"
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

        {/* 💡 زر القائمة للموبايل (Hamburger Menu Button) */}
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-dp-blue hover:text-dp-orange text-2xl transition-colors focus:outline-none"
        >
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

      </div>

      {/* 💡 قائمة الموبايل المنسدلة (Mobile Dropdown Menu) */}
      <div className={`absolute top-20 left-0 w-full bg-white border-b border-gray-100 py-6 px-6 shadow-xl flex flex-col space-y-5 transition-all duration-300 md:hidden z-[90] ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        
        <Link to="/" onClick={() => setIsOpen(false)} className="text-dp-blue font-semibold hover:text-dp-orange transition-colors py-1">Home</Link>
        
        {isLoggedIn && (
          <>
            <Link to="/products" onClick={() => setIsOpen(false)} className="text-dp-blue font-semibold hover:text-dp-orange transition-colors py-1">Products</Link>
            <Link to="/scan" onClick={() => setIsOpen(false)} className="text-dp-blue font-semibold hover:text-dp-orange transition-colors py-1">Scan Result</Link>
          </>
        )}
        
        <Link to="/steps" onClick={() => setIsOpen(false)} className="text-dp-blue font-semibold hover:text-dp-orange transition-colors py-1">Steps</Link>
        <Link to="/about" onClick={() => setIsOpen(false)} className="text-dp-blue font-semibold hover:text-dp-orange transition-colors py-1">About</Link>
        
        <hr className="border-gray-100 my-2" />

        {/* زر التوثيق داخل قائمة الموبايل */}
        <div className="pt-2">
          {isLoggedIn ? (
            <button 
              type="button"
              onClick={handleLogout}
              className="w-full text-center bg-red-500 text-white py-3 rounded-full font-bold text-sm hover:bg-red-600 transition-all block"
            >
              Log Out
            </button>
          ) : (
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-dp-orange text-white py-3 rounded-full font-bold block"
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