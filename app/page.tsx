"use client";

import { Plane, Radar, ShieldAlert, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans flex flex-col items-center justify-center selection:bg-blue-500/30">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-zinc-950 to-black"></div>
        {/* Simple grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center p-6 w-full max-w-4xl text-center animate-in fade-in zoom-in duration-1000">

        {/* Radar Icon / Logo */}
        <div className="mb-10 relative flex items-center justify-center group cursor-pointer">
          <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full animate-ping group-hover:bg-blue-400/30 transition-colors"></div>
          <div className="relative w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all">
            <Radar className="w-10 h-10 text-blue-400" />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-xs font-medium text-zinc-400 mb-6">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          System Initialization
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
          AviationLoop OSINT Hub
        </h1>

        <p className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
          The next-generation geospatial visualization and aviation incident intelligence platform is currently under active development.
        </p>

        {/* Waitlist form */}
        <form
          className="flex flex-col sm:flex-row w-full max-w-md gap-3 mb-20"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
          }}
        >
          <div className="relative flex-1 group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="w-full h-14 bg-zinc-900/80 border border-zinc-800 text-white rounded-xl pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all backdrop-blur-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="h-14 whitespace-nowrap bg-white text-black font-semibold rounded-xl px-8 hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center min-w-[140px]"
          >
            {submitted ? "Added to list!" : "Join Waitlist"}
          </button>
        </form>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full border-t border-zinc-800/50 pt-16">
          <div className="flex flex-col items-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-semibold text-zinc-100 mb-2">Global Incident Data</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Comprehensive tracking and reporting of global aviation incidents in real-time.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors cursor-default md:-translate-y-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Plane className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-zinc-100 mb-2">Fleet Intelligence</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">Advanced analytics for aviation assets, operator histories, and flight patterns.</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/50 transition-colors cursor-default">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" x2="9" y1="3" y2="18" /><line x1="15" x2="15" y1="6" y2="21" /></svg>
            </div>
            <h3 className="font-semibold text-zinc-100 mb-2">Geospatial Mapping</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">High-performance 3D visualization using Mapbox GL to plot complex data points.</p>
          </div>
        </div>

      </main>

      <footer className="absolute bottom-6 text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} AviationLoop OSINT Hub. All rights reserved.
      </footer>
    </div>
  );
}
