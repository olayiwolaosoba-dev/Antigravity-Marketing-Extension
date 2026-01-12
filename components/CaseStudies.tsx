
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: '1',
    title: 'Pay Bridge – Scaling Africa\'s Payment Infrastructure',
    industry: 'Fintech',
    location: 'Nigeria',
    tags: ['Strategy', 'Demand Gen', 'Growth Ops'],
    techStack: 'HubSpot, Meta Ads, Segment',
    timeline: '12 months, ongoing',
    image: 'https://picsum.photos/seed/paybridge/1200/800',
    results: ['2.5x increase in MQLs', '+40% merchant activation', 'Series B demand engine built']
  },
  {
    id: '2',
    title: 'Lumify Healthcare – Redesigning Patient Growth',
    industry: 'Healthtech',
    location: 'Global',
    tags: ['UX Strategy', 'CRO', 'Lifecycle Marketing'],
    techStack: 'Webflow, Customer.io, Google Ads',
    timeline: '6 months',
    image: 'https://picsum.photos/seed/lumify/1200/800',
    results: ['CAC reduced by 35%', '15% increase in trial-to-paid', 'Raised $15M within 3 months']
  },
  {
    id: '3',
    title: 'EduSpark – Launching the Future of Learning',
    industry: 'Edtech',
    location: 'Kenya',
    tags: ['Launch Plan', 'Content Strategy', 'Social Ads'],
    techStack: 'ActiveCampaign, Webflow, LinkedIn',
    timeline: '4 months',
    image: 'https://picsum.photos/seed/eduspark/1200/800',
    results: ['50k+ waitlist signups', '80% cost per lead reduction', 'Awwwards Site of the Day']
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="bg-bg-light pt-32 pb-40">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Success Stories</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Discover how we’re driving <span className="text-primary">measurable</span> growth outcomes
          </h2>
        </div>

        <div className="space-y-32">
          {cases.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className={`order-2 ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative aspect-video rounded-[32px] overflow-hidden group shadow-2xl">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              </div>

              <div className={`order-1 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex gap-2 mb-6">
                  {cs.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-text-muted uppercase tracking-wider">#{tag}</span>
                  ))}
                </div>
                
                <h3 className="text-4xl font-display font-bold mb-6 text-text-dark">{cs.title}</h3>
                
                <div className="flex gap-4 mb-10">
                   <div className="bg-bg-gray px-4 py-2 rounded-lg text-xs font-bold uppercase flex items-center gap-2">
                     <Globe size={14} className="text-primary" /> {cs.location}
                   </div>
                   <div className="bg-bg-gray px-4 py-2 rounded-lg text-xs font-bold uppercase">{cs.industry}</div>
                </div>

                <div className="grid grid-cols-2 gap-10 mb-12">
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Channels & Stack</p>
                    <p className="text-lg font-semibold border-t border-gray-100 pt-4">{cs.techStack}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Timeline</p>
                    <p className="text-lg font-semibold border-t border-gray-100 pt-4">{cs.timeline}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Outcome Results</p>
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    {cs.results.map((r, i) => (
                      <p key={i} className="text-lg font-display font-bold flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {r}
                      </p>
                    ))}
                  </div>
                </div>

                <button className="mt-12 w-full lg:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-text-dark transition-all duration-300">
                  Explore full case
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
