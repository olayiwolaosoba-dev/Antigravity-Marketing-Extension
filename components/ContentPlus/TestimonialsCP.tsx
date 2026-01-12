import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TestimonialsCP: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            quote: "Thanks to Marketing Extension, we've elevated ourselves. We've changed marketing in the industry by acting as more of a marketing agency for our brands.",
            author: "Marc Vitulli",
            role: "VP Marketing at S&S Activewear",
            stats: [
                { value: "4x", label: "Increase in design capacity" },
                { value: "60%", label: "Reduction in time to market" },
                { value: "60+", label: "Number of brands" }
            ],
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
        },
        {
            quote: "The speed and quality of work we get is unmatched. It feels like they are sitting right next to us in the office.",
            author: "Sarah Jenkins",
            role: "CMO at TechFlow",
            stats: [
                { value: "2.5x", label: "More outputs" },
                { value: "24h", label: "Turnaround time" },
                { value: "100%", label: "Brand consistency" }
            ],
            image: "https://images.unsplash.com/photo-1573497019-9e6a575a8316?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-[#E8F0E5]/30"> {/* Subtle greenish tint similar to Superside or stay brand neutral */}
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Circle (Left) */}
                    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex-shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={current}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                src={testimonials[current].image}
                                className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
                            />
                        </AnimatePresence>
                        {/* Decorative background circle */}
                        <div className="absolute top-4 -right-4 w-full h-full rounded-full border-2 border-primary/20 -z-10" />
                    </div>

                    {/* Content (Right) */}
                    <div className="flex-1">
                        <div className="mb-8">
                            <Quote className="text-primary mb-6" size={48} fill="currentColor" fillOpacity={0.2} />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className="text-3xl md:text-5xl font-display font-medium text-text-dark mb-6 leading-tight">
                                        "{testimonials[current].quote}"
                                    </h3>
                                    <div>
                                        <p className="text-xl font-bold text-text-dark">{testimonials[current].author}</p>
                                        <p className="text-text-muted">{testimonials[current].role}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-gray-200 mb-8">
                            {testimonials[current].stats.map((stat, i) => (
                                <div key={i}>
                                    <p className="text-3xl font-serif italic text-text-dark mb-1">{stat.value}</p>
                                    <p className="text-sm text-text-muted">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="flex gap-4">
                            <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-text-dark hover:text-white transition-colors">
                                <ArrowLeft size={20} />
                            </button>
                            <button onClick={next} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-text-dark hover:text-white transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsCP;
