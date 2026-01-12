import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const WorldClassTalent: React.FC = () => {
    return (
        <section className="py-24 bg-bg-gray">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 block">Work with the best</span>
                        <h2 className="text-5xl md:text-7xl font-display font-medium text-text-dark mb-8 leading-[0.9]">
                            <span className="font-serif italic">World-class talent</span> <br />
                            with no borders
                        </h2>

                        <p className="text-xl text-text-muted mb-8 leading-relaxed">
                            Work with top global creative talent – elite designers, project managers, animators, copywriters, AI technologists and more, recruited from the best brands and agencies.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Top 1% of global creative talent",
                                "Dedicated project manager for every account",
                                "Timezone-aligned workflows"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary" size={24} />
                                    <span className="text-lg font-medium text-text-dark">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-text-dark text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-primary transition-colors duration-300">
                            Book a demo <ArrowRight size={20} />
                        </button>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] rounded-[32px] overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                            alt="World Class Creative Talent"
                            className="w-full h-full object-cover"
                        />

                        {/* Floating Card */}
                        <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-text-dark">+142 others</span>
                            </div>
                            <p className="text-sm text-text-muted">Currently active on projects across 12 timezones.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WorldClassTalent;
