import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Layers } from 'lucide-react';

const MadeToFlex: React.FC = () => {
    const features = [
        {
            icon: <Globe size={32} />,
            title: "Top global creative talent",
            desc: "Access the top 1% of creatives from around the world, rigorously vetted and trained in our unique workflows.",
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
            color: "bg-[#1F2937]", // Keep dark or switch to brand dark
            isLight: false
        },
        {
            icon: <Zap size={32} />,
            title: "Ultra-fast turnaround times",
            desc: "Get your creative assets in as little as 12 hours. Our always-on global team works while you sleep.",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            color: "bg-white border border-gray-100", // White card
            isLight: true
        },
        {
            icon: <Layers size={32} />,
            title: "Flexible subscription model",
            desc: "Scale up or down instantly. No long-term contracts, no hidden fees. Just pure creative agility.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
            color: "bg-primary-soft", // Use brand primary soft (peach/orange tint) instead of green
            isLight: true
        }
    ];

    return (
        <section className="py-24 bg-bg-dark text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6"
                    >
                        Supertalented. Superfast.<br />
                        <span className="italic font-serif text-primary">Made to keep up with you.</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Work with a global team that is purposefully built to be an extension of your own brand.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`rounded-[32px] overflow-hidden flex flex-col ${feature.color} ${feature.isLight ? 'text-text-dark' : 'text-white'} group`}
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-10 flex-1 flex flex-col">
                                <div className="mb-6 opacity-80">
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-display font-medium mb-4 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className={`text-lg leading-relaxed ${feature.isLight ? 'text-text-muted' : 'text-gray-300'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MadeToFlex;
