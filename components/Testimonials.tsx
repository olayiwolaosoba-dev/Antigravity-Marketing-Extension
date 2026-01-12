
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div>
            <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Client Feedback</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              <span className="text-primary">5.0</span> average score on <br />G2, Clutch & Trustpilot
            </h2>
          </div>
          <div className="flex gap-4">
             <div className="p-4 bg-bg-gray rounded-xl flex items-center gap-2">
               <span className="text-2xl font-bold font-display">Clutch</span>
               <div className="flex text-primary">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
               </div>
             </div>
             <div className="p-4 bg-bg-gray rounded-xl flex items-center gap-2">
               <span className="text-2xl font-bold font-display">G2</span>
               <div className="flex text-primary">
                 {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
               </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-bg-gray p-10 rounded-[32px] flex flex-col group cursor-pointer overflow-hidden relative">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full overflow-hidden">
                 <img src="https://picsum.photos/seed/alex/100/100" alt="Avatar" />
               </div>
               <div>
                 <p className="font-bold text-text-dark">Alex Friedman</p>
                 <p className="text-xs text-text-muted">CEO at Open Path</p>
               </div>
             </div>
             <p className="text-xl font-display font-medium text-text-dark leading-relaxed mb-10 italic">
               "The team is extremely communicative and their work is exceptional. I've never worked with a squad so talented while also being competitively priced."
             </p>
             <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors pointer-events-none" />
          </div>

          <div className="bg-bg-gray p-10 rounded-[32px] flex flex-col group cursor-pointer relative overflow-hidden">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full overflow-hidden">
                 <img src="https://picsum.photos/seed/craig/100/100" alt="Avatar" />
               </div>
               <div>
                 <p className="font-bold text-text-dark">Craig Tortolani</p>
                 <p className="text-xs text-text-muted">CPO at Dekryption</p>
               </div>
             </div>
             <div className="relative rounded-2xl overflow-hidden aspect-video bg-bg-dark mt-auto">
                <img src="https://picsum.photos/seed/vtest/400/300" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white" size={40} fill="currentColor" />
                </div>
             </div>
          </div>

          <div className="bg-bg-gray p-10 rounded-[32px] flex flex-col group cursor-pointer overflow-hidden relative">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full overflow-hidden">
                 <img src="https://picsum.photos/seed/kevin/100/100" alt="Avatar" />
               </div>
               <div>
                 <p className="font-bold text-text-dark">Kevin Alvarez</p>
                 <p className="text-xs text-text-muted">Founder at Predictive</p>
               </div>
             </div>
             <p className="text-xl font-display font-medium text-text-dark leading-relaxed mb-10 italic">
               "Their ability to translate rough concepts into high-fidelity demand engines was very impressive. Simple elegance meets high performance."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
