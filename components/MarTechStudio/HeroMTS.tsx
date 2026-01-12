import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Activity, Database } from 'lucide-react';

const HeroMTS: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-bg-dark overflow-hidden pt-20">
            {/* Abstract Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[128px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-primary flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                MarTech Studio
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-display font-medium text-white mb-8 leading-[0.9]">
                            The Intelligence <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Layer.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            Systems, automation, and analytics that keep your engine honest. We build the infrastructure that powers valid decision making.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-text-dark transition-all duration-300 flex items-center gap-2 group">
                                Audit my stack
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all duration-300">
                                See our approach
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements - Tech Stack Visuals */}
            <div className="absolute top-1/2 lg:right-[5%] -translate-y-1/2 hidden lg:flex flex-col gap-6">
                {[
                    { icon: Database, label: "CDP Connected", val: "Active", color: "text-green-400" },
                    { icon: Activity, label: "Workflow Status", val: "Optimal", color: "text-blue-400" },
                    { icon: Wallet, label: "RevOps Synced", val: "100%", color: "text-primary" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 w-64 flex items-center gap-4"
                    >
                        <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${item.color}`}>
                            <item.icon size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-gray-500 font-mono uppercase mb-1">{item.label}</div>
                            <div className="text-white font-mono font-bold">{item.val}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HeroMTS;
