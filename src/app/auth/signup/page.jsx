'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function SignUpPage() {
  // 'seeker' or 'recruiter' to adapt form context and gather relevant data
  const [userRole, setUserRole] = useState('seeker');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata.entries());
    
    // Explicitly pass user role alongside raw form data
    const completePayload = { ...data, role: userRole };
    
    console.log('Registration submitted with payload:', completePayload);
    // Handle signup/registration backend workflow here
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans antialiased">
      
      {/* Upper Brand Return Anchor */}
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-6 w-6 bg-slate-200 group-hover:bg-blue-600 rounded flex items-center justify-center text-slate-700 group-hover:text-white font-bold text-xs transition-colors">←</div>
          <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors">Back to home</span>
        </Link>
      </div>

      <div className="sm:mx-auto w-full sm:max-w-md px-4">
        {/* Platform Branded Logo Head */}
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">T</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Hire<span className="text-blue-600">Loop</span></span>
        </div>

        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          Create your platform account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 hover:underline">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto w-full sm:max-w-xl px-4">
        <div className="bg-white py-8 px-4 shadow-xl border border-slate-200/80 rounded-2xl sm:px-10">
          
          {/* ROLE SELECTOR SEGMENT (Hero UI Style Segmented Controller) */}
          <div className="p-1 bg-slate-100 rounded-xl flex gap-1 mb-6">
            <button
              type="button"
              onClick={() => setUserRole('seeker')}
              className={`flex-1 text-center py-2 text-xs font-semibold rounded-lg transition-all duration-150 ${
                userRole === 'seeker'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/40'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
               Join as Job Seeker
            </button>
            <button
              type="button"
              onClick={() => setUserRole('recruiter')}
              className={`flex-1 text-center py-2 text-xs font-semibold rounded-lg transition-all duration-150 ${
                userRole === 'recruiter'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/40'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
               Join as Recruiter
            </button>
          </div>

          {/* MAIN REGISTRATION FORM */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Split Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder="John"
                    className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Doe"
                    className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                  />
                </div>
              </div>
            </div>

            {/* DYNAMIC FORM INJECTION FIELDS (Changes based on selected User Role) */}
            {userRole === 'seeker' ? (
              <div>
                <label htmlFor="targetRole" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Primary Specialization / Job Title
                </label>
                <div className="mt-1">
                  <input
                    id="targetRole"
                    name="targetRole"
                    type="text"
                    required
                    placeholder="e.g. Full Stack Engineer, Product Designer"
                    className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Company Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      placeholder="e.g. Stripe, Acme Corp"
                      className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="companyWebsite" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Company Website
                  </label>
                  <div className="mt-1">
                    <input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="url"
                      required
                      placeholder="https://example.com"
                      className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Standard Core Email Address Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                {userRole === 'seeker' ? 'Email address' : 'Work Email Address'}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={userRole === 'seeker' ? 'john.doe@gmail.com' : 'johndoe@company.com'}
                  className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                />
              </div>
            </div>

            {/* Password Configuration */}
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Minimum 8 characters"
                  className="appearance-none block w-full px-3 py-2.5 border border-slate-200 rounded-xl placeholder-slate-400 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition duration-150 bg-slate-50/30"
                />
              </div>
            </div>

            {/* Policy Consent Terms */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="termsConsent"
                  name="termsConsent"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500/20 border-slate-300 rounded"
                />
              </div>
              <div className="ml-2 text-xs">
                <label htmlFor="termsConsent" className="text-slate-500 font-medium select-none">
                  By signing up, I agree to the{' '}
                  <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </label>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  userRole === 'seeker'
                    ? 'bg-slate-900 hover:bg-slate-800 focus:ring-slate-500'
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                }`}
              >
                {userRole === 'seeker' ? 'Register Account' : 'Get Recruiter Access'}
              </button>
            </div>
          </form>

          {/* SOCIAL SIGNUP SEPARATOR (Gravity UI Style) */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-medium tracking-wider">Or register with</span>
              </div>
            </div>

            {/* OAUTH GRID */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-slate-200 rounded-xl bg-white text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2 px-4 border border-slate-200 rounded-xl bg-white text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition"
              >
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}