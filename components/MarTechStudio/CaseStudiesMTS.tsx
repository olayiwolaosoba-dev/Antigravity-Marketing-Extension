import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CaseStudiesMTS: React.FC = () => {
    const cases = [
        {
            client: "Global Retailer",
            title: "Unifying customer data across 5 brands",
            stat: "360° View",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
            tags: ["CDP Implementation", "Attribution"]
        },
        {
            client: "FinTech Scaleup",
            title: "Automating lifecycle marketing at scale",
            stat: "+45% LTV",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tags: ["Automation", "CRM"]
        },
        {
            client: "SaaS Enterprise",
            title: "AI-driven lead scoring engine",
            stat: "2x Conversion",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tags: ["AI Modeling", "Sales Ops"]
        }
    ];

    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-dark mb-4">
                            Proven impact.
                        </h2>
                        <p className="text-xl text-text-muted">
                            See how we architect growth for market leaders.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 font-bold hover:bg-bg-dark hover:text-white transition-colors">
                        View all cases <ArrowUpRight size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-[32px] aspect-[4/5] mb-6">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-text-dark px-4 py-2 rounded-full font-bold text-sm">
                                    {item.stat}
                                </div>
                            </div>
                            <div className="flex gap-2 mb-3">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-text-dark group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesMTS;
