
import React from 'react';
import { motion } from 'framer-motion';

const Awards: React.FC = () => {
  const items = [
    { title: 'Top B2B Agency 2025', provider: 'Clutch', desc: 'Ranked #1 for growth marketing in high-growth segments.' },
    { title: 'Meta Business Partner', provider: 'Meta', desc: 'Certified expertise in scaling high-spend paid social.' },
    { title: 'Google Partner', provider: 'Google', desc: 'Premium badge for search efficiency and performance.' },
    { title: 'Solutions Partner', provider: 'HubSpot', desc: 'Certified in CRM migration and lifecycle automation.' },
    { title: 'Site of the Day', provider: 'Awwwards', desc: 'Recognized for UX and conversion-focused design.' },
  ];

  return (
    <section className="bg-white py-32 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Recognition</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Wins that keep <span className="text-primary">raising the bar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bg-gray border border-bg-gray">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: '#F9FAFB' }}
              className="bg-white p-12 flex flex-col justify-between"
            >
              <div>
                <div className="h-10 w-24 bg-bg-gray rounded-md mb-8" />
                <h4 className="text-xl font-display font-bold text-text-dark mb-4">{item.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
              <button className="mt-10 text-xs font-bold uppercase tracking-widest text-text-muted hover:text-primary transition-colors text-left">
                View on {item.provider} →
              </button>
            </motion.div>
          ))}
          <div className="bg-bg-gray p-12 flex flex-col justify-center items-center text-center rounded-br-[32px]">
             <h4 className="text-4xl font-display font-bold text-text-dark mb-2">32+</h4>
             <p className="text-text-muted font-bold text-sm mb-6 uppercase tracking-widest">Other Awards</p>
             <button className="bg-text-dark text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-all">
               Explore all
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
