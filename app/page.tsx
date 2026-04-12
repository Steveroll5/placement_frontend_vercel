"use client";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden bg-[#FFFCF2] font-sans">
      
      {/* 1. Animated Gradient Background (Like the Chatbot) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(-45deg,#FFFCF2,#FFE3D8,#FAD0C4,#FFD1FF,#FFFCF2)] bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]"></div>

      {/* 2. Giant Liquid Glass Container */}
      <div className="relative z-10 w-full max-w-6xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-16 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-5 py-2 rounded-full border border-white/80 bg-white/60 shadow-sm mb-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#EB5E28] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EB5E28] animate-pulse"></span>
              System Online
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#252422] mb-6 drop-shadow-sm">
            MIT Bengaluru <br /> Placements
          </h1>
          
          <p className="text-[#403D39] max-w-2xl mx-auto text-lg leading-relaxed font-medium opacity-80">
            Unredact the truth. Access real-time interview questions, granular placement statistics, and our specialized Voice AI agent.
          </p>
        </div>

        {/* The 3 Core Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10">
          
          {/* Chatbot Module */}
          <Link href="/chatbot" className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer shadow-lg hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#EB5E28]/20 to-transparent flex items-center justify-center mb-6 border border-[#EB5E28]/30 group-hover:rotate-6 transition-transform shadow-inner">
              <span className="text-4xl">🎙️</span>
            </div>
            <h2 className="text-2xl font-bold text-[#252422] mb-3">AI Agent ARIA</h2>
            <p className="text-[#403D39] text-sm opacity-80">
              Voice-activated intelligent assistant for real-time placement queries and interview prep.
            </p>
          </Link>

          {/* Questions Module */}
          <Link href="/questions" className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-[#EB5E28] text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-md">Database</div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform shadow-inner">
              <span className="text-4xl">📂</span>
            </div>
            <h2 className="text-2xl font-bold text-[#252422] mb-3">Question Vault</h2>
            <p className="text-[#403D39] text-sm opacity-80">
              Searchable repository of previous OA questions, technical rounds, and HR interviews.
            </p>
          </Link>

          {/* Stats Module */}
          <Link href="/stats" className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 flex flex-col items-center text-center group cursor-pointer shadow-lg hover:shadow-2xl hover:bg-white/70 hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:-translate-y-2 transition-transform shadow-inner">
              <span className="text-4xl">📊</span>
            </div>
            <h2 className="text-2xl font-bold text-[#252422] mb-3">Placement Stats</h2>
            <p className="text-[#403D39] text-sm opacity-80">
              Granular data on visiting companies, average CTCs, internship stipends, and timelines.
            </p>
          </Link>

        </div>
      </div>
      
      {/* Fallback CSS for the gradient animation just in case it isn't in your globals.css */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </main>
  );
}