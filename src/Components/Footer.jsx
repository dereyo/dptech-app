import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/img/Untitled-2-01.png'; // تأكدي من مسار اللوجو الثاني
import '../assets/CSS/style.css';

const Footer = () => {
  return (
    <footer id="footer" className="bg-dp-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Section 1: Logo & Social */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img className="logo2" src={footerLogo} alt="Logo" />
            <p className="text-blue-200 mb-6 mt-4">
              Complete home finishing solutions with premium quality and expert craftsmanship.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {[
                { icon: 'fa-facebook-f', link: '#' },
                { icon: 'fa-twitter', link: '#' },
                { icon: 'fa-instagram', link: '#' },
                { icon: 'fa-linkedin-in', link: '#' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-dp-orange transition-all duration-300"
                >
                  <i className={`fa-brands ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Section 2: Services */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/scan" className="text-blue-200 hover:text-dp-orange transition-colors">Room Scanning</Link></li>
              <li><Link to="/design" className="text-blue-200 hover:text-dp-orange transition-colors">AI Design</Link></li>
              <li><Link to="/preview" className="text-blue-200 hover:text-dp-orange transition-colors">AR Preview</Link></li>
              <li><Link to="/viz" className="text-blue-200 hover:text-dp-orange transition-colors">3D Visualization</Link></li>
            </ul>
          </div>
          
          {/* Section 3: Company */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-blue-200 hover:text-dp-orange transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-blue-200 hover:text-dp-orange transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-blue-200 hover:text-dp-orange transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-dp-orange transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Section 4: Contact info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-blue-200 flex items-center justify-center md:justify-start">
                <i className="fa-solid fa-envelope mr-2 text-dp-orange"></i>info@dptech.com
              </li>
              <li className="text-blue-200 flex items-center justify-center md:justify-start">
                <i className="fa-solid fa-phone mr-2 text-dp-orange"></i>+1 (555) 123-4567
              </li>
              <li className="text-blue-200 flex items-center justify-center md:justify-start">
                <i className="fa-solid fa-location-dot mr-2 text-dp-orange"></i>123 Tech Street, City
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-white border-opacity-10 pt-8 text-center text-xs opacity-60">
          <p className="text-blue-200">&copy; {new Date().getFullYear()} Hasr . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;