import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Play, Check, X, ShieldCheck, ChevronRight, Zap, 
  Target, BarChart3, Users, TrendingUp, Search, Layers, 
  FileText, MessageSquare, Quote, ArrowUpRight, Minus 
} from 'lucide-react';

interface Props {
  onNavigate: (page: 'home' | 'marketing-consulting') => void;
}

const MarketingConsulting: React.FC<Props> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState(0);

  // Growth Lifecycle Data
  const stages = [
    { 
      label: 'Audit', 
      title: 'Diagnose the friction in your growth engine.', 
      desc: 'We start with a deep-dive audit of your funnel, attribution, and unit economics to find the leverage points.', 
      items: ['Attribution & Tracking Audit', 'Funnel Bottleneck Analysis', 'ICP & Persona Validation', 'Competitor Narrative Mapping'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      label: 'Architect', 
      title: 'Designing a roadmap for predictable revenue.', 
      desc: 'No generic playbooks. We architect a custom GTM strategy designed to lower CAC and accelerate pipeline velocity.', 
      items: ['Messaging & Positioning', 'Channel Mix Strategy', 'Content & Lifecycle Roadmap', 'Offer Design & Optimization'],
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200'
    },
    { 
      label: 'Amplify', 
      title: 'Scaling growth with total execution discipline.', 
      desc: 'Our embedded pod launches, tests, and optimizes daily to drive high-intent leads and revenue growth.', 
      items: ['Performance Media Scaling', 'Retention & Nurture Flows', 'Growth Experimentation', 'Real-time ROI Reporting'],
      img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  // Case Studies Data
  const cases = [
    {
      client: "Fintech Leader (West Africa)",
      outcome: "+120% MQL Increase",
      tags: ["Audit", "GTM Strategy"],
      image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "HealthTech SaaS",
      outcome: "35% CAC Reduction",
      tags: ["Lifecycle", "Paid Media"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "Logistics Scale-up",
      outcome: "3x Pipeline Velocity",
      tags: ["ABM", "Sales Enablement"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      client: "EdTech Platform",
      outcome: "50k+ User Waitlist",
      tags: ["Launch", "Viral Loops"],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  };

  return (
    <div className="bg-bg-light">
      {/* SECTION 1: HERO */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-bg-dark rounded-b-[80px] clipped-bottom">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Strategic Growth Partner</span>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[1.05] mb-8">
                Marketing <span className="text-primary italic">Consulting</span> for scale-ups.
              </h1>
              <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
                We plug into your team as a dedicated growth engine to plan, launch, and drive revenue-backed campaigns.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all duration-300 shadow-2xl shadow-primary/30">
                  Request a growth audit
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square bg-white/5 rounded-[40px] border border-white/10 overflow-hidden p-4 group">
                 <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
                    alt="Growth Dashboard" 
                    className="w-full h-full object-cover rounded-[32px] opacity-40 group-hover:scale-105 transition-transform duration-[4s]"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-24 h-24 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-primary transition-colors"
                    >
                      <Play size={32} fill="white" />
                    </motion.div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROOF BAND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: '35%', label: 'Avg. Reduction in CAC' },
              { val: '$500M+', label: 'Pipeline Influenced' },
              { val: '120+', label: 'Scale-up Launches' },
              { val: '95%', label: 'Client Retention' }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left border-l-2 border-primary/10 pl-6"
              >
                <p className="text-4xl lg:text-6xl font-display font-black text-text-dark tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE GROWTH LIFECYCLE (INTERACTIVE STICKY) */}
      <section className="py-32 bg-bg-gray overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[350px_1fr] gap-20">
            {/* Left Tabs */}
            <div className="lg:sticky lg:top-40 h-fit space-y-12">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Process</span>
                <h2 className="text-4xl font-display font-bold text-text-dark leading-tight">Growth as an <br />Operating System.</h2>
              </div>
              <div className="flex flex-col gap-3">
                {stages.map((s, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveStage(i)}
                    className={`group text-left py-6 px-8 rounded-2xl font-display font-bold text-2xl transition-all duration-500 flex items-center justify-between border ${
                      activeStage === i 
                      ? 'bg-bg-dark text-white border-bg-dark translate-x-4 shadow-2xl' 
                      : 'bg-white/50 text-text-muted border-transparent hover:bg-white hover:text-text-dark'
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className={`text-xs opacity-50 ${activeStage === i ? 'text-primary' : ''}`}>0{i+1}</span>
                      {s.label}
                    </span>
                    <ChevronRight size={20} className={`transition-transform duration-500 ${activeStage === i ? 'rotate-90 text-primary' : 'opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-12"
                >
                  <div className="aspect-video rounded-[48px] overflow-hidden shadow-2xl relative border-[12px] border-white group">
                    <img src={stages[activeStage].img} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt={stages[activeStage].label} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                       <h3 className="text-white text-3xl md:text-5xl font-display font-bold leading-tight max-w-xl">{stages[activeStage].title}</h3>
                    </div>
                  </div>

                  <div className="bg-white p-12 lg:p-20 rounded-[56px] shadow-sm border border-gray-100">
                    <p className="text-xl text-text-muted mb-12 leading-relaxed max-w-2xl">{stages[activeStage].desc}</p>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                      {stages[activeStage].items.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            <Check size={14} />
                          </div>
                          <span className="text-lg font-bold text-text-dark leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CASE STUDIES (Outcome Focused - 4 Tiles) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <motion.div {...fadeInUp} className="max-w-2xl">
               <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Proof of Performance</span>
               <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark leading-tight">Engines that <span className="text-primary">move numbers.</span></h2>
            </motion.div>
            <button className="text-text-dark font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View all success stories <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: i * 0.2 }}
                className="group relative h-[500px] rounded-[56px] overflow-hidden cursor-pointer shadow-lg"
              >
                <img src={c.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={c.client} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                   <div className="flex gap-2 mb-6">
                      {c.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">{tag}</span>
                      ))}
                   </div>
                   <p className="text-white/60 font-bold text-sm mb-2">{c.client}</p>
                   <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">{c.outcome}</h4>
                   <div className="flex items-center gap-3 text-primary font-bold group-hover:gap-5 transition-all">
                     Read Case Study <ArrowUpRight size={20} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE DIFFERENTIATOR (Comparison Table) */}
      <section className="py-32 bg-bg-dark rounded-t-[80px] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight mb-8">
              Hiring or outsourcing? <br />
              <span className="text-white/30">Neither works well.</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
              Traditional models force you to choose between speed, quality, and cost. We built an engine that delivers all three.
            </p>
          </div>

          <div className="overflow-x-auto pb-12">
            <div className="min-w-[900px] relative">
              {/* Highlight Column Background */}
              <div className="absolute top-0 bottom-0 left-[28%] w-[26%] bg-white/5 border border-primary/40 rounded-[32px] z-0 hidden md:block shadow-2xl shadow-primary/10"></div>

              {/* Table Header */}
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] items-end mb-8 relative z-10">
                <div className="text-left text-white/40 font-bold text-xs uppercase tracking-widest px-6 pb-4">Comparison</div>
                <div className="text-center px-6 pb-4">
                  <div className="inline-block">
                    <span className="font-display font-bold text-2xl text-white block mb-1">Marketing Extension</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Top Rated</span>
                  </div>
                </div>
                <div className="text-center text-white/50 font-bold text-lg px-6 pb-4">In-House Team</div>
                <div className="text-center text-white/50 font-bold text-lg px-6 pb-4">Traditional Agency</div>
              </div>

              {/* Table Body */}
              <div className="space-y-4 relative z-10">
                {[
                  { label: "Speed to Launch", mx: true, house: false, agency: false },
                  { label: "Strategic Depth", mx: true, house: false, agency: true },
                  { label: "Cost Efficiency", mx: true, house: false, agency: false },
                  { label: "Scalability", mx: true, house: false, agency: true },
                  { label: "Tech Stack Included", mx: true, house: false, agency: false },
                  { label: "Revenue Accountability", mx: true, house: true, agency: false }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-[1fr_1fr_1fr_1fr] items-center py-6 border-b border-white/5 hover:bg-white/5 transition-colors rounded-xl">
                    <div className="px-6 text-white font-bold text-lg">{row.label}</div>
                    
                    {/* MX Column */}
                    <div className="flex justify-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/30">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    </div>

                    {/* House Column */}
                    <div className="flex justify-center">
                      {row.house ? (
                        <div className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center text-white/60">
                          <Check size={20} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center text-white/20">
                          <X size={24} />
                        </div>
                      )}
                    </div>

                    {/* Agency Column */}
                    <div className="flex justify-center">
                      {row.agency ? (
                        <div className="w-10 h-10 border-2 border-white/20 rounded-full flex items-center justify-center text-white/60">
                          <Check size={20} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center text-white/20">
                          <X size={24} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLIENT FEEDBACK */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-20">
             <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Testimonials</span>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark">Confidence from <span className="italic">operator to operator.</span></h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             {[
               { quote: "MX didn't just run ads; they built our entire demand engine. They are now a permanent extension of our leadership.", author: "Founder, Fintech SaaS", context: "B2B / Nigeria" },
               { quote: "The level of strategic clarity provided in the first 30 days was more valuable than our previous agency's entire year.", author: "Head of Growth, EduTech", context: "Series A / Kenya" },
               { quote: "Finally, a team that thinks in CAC and LTV instead of clicks and impressions. A rare find in this market.", author: "CMO, E-commerce", context: "Global / Pan-Africa" }
             ].map((t, i) => (
               <motion.div key={i} {...fadeInUp} className="bg-bg-gray p-12 rounded-[48px] relative group hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100">
                  <Quote size={40} className="text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" />
                  <p className="text-xl font-medium text-text-dark leading-relaxed mb-10 italic">"{t.quote}"</p>
                  <div>
                    <p className="font-display font-bold text-text-dark">{t.author}</p>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-widest mt-1">{t.context}</p>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 7: RESOURCES */}
      <section className="py-32 bg-bg-gray">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-text-dark mb-4">Growth <span className="text-primary">Playbooks.</span></h2>
                <p className="text-lg text-text-muted max-w-xl">Actionable frameworks and field notes derived from our work with high-velocity scale-ups.</p>
              </div>
              <button className="bg-text-dark text-white px-8 py-3 rounded-full font-bold hover:bg-primary transition-all shadow-xl">Explore the Library</button>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[
               { 
                 title: "The 2025 Marketing OS Framework", 
                 type: "Whitepaper", 
                 context: "A 40-page blueprint on structuring marketing teams for Series B scale.",
                 image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
               },
               { 
                 title: "Scaling Beyond Series A in Africa", 
                 type: "Case Report", 
                 context: "Analysis of 50+ startups and the growth levers that actually worked.",
                 image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=800" 
               },
               { 
                 title: "Building an Embedded Pod", 
                 type: "Field Notes", 
                 context: "How to integrate fractional experts without breaking culture.",
                 image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
               },
               { 
                 title: "The Attribution Myth", 
                 type: "Opinion", 
                 context: "Why obsessing over perfect tracking is killing your growth velocity.",
                 image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
               },
               { 
                 title: "Launch Day Checklist", 
                 type: "Resource", 
                 context: "The exact 82-point checklist we use for every major campaign launch.",
                 image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
               },
               { 
                 title: "Creative that Converts", 
                 type: "Guide", 
                 context: "Deconstructing high-performing ad creatives across B2B and B2C.",
                 image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
               }
             ].map((r, i) => (
               <motion.div 
                 key={i}
                 {...fadeInUp}
                 transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                 className="group relative h-[450px] rounded-[32px] overflow-hidden cursor-pointer shadow-lg"
               >
                  <img src={r.image} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-3 bg-white/10 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">{r.type}</p>
                      
                      {/* Liquid Glass Title Container */}
                      <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl">
                        <h4 className="text-2xl font-display font-bold text-white leading-tight">{r.title}</h4>
                      </div>
                    </div>

                    {/* Hover Reveal Context */}
                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <p className="text-white/80 text-sm mt-4 mb-6 leading-relaxed">{r.context}</p>
                      <button className="w-full bg-white text-text-dark py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors">
                        Read Article <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-primary text-white text-center rounded-t-[80px] shadow-[0_-30px_100px_-20px_rgba(255,107,61,0.4)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-bold mb-12 leading-tight"
          >
            Stop guessing. <br />Start <span className="text-bg-dark italic">growing.</span>
          </motion.h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Request a growth audit. We’ll show you exactly where the friction is and how an embedded pod will clear the path.
          </p>
          <button className="bg-bg-dark text-white px-16 py-6 rounded-full font-bold text-2xl hover:bg-white hover:text-text-dark transition-all transform hover:scale-105 shadow-2xl">
            Book your discovery call
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60 text-[10px] font-bold uppercase tracking-widest">
            <span>Free strategy audit</span>
            <span>Zero obligation</span>
            <span>Direct access to leadership</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingConsulting;