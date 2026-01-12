import React, { useEffect } from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import ContactSection from '../ContactSection';

const Playbooks: React.FC = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="bg-bg-light min-h-screen pt-24">
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-text-dark mb-6">Playbooks</h1>
                    <p className="text-xl text-text-muted max-w-2xl mb-12">
                        Tactical execution plans for common marketing scenarios.
                    </p>

                    <div className="flex flex-col gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-all cursor-pointer group">
                                <div className="w-16 h-16 bg-bg-dark text-white rounded-xl flex items-center justify-center shrink-0">
                                    <Layers size={28} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold font-display text-text-dark mb-1 group-hover:text-primary transition-colors">
                                        Launching a new product line
                                    </h3>
                                    <p className="text-text-muted">Step-by-step guide to asset requirements, channel mix, and timeline.</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all">
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default Playbooks;
