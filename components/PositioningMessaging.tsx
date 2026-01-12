
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Target, MessageSquare, Search, 
  Layers, Quote, ArrowUpRight, MousePointer2, Sparkles,
  Zap, PenTool, BarChart, X, Play
} from 'lucide-react';

interface Props {
  onNavigate: (page: 'home' | 'marketing-consulting' | 'positioning') => void;
}

const PositioningMessaging: React.FC<Props> = ({ onNavigate }) => {
  const [activeVertical, setActiveVertical] = useState<'fintech' | 'saas'>('fintech');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  const verticalData = {
    fintech: {
      from: "Secure payments for everyone, everywhere.",
      to: "The infrastructure of trust for Africa's borderless economy.",
      focus: "Institutional credibility meets local relevance."
    },
    saas: {
      from: "Manage your tasks more efficiently.",
      to: "The OS for teams that refuse to move at 'agency speed'.",
      focus: "Outcome-driven velocity over feature lists."
    }
  };

  return (
    <div className="bg-bg-light">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-bg-gray rounded-b-[80px]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Strategic Pillar 02</span>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-text-dark leading-[1.05] mb-8">
                Positioning & <span className="text-primary italic">Messaging</span> Architecture.
              </h1>
              <p className="text-xl text-text-muted mb-12 max-w-2xl leading-relaxed">
                Most brands fail not because of their product, but because their narrative is invisible. We build the strategic blueprints that make your brand impossible to ignore.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto bg-text-dark text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 shadow-2xl">
                  Get a narrative audit
                  <ArrowRight size={20} />
                </button>
                <div className="flex items-center gap-3 text-text-muted">
                   <div className="flex -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
                   </div>
                   <span className="text-xs font-bold uppercase tracking-widest">Trusted by 40+ scale-ups</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE ANATOMY SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <motion.div {...fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-8 leading-tight">
                  The anatomy of a <br /><span className="text-primary italic">winning narrative.</span>
                </h2>
                <p className="text-lg text-text-muted mb-10 leading-relaxed">
                  We don't just write copy. We architect a messaging system that aligns your internal vision with market reality.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Core Positioning", desc: "The 'uncommon denominator' that separates you from every competitor.", icon: <Target className="text-primary" /> },
                    { title: "Messaging Pillars", desc: "The three core arguments that prove your value across every touchpoint.", icon: <Layers className="text-primary" /> },
                    { title: "Voice & Tone OS", desc: "A disciplined system for how your brand sounds, from ads to support.", icon: <MessageSquare className="text-primary" /> },
                    { title: "RTB Framework", desc: "Hard Reasons-To-Believe that back up every claim with data and proof.", icon: <BarChart className="text-primary" /> }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-bg-gray rounded-3xl border border-transparent hover:border-primary/20 transition-all flex gap-6">
                      <div className="shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-dark mb-1">{item.title}</h4>
                        <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </motion.div>

             <div className="relative">
                <div className="aspect-square bg-bg-dark rounded-[64px] p-12 flex flex-col justify-center overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border-[1px] border-white rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[1px] border-white rounded-full" />
                   </div>
                   <motion.div 
                     animate={{ y: [0, -10, 0] }}
                     transition={{ repeat: Infinity, duration: 4 }}
                     className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl"
                   >
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles size={20} className="text-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">MX AI-Architect</span>
                      </div>
                      <p className="text-xl font-display font-bold text-text-dark leading-tight italic">
                        "Stop selling features. Start selling the version of the user that has already won."
                      </p>
                   </motion.div>
                   <div className="mt-12 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                         <p className="text-white font-bold text-2xl mb-1">92%</p>
                         <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Memorability lift</p>
                      </div>
                      <div className="bg-primary p-6 rounded-2xl shadow-xl">
                         <p className="text-white font-bold text-2xl mb-1">2.4x</p>
                         <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Conversion delta</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* THE SHIFT: BEFORE & AFTER */}
      <section className="py-32 bg-bg-dark rounded-t-[80px]">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">The Narrative <span className="text-primary">Shift.</span></h2>
              <p className="text-white/40 text-xl max-w-2xl mx-auto">See how we turn commodity descriptions into category-defining positioning.</p>
           </div>

           <div className="flex justify-center mb-16">
              <div className="bg-white/5 p-2 rounded-full border border-white/10 flex">
                 <button 
                  onClick={() => setActiveVertical('fintech')}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeVertical === 'fintech' ? 'bg-primary text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                 >
                   Fintech Example
                 </button>
                 <button 
                  onClick={() => setActiveVertical('saas')}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${activeVertical === 'saas' ? 'bg-primary text-white shadow-lg' : 'text-white/60 hover:text-white'}`}
                 >
                   SaaS Example
                 </button>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-[48px] overflow-hidden border border-white/10">
              <div className="p-16 lg:p-24 bg-bg-dark flex flex-col justify-center">
                 <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block">Generic Messaging</span>
                 <p className="text-3xl font-display font-medium text-white/30 leading-tight italic">
                   "{verticalData[activeVertical].from}"
                 </p>
                 <div className="mt-12 flex items-center gap-2 text-red-500/50 text-xs font-bold uppercase tracking-widest">
                    {/* Fixed: X is now imported */}
                    <X size={16} /> Invisible / Undifferentiated
                 </div>
              </div>
              <div className="p-16 lg:p-24 bg-white/5 flex flex-col justify-center relative group">
                 <div className="absolute top-8 right-8 text-primary animate-pulse">
                    <Zap size={32} fill="currentColor" />
                 </div>
                 <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block">MX Architected</span>
                 <p className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                   "{verticalData[activeVertical].to}"
                 </p>
                 <div className="mt-12 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                    <Check size={16} /> {verticalData[activeVertical].focus}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* PROCESS: HOW WE DO IT */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-40">
                 <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">Our Methodology</span>
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark leading-tight mb-8">
                   How we build your <br /><span className="text-primary italic">Positioning OS.</span>
                 </h2>
                 <p className="text-lg text-text-muted mb-10 leading-relaxed">
                   A narrative is only as strong as the data behind it. We follow a four-stage process to ensure market resonance.
                 </p>
                 <button className="flex items-center gap-2 bg-text-dark text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all">
                   Book a workshop <ArrowRight size={18} />
                 </button>
              </div>

              <div className="lg:col-span-7 space-y-8">
                 {[
                   { step: "01", title: "Market & ICP Archetyping", desc: "We interview your customers and analyze churn data to find the exact language they use to describe their pain.", icon: <Search /> },
                   { step: "02", title: "The Narrative Audit", desc: "We map your competitors' claims to find the 'white space'—the one promise they aren't making that you can own.", icon: <Layers /> },
                   { step: "03", title: "Messaging Architecture", desc: "We build the core pillars, the value propositions, and the supporting RTBs into a centralized Blueprint.", icon: <PenTool /> },
                   { step: "04", title: "Activation & Validation", desc: "We test the new messaging through small-scale ads and landing pages to confirm it lowers CAC before a full rollout.", icon: <Target /> }
                 ].map((s, idx) => (
                   <motion.div 
                    key={idx} 
                    {...fadeInUp}
                    className="group bg-bg-gray p-10 rounded-[40px] border border-transparent hover:border-primary/10 transition-all"
                   >
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                           {s.icon}
                        </div>
                        <span className="text-5xl font-display font-black text-text-dark/5">{s.step}</span>
                      </div>
                      <h4 className="text-2xl font-display font-bold text-text-dark mb-4">{s.title}</h4>
                      <p className="text-text-muted leading-relaxed">{s.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-32 bg-bg-gray overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="bg-white rounded-[64px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
              <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
                 <img src="https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover" alt="Case Study" />
                 <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="bg-white/90 p-8 rounded-full shadow-2xl">
                       {/* Fixed: Play is now imported */}
                       <Play className="text-primary fill-current" size={40} />
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                 <div className="flex gap-2 mb-8">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">Fintech Pivot</span>
                    <span className="px-3 py-1 bg-bg-gray text-text-muted text-[10px] font-bold uppercase tracking-widest rounded-full">2.5x MQLs</span>
                 </div>
                 <h3 className="text-4xl font-display font-bold text-text-dark mb-6 leading-tight">PayBridge: From "Payments" to "Trust Infrastructure".</h3>
                 <p className="text-lg text-text-muted mb-10 italic leading-relaxed">
                   "Marketing Extension didn't just change our ads; they changed how we view our own company. Their positioning audit revealed that trust, not speed, was our real product."
                 </p>
                 <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                       <img src="https://picsum.photos/seed/ceo/100/100" alt="CEO" />
                    </div>
                    <div>
                       <p className="font-bold text-text-dark">CEO, PayBridge</p>
                       <p className="text-xs text-text-muted">Series B Fintech Leader</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-bg-dark text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
         <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-10 leading-tight">
              Is your brand <br /><span className="text-primary">saying enough?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto">
              We offer a complimentary Narrative Gap Audit for Series A+ scale-ups. Find out what's missing in your current messaging.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-text-dark transition-all shadow-xl shadow-primary/20">
                 Request my audit
               </button>
               <button onClick={() => onNavigate('marketing-consulting')} className="text-white font-bold flex items-center gap-2 hover:gap-4 transition-all">
                 Explore other services <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default PositioningMessaging;
