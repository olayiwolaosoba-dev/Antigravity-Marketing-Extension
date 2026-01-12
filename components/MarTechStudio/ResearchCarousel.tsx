import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const ResearchCarousel: React.FC = () => {
    return (
        <section className="py-24 bg-[#F5F5F7]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-display font-medium text-text-dark">
                        Latest Intelligence
                    </h2>
                    <button className="text-primary font-bold hover:underline">View all reports</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all cursor-pointer group">
                            <div className="w-12 h-12 bg-bg-gray rounded-xl flex items-center justify-center text-text-muted mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText size={20} />
                            </div>
                            <p className="text-xs font-bold text-text-muted uppercase mb-2">Whitepaper</p>
                            <h3 className="text-lg font-bold text-text-dark mb-4 leading-snug">
                                The Future of Marketing Automation in 2026
                            </h3>
                            <div className="flex items-center gap-2 text-sm font-bold text-text-dark group-hover:text-primary transition-colors">
                                Read now <ArrowRight size={14} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchCarousel;
