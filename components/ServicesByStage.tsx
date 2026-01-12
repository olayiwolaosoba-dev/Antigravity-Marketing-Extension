
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stages = [
  { 
    id: 'pre-launch', 
    label: 'Pre-launch', 
    title: 'Validate your offer & positioning',
    services: [
      { title: 'Offer Design & ICP Research', desc: 'Defining exactly who you sell to and why they need you now.' },
      { title: 'Positioning & Messaging', desc: 'Crafting a narrative that cuts through the noise.' },
      { title: 'Landing Page & MVP Funnel', desc: 'Building the base for your first customer acquisition.' },
      { title: 'Waitlist & Beta Campaigns', desc: 'Generating demand before the product is even live.' },
    ]
  },
  { 
    id: 'early-growth', 
    label: 'Early Growth', 
    title: 'Build your growth engine',
    services: [
      { title: 'Paid Social & Search', desc: 'Scaling Meta, LinkedIn, and Google Ads with high efficiency.' },
      { title: 'Lead Magnets & Nurture', desc: 'Turning cold traffic into warm, ready-to-buy leads.' },
      { title: 'LinkedIn Demand Gen', desc: 'Scaling organic and paid influence on B2B socials.' },
      { title: 'Analytics Stack Setup', desc: 'Implementing GA4, HubSpot, and attribution models.' },
    ]
  },
  { 
    id: 'scale', 
    label: 'Series A & Beyond', 
    title: 'Optimize & expand the engine',
    services: [
      { title: 'Advanced Attribution', desc: 'Mapping the full customer journey across all touchpoints.' },
      { title: 'High-Velocity Testing', desc: 'Running 10+ growth experiments per week to find winners.' },
      { title: 'Market Expansion Strategy', desc: 'Entering new regions or segments with tailored playbooks.' },
      { title: 'Embedded Growth Squad', desc: 'A dedicated team that owns your revenue targets.' },
    ]
  },
];

const ServicesByStage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <section className="bg-bg-dark pt-32 pb-40 rounded-t-[80px] clipped-bottom">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Growth Marketing Operating System</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white max-w-3xl">
            <span className="text-primary">Tailored support</span> from first prototype to long-term scale
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/4 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={`text-left px-6 py-4 rounded-xl font-display font-bold text-xl transition-all duration-300 whitespace-nowrap ${activeStage.id === stage.id ? 'bg-primary text-white scale-105' : 'bg-white/5 text-white/40 hover:text-white'}`}
              >
                {stage.label}
              </button>
            ))}
            <div className="hidden lg:block mt-auto pt-10">
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                Explore all services
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-display font-bold text-white mb-12">{activeStage.title}</h3>
                
                <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  {activeStage.services.map((service, idx) => (
                    <div key={idx} className="p-10 bg-bg-dark hover:bg-white/5 transition-colors group">
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-white/60 mb-8 leading-relaxed">{service.desc}</p>
                      <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                        Explore
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesByStage;
