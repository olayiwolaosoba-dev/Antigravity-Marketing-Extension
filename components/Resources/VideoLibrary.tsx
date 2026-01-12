import React, { useEffect } from 'react';
import { Play } from 'lucide-react';
import ContactSection from '../ContactSection';

const VideoLibrary: React.FC = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="bg-bg-dark min-h-screen pt-24">
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-white mb-6">Video Library</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mb-12">
                        Watch masterclasses, webinars, and tutorials.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800 mb-4">
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play size={24} className="text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">12:45</div>
                                </div>
                                <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-primary transition-colors">
                                    Mastering the creative feedback loop
                                </h3>
                                <p className="text-gray-500 text-sm">Episode {i} • 2.5k views</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default VideoLibrary;
