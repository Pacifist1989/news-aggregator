import React from 'react';
import { Search, Menu, Globe, BarChart3, Radio, ArrowUpRight, Zap, Shield, Target } from 'lucide-react';

export default function Home() {
  const briefings = [
    { category: 'AGENTIC REASONING', title: 'The Silent Rise of Recursive Intelligence Architectures', time: '14m ago', importance: 'Critical' },
    { category: 'QUANTUM FRONTIER', title: 'Topological Qubit Stability Achieves Millisecond Benchmarks', time: '38m ago', importance: 'High' },
    { category: 'GEO-ECONOMICS', title: 'The Great Decoupling: Sovereign Wealth Re-routing Through Neutral Digital Corridors', time: '1h ago', importance: 'Standard' }
  ];

  const stories = [
    { 
      category: 'ON-DEVICE PRIVACY', 
      title: 'Local Intelligence: The End of the Cloud Era?', 
      excerpt: 'New neuromorphic hardware allows for trillion-parameter models to run entirely within air-gapped environments, effectively ending the trade-off between power and privacy.', 
      time: '2h ago', 
      readingTime: '6 min',
      imageAlt: 'Neuromorphic chip rendering'
    },
    { 
      category: 'ADVANCED AESTHETICS', 
      title: 'The Post-Flat Movement: Why Digital Design is Returning to Depth', 
      excerpt: 'Analysis of how physical light simulation and layered translucency are replacing the minimalist austerity of the 2010s.', 
      time: '4h ago', 
      readingTime: '8 min',
      imageAlt: 'Abstract glass architecture'
    },
    { 
      category: 'SOCIETAL SYNTHESIS', 
      title: 'Neural Heritage: Digital Preservation of Human Consciousness Patterns', 
      excerpt: 'Ethical frameworks emerge as the first high-fidelity synaptic maps are archived for posterity under international treaty.', 
      time: '5h ago', 
      readingTime: '12 min',
      imageAlt: 'Neural network visualization'
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202]">
      {/* CINEMATIC NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#020202]/80 backdrop-blur-2xl">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <span className="font-serif text-3xl font-bold tracking-tight italic">Chronicle</span>
            <div className="hidden lg:flex items-center gap-10">
              {['Intelligence', 'Sovereignty', 'Frontier', 'Synthesis'].map((item) => (
                <a key={item} href="#" className="text-[10px] font-bold tracking-widest uppercase text-white/40 hover:text-white transition-all">
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">Live Node</span>
            </div>
            <div className="flex items-center gap-6">
              <Search size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Menu size={18} className="text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* HERO SECTION: MAGAZINE STRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8 group relative">
            <div className="overflow-hidden bg-[#0A0A0A] border border-white/[0.04] aspect-[16/10] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.05)_0%,_transparent_100%)]" />
              
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                    <Zap size={10} className="text-blue-500" />
                    <span className="text-[10px] font-black tracking-widest uppercase text-blue-500">Feature Analysis</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">June 2026 Edition</span>
                </div>
                
                <h1 className="font-serif text-6xl lg:text-8xl font-medium tracking-tight leading-[0.85] mb-10 group-hover:italic transition-all duration-700">
                  The Architectures <br /> of Digital <br /> Sovereignty.
                </h1>
                
                <div className="flex items-end justify-between">
                  <p className="max-w-md text-xl text-white/40 font-light leading-relaxed text-balance">
                    As global networks fragment into localized clusters, the very nature of information ownership is undergoing a fundamental transformation.
                  </p>
                  <div className="flex items-center gap-4 group/btn cursor-pointer">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-white/60 group-hover/btn:text-white transition-colors">Read Manuscript</span>
                    <div className="w-12 h-12 rounded-full border border-white/[0.1] flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR: ELITE BRIEFINGS */}
          <div className="lg:col-span-4 border-l border-white/[0.04] pl-16 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <Radio size={14} className="text-blue-500" />
                <h2 className="text-[11px] font-bold tracking-widest uppercase text-white/40">Intel Feed</h2>
              </div>
              <span className="text-[10px] font-bold text-white/20">EST 22:39</span>
            </div>

            <div className="space-y-12 flex-1">
              {briefings.map((b, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/20 group-hover:text-blue-500 transition-colors">
                      {b.category}
                    </span>
                    <div className="h-px w-4 bg-white/[0.08]" />
                    <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{b.importance}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-medium leading-snug group-hover:text-white/80 transition-colors">
                    {b.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-[10px] font-bold text-white/20">{b.time}</span>
                    <ArrowUpRight size={12} className="text-white/10 group-hover:text-white transition-colors" />
                  </div>
                  {i !== briefings.length - 1 && <div className="h-px bg-white/[0.04] mt-12" />}
                </div>
              ))}
            </div>

            <button className="mt-16 w-full py-5 border border-white/[0.08] text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 glass">
              Access Full Terminal
            </button>
          </div>
        </div>

        {/* DYNAMIC GRID: SYNTHESIS */}
        <section className="border-t border-white/[0.04] pt-24">
          <div className="flex items-end justify-between mb-24">
            <div className="space-y-4">
              <span className="text-[11px] font-black tracking-widest uppercase text-blue-500">The Synthesis</span>
              <h2 className="text-5xl font-serif font-medium tracking-tight italic">Latest Intelligence</h2>
            </div>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full border border-white/[0.08] flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                <Shield size={18} className="text-white/40" />
              </div>
              <div className="w-14 h-14 rounded-full border border-white/[0.08] flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                <Target size={18} className="text-white/40" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-32">
            {stories.map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-[#0A0A0A] border border-white/[0.04] mb-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020202]/40" />
                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-[2s] bg-white/[0.02]" />
                  <div className="absolute top-8 left-8">
                    <span className="text-[9px] font-black tracking-[0.2em] text-white/40 uppercase bg-black/40 backdrop-blur-md px-3 py-1 border border-white/5">
                      {s.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="text-3xl font-serif font-medium tracking-tight leading-[1.1] group-hover:italic transition-all">
                    {s.title}
                  </h4>
                  <p className="text-base text-white/30 font-light leading-relaxed line-clamp-3">
                    {s.excerpt}
                  </p>
                  <div className="pt-6 flex items-center justify-between border-t border-white/[0.04]">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{s.time}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">{s.readingTime}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-white/20 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* LUXURY FOOTER */}
      <footer className="border-t border-white/[0.04] bg-[#050505] pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
            <div className="lg:col-span-6">
              <span className="font-serif text-5xl font-bold tracking-tight italic mb-12 block">Chronicle</span>
              <p className="text-xl text-white/30 max-w-md font-light leading-relaxed text-balance">
                Defining the architecture of information for a decentralized future. High-fidelity intelligence for the world's most discerning readers.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-8">
                <h5 className="text-[10px] font-bold tracking-widest uppercase text-white/20">Operations</h5>
                <ul className="text-[11px] font-bold tracking-widest text-white/40 space-y-4 uppercase">
                  <li className="hover:text-white transition-colors cursor-pointer">Intelligence</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terminal</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Archives</li>
                </ul>
              </div>
              <div className="space-y-8">
                <h5 className="text-[10px] font-bold tracking-widest uppercase text-white/20">Network</h5>
                <ul className="text-[11px] font-bold tracking-widest text-white/40 space-y-4 uppercase">
                  <li className="hover:text-white transition-colors cursor-pointer">Protocol</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Nodes</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Governance</li>
                </ul>
              </div>
              <div className="space-y-8">
                <h5 className="text-[10px] font-bold tracking-widest uppercase text-white/20">Legal</h5>
                <ul className="text-[11px] font-bold tracking-widest text-white/40 space-y-4 uppercase">
                  <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Sovereignty</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Terms</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/[0.04] flex flex-col md:row justify-between items-center gap-8">
            <div className="flex items-center gap-12 text-[10px] font-bold tracking-[0.2em] text-white/10 uppercase">
              <p>© 2026 Chronicle Systems Gmbh</p>
              <p className="hidden md:block">Node ID: 0x8A22...FF31</p>
              <p className="hidden md:block">Signal: Encrypted</p>
            </div>
            <div className="flex gap-6">
              {['Twitter', 'Discord', 'Substack'].map(social => (
                <span key={social} className="text-[10px] font-bold tracking-widest uppercase text-white/20 hover:text-white cursor-pointer transition-colors">
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
