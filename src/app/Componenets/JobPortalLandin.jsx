import React from 'react';
import Stats from './Stats';

const JobPortalLandin = () => {
    return (
         <div className="min-h-screen bg-slate-50 text-slate-900 antialiased font-sans">
      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Over 12,400+ live jobs listed today
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            The modern way to <span className="text-blue-600">land your dream job</span> or hire top talent.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto">
            Whether you are a professional looking for your next career move, or a recruiter searching for the perfect candidate—we have you covered.
          </p>

          {/* Search Bar Input Deck */}
          <div className="mt-10 max-w-4xl mx-auto bg-white p-3 rounded-2xl shadow-xl border border-slate-200/80 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 px-3 border-b md:border-b-0 md:border-r border-slate-100 py-2 md:py-0">
              <svg className="h-5 w-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" placeholder="Job title, keywords, or company" className="w-full bg-transparent border-0 focus:outline-none text-slate-800 placeholder-slate-400 text-sm" />
            </div>
            <div className="flex-1 flex items-center gap-2 px-3 py-2 md:py-0">
              <svg className="h-5 w-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <input type="text" placeholder="City, state, or remote" className="w-full bg-transparent border-0 focus:outline-none text-slate-800 placeholder-slate-400 text-sm" />
            </div>
            <button className="w-full md:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition duration-150 shrink-0">
              Search Jobs
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Are you hiring?</span>
              <a href="#recruiters" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
                Get a Recruiter Account 
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Stats cards */}
      <Stats />

      {/* 5. LOGO WALL MARQUEE */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Empowering hiring teams at global powerhouses</p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-10 sm:gap-16 opacity-40 grayscale contrast-200 font-bold text-xl text-slate-700">
            <span>Google</span>
            <span>Meta</span>
            <span>Microsoft</span>
            <span>Vercel</span>
            <span>Stripe</span>
          </div>
        </div>
      </section>
  </div>
    );
};

export default JobPortalLandin;