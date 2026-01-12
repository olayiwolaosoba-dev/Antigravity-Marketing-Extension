import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Check, X, Layers, Zap, Search, PieChart, ShieldCheck, ChevronRight } from 'lucide-react';

interface TechPageProps {
  onNavigate: (page: 'home' | 'technology') => void;
}

const OurTechnology: React.FC<TechPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const integrations = [
    "HubSpot", "Salesforce", "Google Analytics", "Segment", "Slack", "Monday.com", "Jira", "Asana", "Webflow"
  ];

  return (
    <div className="bg-bg-light">
      {/* SECTION 1 – HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-gray rounded-b-[80px]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">Our Technology</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-text-dark leading-[1.1] mb-8">
                The operating system for <span className="text-primary italic">elite marketing teams.</span>
              </h1>
              <p className="text-xl text-text-muted mb-10 max-w-lg leading-relaxed">
                Marketing Extension isn't just a service; it's a proprietary platform that unites strategy, assets, and execution into one high-velocity engine.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-text-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary transition-all duration-300 shadow-xl">
                  Book a strategy audit
                  <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto text-text-dark font-bold text-lg flex items-center justify-center gap-2 group">
                  Watch product tour
                  <Play size={20} className="fill-current group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden p-4 border border-gray-100">
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=1200" 
                    alt="MX OS Dashboard" 
                    className="w-full h-full object-cover rounded-[32px] opacity-90"
                 />
                 <div className="absolute top-10 right-10 bg-white/90 backdrop-blur shadow-xl p-4 rounded-2xl border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white"><Check size={16} /></div>
                       <p className="text-xs font-bold text-text-dark">Campaign Validated</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – INTEGRATIONS */}
      <section className="py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-text-muted text-[10px] font-bold uppercase tracking-widest mb-4">PLUG & PLAY</p>
            <h2 className="text-3xl font-display font-bold text-text-dark">Built to work with your favorite tools</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {integrations.map(logo => (
              <span key={logo} className="font-display font-black text-xl lg:text-2xl">{logo.toUpperCase()}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 – WORKFLOWS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative aspect-video rounded-[32px] overflow-hidden bg-bg-gray shadow-2xl border border-gray-100">
                 <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" alt="Old vs New" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">A better way to work</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark leading-tight mb-8">
                Marketing workflows are broken. <br />We built a better one.
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Traditional agencies rely on fragmented emails, scattered spreadsheets, and "vibes". Marketing Extension centralizes the entire marketing function into a single, disciplined engine.
              </p>
              <ul className="space-y-6 mb-10">
                {[
                  "Eliminate scattered feedback loops",
                  "Unified asset and version control",
                  "Real-time budget and performance visibility",
                  "Strategic alignment from brief to ship"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 text-text-dark font-bold">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary"><Check size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('home')} className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-text-dark transition-all shadow-lg shadow-primary/20">
                Learn about our team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – FEATURE DEEP DIVES */}
      <section className="py-32 bg-bg-dark rounded-t-[80px]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-32">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Your process, supercharged</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white max-w-3xl mx-auto leading-tight">
              One platform. <br /><span className="text-primary">Total marketing control.</span>
            </h2>
          </div>

          <div className="space-y-40">
            {/* Feature 1 */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">01. Teamwork without friction</span>
                <h3 className="text-3xl font-display font-bold text-white mb-6">Collaboration that feels native</h3>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  Stop chasing updates in Slack threads. Our platform brings internal stakeholders and MX specialists into a single unified workspace with integrated approvals and context-rich commenting.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                  <Layers className="text-primary" />
                  <p className="text-white font-bold">90% faster approval cycles across all pillars</p>
                </div>
              </motion.div>
              <div className="rounded-[40px] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 p-4">
                <img src="https://images.unsplash.com/photo-1522071823991-b5ae7264040e?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[32px] opacity-80" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 rounded-[40px] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 p-4">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[32px] opacity-80" />
              </div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">02. AI-Powered Briefing</span>
                <h3 className="text-3xl font-display font-bold text-white mb-6">Briefing that writes itself</h3>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  Our system uses proprietary AI to help you structure briefs that work. It suggests missing context, checks for brand consistency, and ensures your MX pod starts with 100% clarity.
                </p>
                <div className="flex gap-4">
                  <Zap className="text-primary shrink-0" />
                  <p className="text-white/60 text-sm italic">"The AI briefing tool cut our project kickoff time by half while improving creative output relevance." — Head of Marketing, PayBridge</p>
                </div>
              </motion.div>
            </div>

            {/* Feature 3 */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-6 block">03. Budget Transparency</span>
                <h3 className="text-3xl font-display font-bold text-white mb-6">Budgets and teams in sync</h3>
                <p className="text-lg text-white/60 leading-relaxed mb-8">
                  Get a real-time, high-definition view into your marketing spend. Track budget utilization across Consulting, Content+, and MarTech Studio without ever opening a spreadsheet.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Real-time tracking", "Burn-rate forecasts", "Role-based access"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold text-white">{tag}</span>
                  ))}
                </div>
              </motion.div>
              <div className="rounded-[40px] overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 p-4">
                <img src="https://images.unsplash.com/photo-1551288049-bbda38a10ad1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[32px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 – COMPARISON */}
      <section className="py-32 bg-bg-gray overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">OUR PLATFORM</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark leading-tight">Built for teams — not just tasks</h2>
          </div>

          <div className="bg-white rounded-[48px] shadow-xl overflow-hidden grid md:grid-cols-2 border border-gray-100">
            {/* MX Column */}
            <div className="p-12 lg:p-20 bg-primary/5 border-r border-gray-100">
               <div className="w-12 h-12 bg-primary rounded-xl mb-8 flex items-center justify-center text-white"><ShieldCheck size={24} /></div>
               <h4 className="text-2xl font-display font-bold text-text-dark mb-10">Marketing Extension Engine</h4>
               <ul className="space-y-6">
                 {[
                   "Integrated strategy + creative + tech",
                   "AI-augmented briefing & tagging",
                   "Real-time visibility into ROI and spend",
                   "Dedicated embedded specialist pod",
                   "Enterprise-grade security and permissions"
                 ].map(item => (
                   <li key={item} className="flex items-start gap-4 font-semibold text-text-dark">
                     <Check size={20} className="text-primary shrink-0 mt-1" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Others Column */}
            <div className="p-12 lg:p-20 bg-white opacity-80">
               <div className="w-12 h-12 bg-gray-200 rounded-xl mb-8 flex items-center justify-center text-text-muted"><X size={24} /></div>
               <h4 className="text-2xl font-display font-bold text-text-muted mb-10">Generic Tools & Freelancers</h4>
               <ul className="space-y-6">
                 {[
                   "Fragmented communication (Email/Slack)",
                   "Manual coordination and tracking",
                   "Hidden fees and opaque billing",
                   "Inconsistent quality and bandwidth",
                   "No unified data layer or asset hub"
                 ].map(item => (
                   <li key={item} className="flex items-start gap-4 font-medium text-text-muted line-through decoration-1">
                     <X size={20} className="text-gray-300 shrink-0 mt-1" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – FAQ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-6 leading-tight">Frequently asked <span className="text-primary italic">questions</span></h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What is the Marketing Extension OS?", a: "It is our proprietary technology hub where we manage all client engagements. It acts as a bridge between your internal tools and our embedded pods, housing your strategy documents, content assets, and performance dashboards in one secure location." },
              { q: "Does this replace my existing tools like HubSpot or Jira?", a: "Not at all. Our platform is designed to plug into your favorite tools via robust integrations. We pull data and tasks into a single view for alignment, ensuring your internal stack remains the source of truth." },
              { q: "How do you ensure data security?", a: "We employ enterprise-grade security protocols, including role-based access control and encrypted data layers. Your strategy and assets are isolated and protected under strict compliance standards." },
              { q: "Is the technology included in the subscription fee?", a: "Yes. Access to our operating system and platform is standard for all Marketing Extension partners, regardless of the engagement model chosen." }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full py-8 flex items-center justify-between text-left hover:text-primary transition-colors"
                >
                  <span className="text-xl font-display font-bold">{faq.q}</span>
                  <ChevronRight size={24} className={`transform transition-transform ${activeFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-lg text-text-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA TEASER */}
      <section className="py-32 bg-bg-dark text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Ready to see the <br /><span className="text-primary italic">future of marketing</span>?</h2>
          <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-text-dark transition-all shadow-xl shadow-primary/20">
            Schedule a platform demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurTechnology;