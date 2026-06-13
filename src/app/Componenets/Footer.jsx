import React from 'react';

const Footer = () => {
    return (
    //    Footer Component with Tailwind CSS
      <footer className="bg-slate-900 text-slate-400 text-sm py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">H</div>
            <span className="text-white font-semibold">HireLoop © 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Contact Support</a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;