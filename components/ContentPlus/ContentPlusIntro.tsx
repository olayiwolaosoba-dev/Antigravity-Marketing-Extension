import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const ContentPlusIntro: React.FC = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-6 block border-b border-gray-200 pb-2 inline-block">
                            A new era of creative work
                        </span>

                        <h2 className="text-5xl md:text-6xl font-display font-medium text-text-dark mb-8 leading-tight">
                            The support your creative team <span className="font-serif italic text-primary">has been asking for</span>
                        </h2>

                        <p className="text-xl text-text-muted mb-8 leading-relaxed">
                            Marketing Extension is your dedicated, on-call creative team to expand your production capacity and extend your team's creative capabilities.
                        </p>

                        <p className="text-lg text-text-dark mb-10">
                            See us as an extension of your team, freeing you to focus on your most impactful and creative work.
                        </p>

                        <button className="bg-text-dark text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary transition-colors duration-300 flex items-center gap-2">
                            Book a demo <ArrowRight size={20} />
                        </button>
                    </motion.div>

                    {/* Right: Video/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative rounded-[32px] overflow-hidden aspect-[4/3] bg-bg-dark shadow-2xl group cursor-pointer"
                    >
                        {/* Placeholder generic video/image */}
                        <img
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200"
                            alt="Creative Workflow"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                <Play size={40} className="text-white fill-white ml-2" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h3 className="text-white text-3xl font-display font-bold leading-tight">
                                Your assigned creative team. <br />
                                <span className="text-primary italic font-serif">Ready to scale.</span>
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContentPlusIntro;
