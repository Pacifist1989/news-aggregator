import React from 'react';
import { Search, Bell, User, TrendingUp, Clock, Bookmark, ChevronRight, Globe, Zap, Cpu, BarChart3 } from 'lucide-react';

export default function Home() {
  const trendingStories = [
    {
      category: "Artificial Intelligence",
      title: "The Silent Rise of Agentic Workflows: Beyond LLMs",
      readTime: "6m",
      imageColor: "bg-blue-900/20"
    },
    {
      category: "Global Economy",
      title: "BRICS+ Digital: The Architecture of a New Reserve Currency",
      readTime: "8m",
      imageColor: "bg-purple-900/20"
    },
    {
      category: "Space Exploration",
      title: "Project Artemis: The Logistics of Permanent Lunar Habitation",
      readTime: "10m",
      imageColor: "bg-zinc-900/40"
    }
  ];

  const latestStories = [
    {
      category: "Neuroscience",
      time: "2h ago",
      title: "Neural-Link Stability Achieved in Non-Invasive BCI Trials",
      excerpt: "A breakthrough in signal processing allows for unprecedented bandwidth in non-invasive brain-computer interfaces, promising a future of seamless digital interaction.",
      imageColor: "bg-indigo-900/20"
    },
    {
      category: "Sustainability",
      time: "4h ago",
      title: "Helion Announces Commercial Fusion Milestone in Everett",
      excerpt: "The fusion energy startup reports record-breaking plasma containment times, moving closer to the goal of zero-marginal-cost electricity for the global grid.",
      imageColor: "bg-emerald-900/20"
    },
    {
      category: "Geopolitics",
      time: "5h ago",
      title: "The Semiconductor Corridor: India's New Silicon Silk Road",
      excerpt: "As global supply chains pivot, the Indian subcontinent emerges as a critical node in advanced lithography and chip packaging infrastructure.",
      imageColor: "bg-orange-900/20"
    },
    {
      category: "Quantum Computing",
      time: "7h ago",
      title: "Post-Quantum Cryptography: The Race to Secure Global Finance",
      excerpt: "Financial institutions are accelerating the transition to lattice-based encryption as utility-scale quantum advantage nears the horizon.",
      imageColor: "bg-cyan-900/20"
    },
    {
      category: "Cybersecurity",
      time: "9h ago",
      title: "Autonomous Red-Teaming: The Next Frontier in Defense",
      excerpt: "New AI-driven security protocols can now simulate and patch zero-day vulnerabilities in real-time, effectively ending the era of manual security audits.",
      imageColor: "bg-rose-900/20"
    },
    {
      category: "Bio-Tech",
      time: "12h ago",
      title: "CRISPR 3.0: Precision In-Vivo Gene Editing Reaches Scale",
      excerpt: "Next-generation genetic therapy delivery systems demonstrate successful systemic correction of metabolic disorders in landmark clinical phase one.",
      imageColor: "bg-amber-900/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-[#E5E5E5] selection:bg-white/10 font-sans antialiased">
      {/* Premium Navigation */}
      <nav className="border-b border-white/5 px-8 py-5 flex items-center justify-between sticky top-0 bg-[#020202]/90 backdrop-blur-xl z-50">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-bold tracking-[0.2em] uppercase italic text-white">Chronicle</span>
          <div className="hidden lg:flex gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
            <a href="#" className="hover:text-white transition-all duration-300">Intelligence</a>
            <a href="#" className="hover:text-white transition-all duration-300">Frontiers</a>
            <a href="#" className="hover:text-white transition-all duration-300">Geopolitics</a>
            <a href="#" className="hover:text-white transition-all duration-300">Capital</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search size={18} className="text-white/30 hover:text-white cursor-pointer transition-colors" />
          <div className="h-4 w-[1px] bg-white/10" />
          <User size={18} className="text-white/30 hover:text-white cursor-pointer transition-colors" />
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-8 py-16">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8 text-white/40">
            <Zap size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Featured Analysis</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 group cursor-pointer">
              <div className="relative aspect-[21/9] overflow-hidden rounded-[4px] border border-white/5 mb-8 bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
                <div className="w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 group-hover:scale-[1.02] transition-transform duration-1000" />
                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-4 block">Strategic Outlook 2026</span>
                  <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] text-white max-w-3xl">
                    The Singularity of Sovereign Wealth: How Nations are Automating the Future.
                  </h1>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-between py-2">
              <div className="space-y-10">
                {trendingStories.map((story, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="flex flex-col gap-3">
                      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-blue-500 transition-colors">{story.category}</span>
                      <h3 className="text-lg font-medium leading-snug group-hover:text-white transition-colors text-white/80">{story.title}</h3>
                      <div className="flex items-center gap-4 text-[10px] text-white/20 font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={10} /> {story.readTime}</span>
                        <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Stories Grid */}
        <section>
          <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-light tracking-widest uppercase text-white">The Dispatch</h2>
              <span className="text-[10px] text-white/20 font-medium bg-white/5 px-2 py-0.5 rounded">Live Feed</span>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-2">
              Archives <ChevronRight size={12} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {latestStories.map((story, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col">
                <div className={`aspect-[16/10] rounded-[2px] ${story.imageColor} border border-white/5 mb-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-colors duration-500" />
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-50" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">{story.category}</span>
                  <span className="text-[10px] text-white/20">•</span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/20">{story.time}</span>
                </div>
                <h4 className="text-xl font-medium leading-snug text-white/90 group-hover:text-white transition-colors mb-4">{story.title}</h4>
                <p className="text-[13px] text-white/40 leading-relaxed font-light line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60 italic">Read Intelligence</span>
                  <Bookmark size={14} className="text-white/20 hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 mt-32 py-20 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-2">
            <span className="text-2xl font-bold tracking-[0.2em] uppercase italic text-white block mb-8">Chronicle</span>
            <p className="text-sm text-white/30 max-w-sm leading-relaxed font-light">
              Architecting the global narrative through high-fidelity data, objective analysis, and a relentless pursuit of the technological horizon.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <span className="text-white/60 mb-2">Network</span>
            <a href="#" className="hover:text-white transition-colors">Satellite Feed</a>
            <a href="#" className="hover:text-white transition-colors">Neural Sync</a>
            <a href="#" className="hover:text-white transition-colors">Terminal Access</a>
          </div>
          <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <span className="text-white/60 mb-2">Legal</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Encryption Standards</a>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/10 text-[9px] uppercase tracking-[0.2em]">© 2026 Chronicle Media Group • Secured by Quantum-Lattice</p>
          <div className="flex gap-6">
             <div className="h-2 w-2 rounded-full bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.2)]" />
             <span className="text-white/20 text-[9px] uppercase tracking-[0.2em]">Global Systems Nominal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}