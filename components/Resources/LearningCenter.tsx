import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Bookmark } from 'lucide-react';
import ContactSection from '../ContactSection';

const LearningCenter: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = [
        { category: "Strategy", title: "The 2026 CMO Playbook", readTime: "10 min" },
        { category: "Design", title: "Micro-animations that convert", readTime: "5 min" },
        { category: "AI", title: "Building your first AI Agent", readTime: "15 min" },
        { category: "Operations", title: "Creative Ops excellence", readTime: "8 min" },
    ];

    return (
        <div className="bg-bg-light min-h-screen pt-24">
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-text-dark mb-6">Learning Center</h1>
                    <p className="text-xl text-text-muted max-w-2xl mb-12">
                        Deep dives, strategic frameworks, and tactical guides from the Marketing Extension team.
                    </p>

                    {/* Featured Article */}
                    <div className="rounded-[32px] overflow-hidden bg-bg-dark text-white grid grid-cols-1 md:grid-cols-2 shadow-2xl mb-16 group cursor-pointer">
                        <div className="p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                                <BookOpen size={16} /> Featured
                            </div>
                            <h2 className="text-4xl font-display font-bold mb-6 group-hover:underline decoration-primary">
                                How to structure a modern marketing org for speed.
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                We analyzed 500+ top performing teams. Here is what they all have in common when it comes to organizational design.
                            </p>
                            <div className="flex items-center gap-2 font-bold">Read Article <ArrowRight size={18} /></div>
                        </div>
                        <div className="h-full min-h-[400px]">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                alt="Teamwork"
                            />
                        </div>
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {articles.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-video bg-gray-100 rounded-2xl mb-6 overflow-hidden">
                                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-primary font-bold text-xs uppercase tracking-wider">{item.category}</span>
                                    <span className="text-gray-400 text-xs font-bold">{item.readTime} read</span>
                                </div>
                                <h3 className="text-2xl font-bold font-display text-text-dark mb-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default LearningCenter;
