import React from 'react';
import { Search, Bell, User, TrendingUp, Clock, Bookmark } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-8">
          <span className="text-xl font-semibold tracking-tighter uppercase italic">Chronicle</span>
          <div className="hidden md:flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">World</a>
            <a href="#" className="hover:text-white transition-colors">Technology</a>
            <a href="#" className="hover:text-white transition-colors">Finance</a>
            <a href="#" className="hover:text-white transition-colors">Culture</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Search size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          <Bell size={20} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/20" />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-blue-400">
            <TrendingUp size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Trending Now</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <div className="w-full h-full bg-white/5 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Special Report</span>
                  <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">The Quantum Shift: How Decentralized Computing is Redefining Global Infrastructure</h1>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex gap-4 border-b border-white/5 pb-6">
                    <div className="flex-1">
                      <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-2">Technology</p>
                      <h3 className="text-lg font-medium leading-tight group-hover:text-blue-400 transition-colors">Neural Architectures: The Future of Cognitive Computing</h3>
                      <div className="flex items-center gap-3 mt-4 text-white/40 text-xs">
                        <span className="flex items-center gap-1"><Clock size={12} /> 4m read</span>
                        <Bookmark size={12} className="hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div className="w-24 h-24 rounded-lg bg-white/5 border border-white/10 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-semibold tracking-tight">Latest Stories</h2>
            <button className="text-sm text-white/40 hover:text-white transition-colors">View all news →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-xl bg-white/5 border border-white/10 mb-6 overflow-hidden">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-3">Markets • 2 hours ago</p>
                <h4 className="text-xl font-medium leading-snug group-hover:text-blue-400 transition-colors">Financial Systems Adapt as Digital Currencies Gain Mainstream Adoption</h4>
                <p className="text-white/60 text-sm mt-3 line-clamp-2 font-light leading-relaxed">As central banks around the world explore the potential of sovereign digital tokens, the global financial landscape is entering a period of unprecedented transformation.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-xl font-semibold tracking-tighter uppercase italic">Chronicle</span>
          <div className="flex gap-8 text-xs text-white/40 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
          <p className="text-white/20 text-xs">© 2026 Chronicle Media Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}