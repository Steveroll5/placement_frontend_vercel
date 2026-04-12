"use client";

import Link from 'next/link';

export default function StatsPage() {
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
          <Link href="/questions" className="w-10 h-10 flex items-center justify-center text-[#252422] opacity-50 hover:opacity-100 hover:bg-white/50 rounded-full transition-all" title="Question Vault">📂</Link>
          {/* Active Tab */}
          <Link href="/stats" className="w-10 h-10 flex items-center justify-center bg-white shadow-sm text-[#252422] rounded-full border border-white/60 transition-all" title="Stats">📊</Link>
        </div>
      </nav>

      {/* --- PANE 2: Main Dashboard Area --- */}
      <section className="relative z-10 flex-1 flex flex-col bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden p-8">
        
        <header className="w-full mb-8">
          <h1 className="text-3xl font-extrabold text-[#252422] tracking-tight">Placement Statistics</h1>
          <p className="text-[#403D39] opacity-70 mt-1">Real-time data for the 2026 Graduating Batch.</p>
        </header>

        <div className="flex-1 overflow-y-auto pr-2 pb-10 space-y-6">
          
          {/* Top Row: Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl p-6 shadow-sm flex flex-col">
              <span className="text-xs font-bold text-[#403D39] uppercase tracking-wider opacity-70 mb-2">Highest Package</span>
              <span className="text-4xl font-extrabold text-[#252422]">54.0 <span className="text-lg">LPA</span></span>
              <span className="text-xs text-green-600 font-bold mt-2">↑ 12% vs last year</span>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl p-6 shadow-sm flex flex-col">
              <span className="text-xs font-bold text-[#403D39] uppercase tracking-wider opacity-70 mb-2">Average Package</span>
              <span className="text-4xl font-extrabold text-[#252422]">12.5 <span className="text-lg">LPA</span></span>
              <span className="text-xs text-green-600 font-bold mt-2">↑ 4% vs last year</span>
            </div>
            <div className="bg-white/60 backdrop-blur-md border border-white/80 rounded-3xl p-6 shadow-sm flex flex-col">
              <span className="text-xs font-bold text-[#403D39] uppercase tracking-wider opacity-70 mb-2">Companies Visited</span>
              <span className="text-4xl font-extrabold text-[#252422]">185</span>
              <span className="text-xs text-[#EB5E28] font-bold mt-2">Active Drive Season</span>
            </div>
            <div className="bg-[#1c1c1e] text-white backdrop-blur-md border border-black/10 rounded-3xl p-6 shadow-lg flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#2a2a2d] transition-colors">
              <span className="text-3xl mb-1">📥</span>
              <span className="text-sm font-bold">Download Full Report</span>
            </div>
          </div>

          {/* Middle Row: Charts & Data */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Dept Placement Pseudo-Chart */}
            <div className="lg:col-span-2 bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#252422] mb-6">Placement by Department (%)</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#252422] mb-1"><span>Computer Science (CSE)</span><span>94%</span></div>
                  <div className="w-full bg-white/50 rounded-full h-3"><div className="bg-[#EB5E28] h-3 rounded-full" style={{ width: '94%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#252422] mb-1"><span>Electronics (ECE)</span><span>88%</span></div>
                  <div className="w-full bg-white/50 rounded-full h-3"><div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#252422] mb-1"><span>AI & ML (AIML)</span><span>91%</span></div>
                  <div className="w-full bg-white/50 rounded-full h-3"><div className="bg-emerald-500 h-3 rounded-full" style={{ width: '91%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-bold text-[#252422] mb-1"><span>Mechanical (MECH)</span><span>72%</span></div>
                  <div className="w-full bg-white/50 rounded-full h-3"><div className="bg-purple-500 h-3 rounded-full" style={{ width: '72%' }}></div></div>
                </div>
              </div>
            </div>

            {/* Upcoming Drives Timeline */}
            <div className="bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold text-[#252422] mb-6">Upcoming Timelines</h3>
              <div className="flex-1 space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white before:via-white/60 before:to-transparent">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-[#EB5E28] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                    <div className="text-xs font-bold text-[#EB5E28] mb-1">April 15, 2026</div>
                    <div className="text-sm font-bold text-[#252422]">Google OA Round</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-white bg-blue-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10"></div>
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                    <div className="text-xs font-bold text-blue-600 mb-1">April 22, 2026</div>
                    <div className="text-sm font-bold text-[#252422]">Cisco Interviews</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `}} />
    </main>
  );
}