
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-bg-light py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Meet our Team</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            The team behind your <span className="text-primary">growth extensions</span>
          </h2>
          <p className="mt-8 text-xl text-text-muted max-w-3xl leading-relaxed">
            Marketing Extension is a distributed team of strategists, media buyers, content marketers, and growth operators across seven countries. We plug into your team, own the outcomes, and give you the speed of an in-house squad without the hiring overhead.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden bg-bg-gray relative group cursor-pointer"
            >
              <img src={`https://picsum.photos/seed/team-${i}/400/600`} alt="Team member" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0" />
            </motion.div>
          ))}
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 12 * 0.05 }}
             className="aspect-[3/4] rounded-2xl bg-primary p-8 flex flex-col justify-between group cursor-pointer hover:bg-text-dark transition-colors duration-300"
          >
             <h4 className="text-2xl font-display font-bold text-white">115+ Team Members</h4>
             <button className="flex items-center gap-2 text-white font-bold text-sm">
               Join us <ArrowRight size={16} />
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
