import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// 1. عملنا مكون اسمه NavigationWrapper عشان نقدر نقرا مسار الصفحة الحالية بأمان
function NavigationWrapper() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const location = useLocation();

  // فحص هل المستخدم واقف في صفحة اللوجين حالياً؟
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      
      {/* الـ Navbar هيظهر فقط لو مش صفحة اللوجين */}
      {!isLoginPage && <Navbar />}
      
      {/* شلنا الـ pt-20 من الـ main في صفحة اللوجين عشان الخلفية المتدرجة للوجين تبدأ من فوق خالص بدون فراغ أبيض */}
      <main className={`flex-grow ${isLoginPage ? 'pt-0' : 'pt-20'}`}> 
        <Routes>
          <Route path="/" element={isLoggedIn ? <UserHome /> : <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/result" element={<Result />} />
          <Route path="/resources" element={<Resources />} /> 
          <Route path="/products" element={<Products />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* الـ Footer هيظهر فقط لو مش صفحة اللوجين */}
      {!isLoginPage && <Footer />}
    </div>
  );
}

// 2. المكون الرئيسي للتطبيق بيمرر الـ Router
function App() {
  return (
    <Router>
      <NavigationWrapper />
    </Router>
  );
}

export default App;