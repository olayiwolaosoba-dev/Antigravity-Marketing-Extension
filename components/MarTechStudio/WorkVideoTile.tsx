import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const WorkVideoTile = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 bg-bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-video md:aspect-[21/9] rounded-[32px] overflow-hidden bg-white/5 border border-white/10 group shadow-2xl"
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        muted
                        poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" // Placeholder poster, retro tech vibes
                    >
                        <source src="" type="video/mp4" /> {/* Add video source later */}
                    </video>

                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                        <button
                            onClick={togglePlay}
                            className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 group-hover:bg-primary group-hover:border-primary"
                        >
                            <Play size={40} className="fill-current ml-1" />
                        </button>
                    </div>

                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg pointer-events-none">
                        <span className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2 block">Featured Work</span>
                        <h3 className="text-3xl font-display font-medium text-white mb-2">Architecting the future of finance</h3>
                        <p className="text-white/80">See how we built a scalable design system for FinTech Corp.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkVideoTile;
