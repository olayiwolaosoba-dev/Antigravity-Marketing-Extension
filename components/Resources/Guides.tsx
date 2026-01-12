import React, { useEffect } from 'react';
import { FileText, Download } from 'lucide-react';
import ContactSection from '../ContactSection';

const Guides: React.FC = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="bg-bg-light min-h-screen pt-24">
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-text-dark mb-6">Guides</h1>
                    <p className="text-xl text-text-muted max-w-2xl mb-12">
                        Comprehensive playbooks for navigating modern marketing challenges.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all group cursor-pointer relative top-0 hover:-top-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <FileText size={24} />
                                </div>
                                <h3 className="text-2xl font-bold font-display text-text-dark mb-4">The Ultimate Guide to Creative Operations</h3>
                                <p className="text-text-muted mb-8">Everything you need to know about scaling creative output without sacrificing quality.</p>
                                <button className="text-primary font-bold flex items-center gap-2 uppercase text-sm tracking-wider hover:gap-3 transition-all">
                                    Download Guide <Download size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default Guides;
