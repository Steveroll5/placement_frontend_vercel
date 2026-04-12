"use client";

import { useState } from 'react';
import Link from 'next/link';

// Mock Data for the Question Vault
const questionDb = [
  { id: 1, company: "Amazon", role: "SDE-1", type: "FTE", difficulty: "Hard", questions: 45, grade: "S" },
  { id: 2, company: "Microsoft", role: "Software Engineer", type: "FTE + Intern", difficulty: "Medium", questions: 62, grade: "S" },
  { id: 3, company: "Goldman Sachs", role: "Summer Analyst", type: "Intern", difficulty: "Hard", questions: 28, grade: "A" },
  { id: 4, company: "TCS", role: "Digital", type: "FTE", difficulty: "Easy", questions: 120, grade: "C" },
  { id: 5, company: "Deloitte", role: "Analyst", type: "FTE", difficulty: "Medium", questions: 34, grade: "B" },
  { id: 6, company: "Cisco", role: "Network Engineer", type: "FTE", difficulty: "Medium", questions: 19, grade: "A" },
];

export default function QuestionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "CSE", "ECE", "AIML", "Mech"];

  return (
    <main className="relative flex w-full h-screen p-4 md:p-6 gap-4 lg:gap-6 overflow-hidden bg-[#FFFCF2] font-sans">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(-45deg,#FFFCF2,#FFE3D8,#FAD0C4,#FFD1FF,#FFFCF2)] bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]"></div>

      {/* --- PANE 1: Slim Navigation (Left) --- */}
      <nav className="relative z-10 w-20 hidden md:flex flex-col items-center py-6 gap-8 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="w-10 h-10 rounded-full bg-[#252422] text-white flex items-center justify-center font-bold text-xl shadow-md cursor-pointer hover:bg-[#EB5E28] transition-colors">
          M
        </div>
        <div className="flex flex-col gap-6 mt-4">
          <Link href="/" className="w-10 h-10 flex items-center justify-center text-[#252422] opacity-50 hover:opacity-100 hover:bg-white/50 rounded-full transition-all" title="Home">🏠</Link>
          <Link href="/chatbot" className="w-10 h-10 flex items-center justify-center text-[#252422] opacity-50 hover:opacity-100 hover:bg-white/50 rounded-full transition-all" title="AI Agent">🎙️</Link>
          {/* Active Tab */}
          <Link href="/questions" className="w-10 h-10 flex items-center justify-center bg-white shadow-sm text-[#252422] rounded-full border border-white/60 transition-all" title="Question Vault">📂</Link>
          <Link href="/stats" className="w-10 h-10 flex items-center justify-center text-[#252422] opacity-50 hover:opacity-100 hover:bg-white/50 rounded-full transition-all" title="Stats">📊</Link>
        </div>
      </nav>

      {/* --- PANE 2: Main Dashboard Area --- */}
      <section className="relative z-10 flex-1 flex flex-col bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-8">
        
        {/* Header & Search */}
        <header className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#252422] tracking-tight">Question Vault</h1>
            <p className="text-[#403D39] opacity-70 mt-1">Access verified OA and interview questions.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/80 shadow-sm w-full md:w-96">
            <span className="opacity-50">🔍</span>
            <input 
              type="text" 
              placeholder="Search companies or roles..." 
              className="bg-transparent border-none outline-none text-[#252422] w-full placeholder-[#403D39]/50 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm ${
                activeFilter === filter 
                  ? 'bg-[#1c1c1e] text-white shadow-md' 
                  : 'bg-white/50 text-[#252422] hover:bg-white/80 border border-white/60'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Company Grid (Inspired by CollegeUnredacted) */}
        <div className="flex-1 overflow-y-auto pr-2 scroll-smooth pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {questionDb.filter(c => c.company.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => (
              <div key={item.id} className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-56">
                
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-extrabold text-[#252422] uppercase tracking-wide">{item.company}</h2>
                    <p className="text-[#EB5E28] font-bold text-xs mt-1 tracking-widest uppercase">{item.role}</p>
                  </div>
                  {/* Grade Badge */}
                  <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-black text-lg shadow-inner ${
                    item.grade === 'S' ? 'bg-yellow-400/20 text-yellow-600 border border-yellow-400/50' : 
                    item.grade === 'A' ? 'bg-green-400/20 text-green-700 border border-green-400/50' : 
                    item.grade === 'B' ? 'bg-blue-400/20 text-blue-700 border border-blue-400/50' : 
                    'bg-red-400/20 text-red-700 border border-red-400/50'
                  }`}>
                    {item.grade}
                  </div>
                </div>

                <div className="flex items-end justify-between mt-6">
                  <div className="flex gap-6">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#403D39] opacity-60">Type</p>
                      <p className="text-[#252422] font-semibold">{item.type}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#403D39] opacity-60">Questions</p>
                      <p className="text-[#252422] font-semibold">{item.questions} Verified</p>
                    </div>
                  </div>
                  <button className="bg-[#252422] text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    ➔
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}} />
    </main>
  );
}