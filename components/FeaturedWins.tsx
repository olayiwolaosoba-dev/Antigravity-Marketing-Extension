
import React from 'react';
import { motion } from 'framer-motion';

interface WinCardProps {
  name: string;
  desc: string;
  metric: string;
  industry: string;
  region: string;
  delay: number;
}

const WinCard: React.FC<WinCardProps> = ({ name, desc, metric, industry, region, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group relative p-10 border-r border-b border-gray-100 flex flex-col h-[400px] overflow-hidden"
  >
    {/* Hover BG */}
    <div className="absolute inset-0 bg-primary translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="w-12 h-12 bg-bg-gray rounded-lg mb-8 group-hover:bg-white/20 transition-colors" />
      
      <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors">{name}</h3>
      <p className="text-text-muted group-hover:text-white/80 transition-colors mb-6">{desc}</p>
      
      <div className="mt-auto">
        <div className="text-4xl font-display font-bold text-text-dark group-hover:text-white transition-colors mb-6">
          {metric}
        </div>
        
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-bg-gray text-[10px] font-bold uppercase tracking-tight text-text-muted group-hover:bg-white/20 group-hover:text-white">
            {industry}
          </span>
          <span className="px-3 py-1 rounded-full bg-bg-gray text-[10px] font-bold uppercase tracking-tight text-text-muted group-hover:bg-white/20 group-hover:text-white flex items-center gap-1">
            🌍 {region}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);

const FeaturedWins: React.FC = () => {
  const wins = [
    { name: 'PayBridge', desc: 'Series B Fintech scaling cross-border liquidity in Africa.', metric: '+120% MQLs', industry: 'Fintech', region: 'Nigeria', delay: 0.1 },
    { name: 'Lumify', desc: 'Health-tech platform optimizing patient onboarding.', metric: 'CAC reduced 35%', industry: 'Health', region: 'Kenya', delay: 0.2 },
    { name: 'OpenStream', desc: 'SaaS platform for remote engineering collaboration.', metric: '3x Pipeline', industry: 'SaaS', region: 'Global', delay: 0.3 },
    { name: 'KlickEx', desc: 'DTC brand launching new regional product lines.', metric: '€35M+ Influenced', industry: 'Ecommerce', region: 'Europe', delay: 0.4 },
    { name: 'SabiTrack', desc: 'Project assurance tool for high-growth ventures.', metric: 'Top 5 Transport Tech', industry: 'Logistics', region: 'UK', delay: 0.1 },
    { name: 'Quidax', desc: 'Repositioning crypto as a pop-culture movement.', metric: '6-Figure Signups', industry: 'Crypto', region: 'West Africa', delay: 0.2 },
    { name: 'Zone', desc: 'Regulated blockchain payment infrastructure network.', metric: '500+ MFIs Admitted', industry: 'Blockchain', region: 'Global', delay: 0.3 },
    { name: 'Nomupay', desc: 'Unified payments access for unified Asia markets.', metric: '€35.9M Seed Round', industry: 'Fintech', region: 'Asia', delay: 0.4 },
  ];

  return (
    <section className="bg-bg-light pt-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Growth Marketing Case Studies</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Our <span className="text-primary">featured</span> client wins
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
        {wins.map((win, idx) => (
          <WinCard key={win.name} {...win} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWins;
