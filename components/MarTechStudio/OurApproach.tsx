import React from 'react';
import { motion } from 'framer-motion';
import { Layout, GitMerge, BarChart3, CheckCircle2 } from 'lucide-react';

const approaches = [
    {
        icon: Layout,
        title: "Web & Product Experiences",
        desc: "Marketing sites, landing pages, and microsites focused on clarity and conversion. Simple tools and experiences that bring your story to life.",
        features: ["Experience design", "High-conversion LPs", "Brand storytelling"]
    },
    {
        icon: GitMerge,
        title: "Marketing Automation",
        desc: "Email, lifecycle, and nurture journeys that turn leads into revenue. Lead routing, scoring, and handovers that align marketing and sales.",
        features: ["Lifecycle journeys", "CRM workflows", "Lead scoring"]
    },
    {
        icon: BarChart3,
        title: "Integration & Analytics",
        desc: "Help you choose and configure the right stack for your stage. Connect data across analytics, CRM, product usage, and finance.",
        features: ["Tool selection", "Unified dashboards", "Testing frameworks"]
    }
];

const OurApproach = () => {
    return (
        <section className="py-24 bg-bg-dark text-white">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
                        One measurable, <span className="font-serif italic text-white/70">adaptable</span> <br />
                        operating system.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {approaches.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-white/60 mb-8 leading-relaxed h-28">{item.desc}</p>

                            <ul className="space-y-3">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                        <CheckCircle2 size={16} className="text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurApproach;
