import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Network } from 'lucide-react';

const BuildingWithAI: React.FC = () => {
    return (
        <section className="py-24 bg-bg-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-mono text-sm mb-8">
                            <Sparkles size={14} />
                            <span>AI-Native Infrastructure</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            Building with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-200">intelligence at the core.</span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            We don't just bolt AI onto legacy systems. We architect workflows where human creativity and machine intelligence amplify each other.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: Cpu, title: "Predictive Modeling", desc: "Forecast performance before you spend a dollar." },
                                { icon: Network, title: "Autonomous Agents", desc: "Self-healing workflows that optimize 24/7." }
                            ].map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <feature.icon className="text-primary mb-4" size={32} />
                                    <h4 className="text-white font-bold text-lg mb-2">{feature.title}</h4>
                                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center"
                        >
                            {/* Central Hub */}
                            <div className="w-32 h-32 bg-primary rounded-full blur-[50px] absolute opacity-50" />
                            <div className="w-48 h-48 bg-bg-dark border border-white/20 rounded-full z-10 flex items-center justify-center">
                                <span className="font-display font-bold text-white text-xl">Core</span>
                            </div>

                            {/* Orbiting Elements */}
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute inset-0"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-12 bg-gray-800 rounded-xl border border-white/10 flex items-center justify-center text-gray-400">
                                        <Cpu size={20} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildingWithAI;
