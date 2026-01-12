import React, { useEffect } from 'react';
import { BarChart2, ArrowRight } from 'lucide-react';
import ContactSection from '../ContactSection';

const Reports: React.FC = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="bg-bg-light min-h-screen pt-24">
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-text-dark mb-6">Reports</h1>
                    <p className="text-xl text-text-muted max-w-2xl mb-12">
                        Data-backed insights into the creative economy.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-gray-100 group cursor-pointer">
                                <div className="h-64 bg-gray-200 relative">
                                    <div className="absolute bottom-0 left-0 bg-primary text-white px-6 py-2 font-bold uppercase tracking-widest text-sm rounded-tr-xl">
                                        2026 Edition
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-3xl font-bold font-display mb-4">The State of Creative Operations</h3>
                                    <p className="text-text-muted mb-8 text-lg">
                                        We surveyed 1,000 marketing leaders to understand how they are solving the scale problem in 2026.
                                    </p>
                                    <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                        Read Report <ArrowRight size={18} />
                                    </button>
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

export default Reports;
