import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const OurWorkCollage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // Use window scroll or ref scroll depending on intended behavior. 
    // For a horizontal scroll section, we usually just let it scroll natively with overflow-x-auto.
    // Framer motion scroll progress is good for parallax or scroll-triggered animations.

    const works = [
        { id: 1, title: "Social Campaign", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=1000" },
        { id: 2, title: "Brand Identity", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800&h=1000" },
        { id: 3, title: "Digital Ads", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800&h=1000" },
        { id: 4, title: "Packaging", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800&h=1000" },
        { id: 5, title: "Web Design", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800&h=1000" },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl mb-12 flex justify-between items-end">
                <div>
                    <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 block">Our Work</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-text-dark">
                        Made to <span className="font-serif italic text-primary">stop the scroll</span>
                    </h2>
                </div>
                <button className="hidden md:block text-text-dark font-bold hover:text-primary transition-colors">View all work &rarr;</button>
            </div>

            {/* Carousel Container */}
            <div
                className="flex gap-6 overflow-x-auto pb-12 px-6 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={containerRef}
            >
                {works.map((work) => (
                    <motion.div
                        key={work.id}
                        className="flex-shrink-0 w-[300px] md:w-[400px] aspect-[3/4] rounded-[32px] overflow-hidden relative group snap-center cursor-pointer"
                        whileHover={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={work.img} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                            <p className="text-white font-display font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform">{work.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurWorkCollage;
