import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Marketing Extension transformed our messy stack into a well-oiled machine. Our conversion rates doubled within 3 months.",
        author: "Sarah Jenkins",
        role: "CMO, FinTech Global",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "The level of design quality and technical execution is unmatched. They truly understand the intersection of brand and tech.",
        author: "David Chen",
        role: "Founder, SaaS Inc",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        quote: "Finally, an agency that doesn't just deliver pretty pictures, but actual infrastructure that scales with us.",
        author: "Elena Rodriguez",
        role: "VP Marketing, GrowthCo",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    }
];

const TestimonialsMTS = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 block">Client Stories</span>
                </div>

                <div className="relative bg-white rounded-[40px] p-12 md:p-16 shadow-2xl border border-gray-100">
                    <Quote size={60} className="text-primary/10 absolute top-12 left-12" />

                    <div className="relative min-h-[300px] flex flex-col justify-center items-center text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-3xl"
                            >
                                <p className="text-2xl md:text-3xl font-display font-medium text-text-dark mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex flex-col items-center">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].author}
                                        className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-primary ring-offset-4"
                                    />
                                    <div className="font-bold text-lg">{testimonials[currentIndex].author}</div>
                                    <div className="text-text-muted text-sm uppercase tracking-wider">{testimonials[currentIndex].role}</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-8 md:absolute md:bottom-12 md:right-12">
                        <button onClick={prev} className="p-3 rounded-full bg-gray-50 hover:bg-bg-dark hover:text-white transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <button onClick={next} className="p-3 rounded-full bg-gray-50 hover:bg-bg-dark hover:text-white transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsMTS;
