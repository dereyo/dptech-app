import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; // استدعاء مكتبة axios
import myLogo from '../assets/img/Untitled-111-01.png';
import '../assets/CSS/style.css';

// التعديل السحري: استلام دالة التحديث من ملف App الأب كـ Prop
const Login = ({ setIsLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [role, setRole] = useState('client');
  
  // متغيرات لتخزين قيم الحقول
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 

  // دالة الحفظ والإرسال للـ API (اللوجين والساين أب)
  const handleAuth = async (e) => {
    e.preventDefault();
    
    // ----------------------------------------------------
    // الحالة الأولى: إنشاء حساب جديد (Sign Up)
    // ----------------------------------------------------
    if (activeTab === 'signup') {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register/', {
          name: fullName,
          email: email,
          password: password
        });
        
        console.log('تم إنشاء الحساب بنجاح:', response.data);
        alert('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.');
        setActiveTab('login'); // نقله لتبويب اللوجين
        return;
      } catch (error) {
        console.error('خطأ في التسجيل:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'حدث خطأ أثناء إنشاء الحساب.');
        return;
      }
    }
    
    // ----------------------------------------------------
    // الحالة الثانية: تسجيل الدخول (Log In) - 💡 الإضافة الجديدة هنا
    // ----------------------------------------------------
    if (activeTab === 'login') {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/login/', {
          email: email,
          password: password
        });

        console.log('بيانات الدخول ناجحة:', response.data);
        
        // 💡 حفظ التوكن الراجع من السيرفر في الـ LocalStorage بناءً على طلب صاحبتك
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
        }

        // حفظ بقية البيانات القديمة بتاعتك
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', role);
        
        // تحديث الـ State الرئيسي فوراً
        if (setIsLoggedIn) {
          setIsLoggedIn(true);
        }
        
        // التوجيه لصفحة الهوم
        navigate('/'); 

      } catch (error) {
        console.error('خطأ في تسجيل الدخول:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'خطأ في البريد الإلكتروني أو كلمة المرور.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#1A2F48] via-blue-900 to-[#1A2F48]">
      <div className="bg-white/90 backdrop-blur-md w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Logo Section */}
        <div className="pt-8 pb-4 text-center">
          <img src={myLogo} alt="Logo" className="logo3 contain" />
          <p className="text-gray-500 text-sm font-medium">Build Smarter with DP TECH</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          <button 
            type="button"
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-4 font-bold transition-all ${activeTab === 'login' ? 'border-b-4 border-dp-orange text-dp-blue' : 'text-gray-400'}`}
          >
            Log In
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-4 font-bold transition-all ${activeTab === 'signup' ? 'border-b-4 border-dp-orange text-dp-blue' : 'text-gray-400'}`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8">
          <form onSubmit={handleAuth} className="space-y-5">
            {activeTab === 'signup' && (
              <>
                <div>
                  <label className="block text-[11px] font-black text-dp-blue uppercase tracking-widest mb-4 text-center">I want to join as</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div 
                      onClick={() => setRole('client')}
                      className={`relative border-2 rounded-2xl p-4 text-center cursor-pointer transition-all ${role === 'client' ? 'border-dp-orange bg-orange-50' : 'border-gray-100 hover:border-dp-orange'}`}
                    >
                      <i className="fa-solid fa-house-user text-2xl text-dp-blue mb-1"></i>
                      <span className="block text-xs font-bold text-dp-blue">Client</span>
                    </div>
                    <div 
                      onClick={() => setRole('engineer')}
                      className={`relative border-2 rounded-2xl p-4 text-center cursor-pointer transition-all ${role === 'engineer' ? 'border-dp-orange bg-orange-50' : 'border-gray-100 hover:border-dp-orange'}`}
                    >
                      <i className="fa-solid fa-compass-drafting text-2xl text-dp-blue mb-1"></i>
                      <span className="block text-xs font-bold text-dp-blue">Engineer</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-dp-blue uppercase mb-2">Full Name</label>
                  <div className="relative">
                    <i className="fa-solid fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <input 
                      type="text" 
                      required={activeTab === 'signup'} 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name" 
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-dp-orange" 
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold text-dp-blue uppercase mb-2">Email Address</label>
              <div className="relative">
                <i className="fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-dp-orange" 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-dp-blue uppercase mb-2">Password</label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="password" 
                  required 
                  minLength="8" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:border-dp-orange" 
                />
              </div>
            </div>

            {activeTab === 'login' && (
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2 accent-dp-orange" /> Remember me
                </label>
                <button type="button" className="text-sm text-dp-orange font-semibold hover:underline">Forgot?</button>
              </div>
            )}

            <button type="submit" className="w-full bg-dp-blue text-white py-4 rounded-2xl font-bold hover:bg-opacity-90 shadow-lg transition-all active:scale-95">
              {activeTab === 'login' ? 'Welcome Back' : 'Create Account'} <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </form>
        </div>

        {/* Social Sync */}
        <div className="px-8 pb-10 text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-3 text-gray-400 font-bold">Or sync with</span></div>
          </div>
          <div className="flex justify-center gap-5">
            <button type="button" className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center hover:border-dp-orange transition-all"><i className="fa-brands fa-google text-red-500"></i></button>
            <button type="button" className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center hover:border-dp-orange transition-all"><i className="fa-brands fa-facebook-f text-blue-600"></i></button>
            <button type="button" className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center hover:border-dp-orange transition-all"><i className="fa-brands fa-apple text-lg"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;