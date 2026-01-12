
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { IndustryExpertise } from '../types';

const industries: IndustryExpertise[] = [
  {
    id: 'saas',
    name: 'B2B SaaS',
    title: 'Demand engines for product-led growth',
    challenges: ['Low product activation rates', 'ICP uncertainty and poor targeting', 'Fragmented marketing funnels'],
    solutions: ['PQL (Product Qualified Lead) frameworks', 'Multi-channel demand gen playbooks', 'Revenue-backed attribution reporting'],
    video: 'https://picsum.photos/seed/saas-ind/800/600'
  },
  {
    id: 'fintech',
    name: 'Fintech',
    title: 'Secure products for the modern economy',
    challenges: ['Trust barriers in digital finance', 'Complex regulatory messaging', 'High user acquisition costs'],
    solutions: ['Trust-focused content ecosystems', 'Frictionless onboarding flows', 'Compliance-ready creative execution'],
    video: 'https://picsum.photos/seed/fintech-ind/800/600'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & DTC',
    title: 'Performance engines for retail scaling',
    challenges: ['Falling ROAS on social channels', 'Poor retention and LTV', 'Unoptimized purchase funnels'],
    solutions: ['Retention-first lifecycle marketing', 'High-ROAS paid media management', 'Conversion rate optimization (CRO)'],
    video: 'https://picsum.photos/seed/retail-ind/800/600'
  }
];

const IndustriesTabs: React.FC = () => {
  const [active, setActive] = useState(industries[0]);

  return (
    <section className="bg-white py-32 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Our Areas of Expertise</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Specialized growth <span className="text-primary">expertise</span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-16 pb-4 border-b border-gray-100">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${active.id === ind.id ? 'bg-text-dark text-white' : 'bg-bg-gray text-text-muted hover:bg-bg-gray/80'}`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-bg-gray relative group">
              <img src={active.video} alt={active.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-10">
                <p className="text-white font-display text-2xl font-bold">{active.name} Vertical</p>
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-display font-bold mb-12 text-text-dark">{active.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="flex items-center gap-2 text-text-muted font-bold text-xs uppercase mb-6 tracking-widest">
                    <AlertCircle size={14} /> Challenges
                  </div>
                  <ul className="space-y-4">
                    {active.challenges.map((c, i) => (
                      <li key={i} className="text-text-dark font-semibold leading-relaxed pl-4 border-l-2 border-primary/20">{c}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase mb-6 tracking-widest">
                    <CheckCircle2 size={14} /> How we solve them
                  </div>
                  <ul className="space-y-4">
                    {active.solutions.map((s, i) => (
                      <li key={i} className="text-text-dark font-semibold leading-relaxed pl-4 border-l-2 border-primary">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-text-dark transition-all duration-300">
                Explore {active.name} services
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustriesTabs;
