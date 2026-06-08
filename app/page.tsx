import React from 'react';
import { Search, Bell, Menu, TrendingUp, Clock, Bookmark, Globe, Cpu, BarChart3, Radio } from 'lucide-react';

export default function Home() {
  const briefings = [
    { category: 'AI & ETHICS', title: 'The Alignment Problem: New Frameworks for AGI Governance', time: '14m ago' },
    { category: 'GEOPOLITICS', title: 'Sovereign Wealth Flows Shift Toward Arctic Infrastructure', time: '38m ago' },
    { category: 'BIO-TECH', title: 'Neuralink Competitor Claims Breakthrough in Non-Invasive BCI', time: '1h ago' }
  ];

  const stories = [
    { category: 'MARKETS', title: 'Institutional Adoption of CBDCs Triggers Liquidity Surge', excerpt: 'Global banking systems begin the transition to automated sovereign settlement layers.', time: '2h ago', readingTime: '6 min' },
    { category: 'FRONTIER', title: 'Mars Habitat 1: First Sustainable Oxygen Cycles Verified', excerpt: 'Atmospheric processing units on the Red Planet maintain nominal levels for 180 days.', time: '4h ago', readingTime: '8 min' },
    { category: 'COMPUTING', title: 'Room-Temperature Superconductors: A Critical Peer Review', excerpt: 'Independent labs across four continents report replicable results in standardized tests.', time: '5h ago', readingTime: '12 min' }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-[#f5f5f5] selection:bg-white selection:text-black font-sans antialiased">
      {/* HEADER: STUNNING MINIMALIST NAV */}
      <nav className="sticky top-0 z-50 bg-[#020202]/90 backdrop-blur-xl border-b border-white/[0.03] px-8 py-5">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="text-xl font-bold tracking-[0.3em] uppercase transition-opacity hover:opacity-70 cursor-pointer">CHRONICLE</span>
            <div className="hidden lg:flex items-center gap-8 text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase">
              <a href="#" className="hover:text-white transition-colors">Intelligence</a>
              <a href="#" className="hover:text-white transition-colors">Frontier</a>
              <a href="#" className="hover:text-white transition-colors">Sovereignty</a>
              <a href="#" className="hover:text-white transition-colors">Synthesis</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black text-red-500 tracking-widest uppercase">Live</span>
            </div>
            <Search size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
            <Menu size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto px-8 py-16">
        {/* ASYMMETRICAL TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* FEATURED STORY */}
          <div className="lg:col-span-8 group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[4px] bg-[#0A0A0A] border border-white/[0.03]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent group-hover:from-blue-500/10 transition-colors duration-700" />
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500">Strategic Outlook 2026</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 underline decoration-blue-500/50 underline-offset-4">Deep Analysis</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-[0.9] mb-8 group-hover:text-white transition-colors">
                  Autonomous Wealth <br />& Sovereign Automation.
                </h1>
                <p className="max-w-xl text-lg text-white/50 font-light leading-relaxed">
                  As decentralized protocols merge with sovereign capital, the structure of global influence is being rewritten in code.
                </p>
              </div>
            </div>
          </div>

          {/* BRIEFINGS COLUMN */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 mb-10">
                <Radio size={14} className="text-white/20" />
                <h2 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/40">The Briefing Room</h2>
              </div>
              <div className="space-y-10">
                {briefings.map((b, i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-[10px] font-black tracking-[0.15em] text-white/20 uppercase mb-3 group-hover:text-blue-500 transition-colors">{b.category}</p>
                    <h3 className="text-xl font-medium tracking-tight leading-snug group-hover:text-white/80 transition-colors">{b.title}</h3>
                    <p className="text-[10px] text-white/30 mt-3 font-bold">{b.time}</p>
                    {i !== briefings.length - 1 && <div className="h-px bg-white/[0.03] mt-10" />}
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-12 w-full py-4 border border-white/[0.05] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Access All Archives
            </button>
          </div>
        </div>

        {/* MODULAR GRID SECTION */}
        <section className="border-t border-white/[0.03] pt-16">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-2xl font-medium tracking-tighter italic">Latest Synthesis</h2>
            <div className="h-px flex-1 bg-white/[0.03] mx-12 hidden md:block" />
            <div className="flex gap-4">
              <button className="p-2 border border-white/[0.05] rounded-full hover:bg-white/5 transition-colors"><Globe size={14} /></button>
              <button className="p-2 border border-white/[0.05] rounded-full hover:bg-white/5 transition-colors"><BarChart3 size={14} /></button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {stories.map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/2] bg-[#0A0A0A] border border-white/[0.03] rounded-[2px] mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-1000 bg-white/[0.01]" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Bookmark size={14} className="text-white/40" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[9px] font-black tracking-[0.2em] text-blue-500 uppercase">{s.category}</p>
                  <h4 className="text-2xl font-medium tracking-tighter leading-tight group-hover:underline decoration-white/20 underline-offset-8 transition-all">
                    {s.title}
                  </h4>
                  <p className="text-sm text-white/40 font-light leading-relaxed line-clamp-2">
                    {s.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-white/[0.03]">
                    <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{s.time}</span>
                    <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{s.readingTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/[0.03] mt-32 py-20 px-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold tracking-[0.4em] uppercase mb-8 block">CHRONICLE</span>
            <p className="text-sm text-white/30 max-w-sm font-light leading-relaxed">
              The premier intelligence layer for the frontier economy. Synthesizing geopolitical shifts and technological breakthroughs for the global elite.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold tracking-widest uppercase text-white/20">Network</h5>
            <ul className="text-sm text-white/40 space-y-2 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Terminal</li>
              <li className="hover:text-white transition-colors cursor-pointer">Reports</li>
              <li className="hover:text-white transition-colors cursor-pointer">Advisory</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold tracking-widest uppercase text-white/20">Legal</h5>
            <ul className="text-sm text-white/40 space-y-2 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
              <li className="hover:text-white transition-colors cursor-pointer">SLA</li>
              <li className="hover:text-white transition-colors cursor-pointer">Identity</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-white/[0.03] flex justify-between items-center text-[10px] font-bold tracking-widest text-white/10 uppercase">
          <p>© 2026 Chronicle Systems Gmbh.</p>
          <p>Verified Node: 0x8A22...FF31</p>
        </div>
      </footer>
    </div>
  );
}
