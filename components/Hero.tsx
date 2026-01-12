
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-bg-dark pt-32 pb-20 overflow-hidden clipped-bottom">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 mb-8 bg-white/5">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Growth Marketing Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-8">
              Plug-in growth marketing for teams that <span className="text-primary italic">need results now.</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              We operate as your growth marketing extension — so your pipeline never runs on empty. No fluff, just scalable performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all duration-300">
                Book a strategy call
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                View case studies
              </button>
            </div>

            {/* Metrics Desktop (Staggered Grid) */}
            <div className="mt-20 hidden lg:grid grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 group">
                <h4 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">95%</h4>
                <p className="text-white/60 text-sm">client retention rate across all managed accounts</p>
              </div>
              <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 group">
                <h4 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">+40%</h4>
                <p className="text-white/60 text-sm">avg. increase in qualified pipeline in first 6 months</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sticky Media & Logos */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-bg-gray group"
            >
              <img 
                src="https://picsum.photos/seed/marketing/800/600" 
                alt="Marketing Dashboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent flex flex-col justify-end p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>

            {/* Partner Logos */}
            <div className="mt-10">
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-6">Designing products for startups backed by</p>
              <div className="flex flex-wrap items-center gap-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="text-white font-display text-xl font-bold">Techstars</div>
                <div className="text-white font-display text-xl font-bold">Y Combinator</div>
                <div className="text-white font-display text-xl font-bold">Swiss Association</div>
                <div className="text-white text-xs font-bold">AND MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
