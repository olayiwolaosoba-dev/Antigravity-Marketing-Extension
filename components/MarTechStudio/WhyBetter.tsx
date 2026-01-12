import React from 'react';
import { Check, X } from 'lucide-react';

const WhyBetter: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-text-dark mb-4">Why top brands choose Marketing Extension</h2>
                    <p className="text-lg text-text-muted">The difference between a vendor and a partner.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-[32px] overflow-hidden border border-gray-100 shadow-xl">
                    {/* Feature Labels */}
                    <div className="md:col-span-1 bg-white p-8 flex flex-col justify-center gap-8 border-r border-gray-100">
                        <div className="h-8" /> {/* Spacer */}
                        <div className="font-bold text-text-dark">Integration Depth</div>
                        <div className="font-bold text-text-dark">Speed to Deployment</div>
                        <div className="font-bold text-text-dark">Strategic Oversight</div>
                        <div className="font-bold text-text-dark">Custom Development</div>
                    </div>

                    {/* Traditional Agencies */}
                    <div className="md:col-span-1 bg-gray-50 p-8 flex flex-col items-center gap-8 text-center border-r border-gray-100">
                        <div className="h-8 uppercase tracking-widest text-xs font-bold text-text-muted">Traditional Agencies</div>
                        <div className="text-text-muted">Surface Level</div>
                        <div className="text-text-muted">3-6 Months</div>
                        <div className="text-text-muted">Ad-hoc / Limited</div>
                        <div className="flex justify-center text-red-400"><X size={24} /></div>
                    </div>

                    {/* Marketing Extension */}
                    <div className="md:col-span-1 bg-[#FFF5F1] p-8 flex flex-col items-center gap-8 text-center relative">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
                        <div className="h-8 uppercase tracking-widest text-xs font-bold text-primary">Marketing Extension</div>
                        <div className="font-bold text-text-dark">Full Stack Access</div>
                        <div className="font-bold text-text-dark">2-4 Weeks</div>
                        <div className="font-bold text-text-dark">Dedicated CTO-Level</div>
                        <div className="flex justify-center text-primary"><Check size={24} strokeWidth={3} /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyBetter;
