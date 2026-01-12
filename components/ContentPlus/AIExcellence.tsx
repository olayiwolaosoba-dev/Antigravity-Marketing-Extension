import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const AIExcellence: React.FC = () => {
    return (
        <section className="py-24 bg-[#F5F5F7] overflow-hidden relative">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">AI Excellence</span>
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-text-dark mb-6 leading-tight">
                            Creative brilliance,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">supercharged by AI.</span>
                        </h2>
                        <p className="text-lg text-text-muted mb-8 leading-relaxed">
                            We don't just use AI; we build it into our workflows. This means you get assets 50% faster without sacrificing the human touch that makes your brand unique.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Custom AI models trained on your brand guidelines",
                                "Automated versioning and localization",
                                "Data-driven creative optimization"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-text-dark font-medium">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Glass Card */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[40px] blur-3xl transform rotate-6" />
                        <div className="relative bg-white rounded-[32px] p-2 shadow-2xl border border-white/50">
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200"
                                alt="AI Workflow"
                                className="rounded-[24px] w-full h-auto object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 max-w-[200px]">
                                <p className="text-xs font-bold text-text-muted mb-1">Efficiency Gain</p>
                                <p className="text-3xl font-display font-bold text-primary">+300%</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AIExcellence;
