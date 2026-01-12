import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const WorkVideoTileMTS: React.FC = () => {
    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[40px] overflow-hidden aspect-video shadow-2xl group cursor-pointer"
                >
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
                        alt="Data Dashboard"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <Play size={40} className="text-white fill-white ml-2" />
                        </div>
                    </div>

                    <div className="absolute bottom-12 left-12">
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">
                            See how we automate <br />
                            <span className="font-serif italic text-primary">enterprise workflows.</span>
                        </h3>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkVideoTileMTS;
