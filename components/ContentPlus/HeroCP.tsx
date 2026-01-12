import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroCP: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-bg-dark overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-float" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary font-bold text-sm tracking-widest uppercase mb-8 backdrop-blur-sm">
                        Content Plus Service
                    </span>

                    <h1 className="font-display font-medium text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8">
                        Your creative team's <br />
                        <span className="text-primary italic font-serif">creative team™</span>
                    </h1>

                    <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                        Scale your in-house capabilities with top global talent powered by industry-leading AI workflows. Fast, affordable, and on-brand.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-white hover:text-text-dark transition-all duration-300 shadow-[0_0_20px_rgba(255,107,61,0.4)] hover:shadow-none flex items-center gap-2 group">
                            Book a strategy call
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                            View our work
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroCP;
