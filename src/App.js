import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'; // 💡 أضفنا useLocation

import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import UserHome from './Pages/UserHome';
import Login from './Pages/Login';
import Steps from './Pages/Steps';
import About from './Pages/About';
import Result from './Pages/Result';
import Products from './Pages/Products';
import Scan from './Pages/Scan';
import Resources from './Pages/Resources';

// 1️⃣ المكون الداخلي الذي يملك صلاحية قراءة المسار الحالي
function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();

  // 💡 الفحص السحري: هل المستخدم واقف في صفحة اللوجين حالياً؟
  // الفحص بيغطي المسار العادي أو مسار الـ HashRouter بأمان
  const isLoginPage = location.pathname === '/login' || location.hash === '#/login';

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      {/* 💡 الـ Navbar هيظهر فقط إذا لم نكن في صفحة اللوجين */}
      {!isLoginPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      {/* 💡 لو صفحة لوجين بنشيل الـ padding top (pt-20) عشان خلفية اللوجين تملأ الشاشة بالكامل */}
      <main className={`flex-grow ${isLoginPage ? 'pt-0' : 'pt-20'}`}> 
        <Routes>
          <Route path="/" element={isLoggedIn ? <UserHome /> : <Home />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          
          <Route path="/scan" element={<Scan />} />
          <Route path="/result" element={<Result />} />
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/about" element={<About />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* 💡 الـ Footer هيظهر فقط إذا لم نكن في صفحة اللوجين */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

// 2️⃣ المكون الرئيسي الأب للتطبيق
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

export default App;