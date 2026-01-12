import React from 'react';
import { Check } from 'lucide-react';

const PricingMTS = () => {
    return (
        <section className="py-24 bg-bg-dark text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Pricing</span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">Simple, transparent pricing</h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Choose the engagement model that fits your stage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-display font-bold mb-2">Project</h3>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <p className="text-white/60 mb-8 flex-grow">Best for specific builds like a new website, landing page system, or automation setup.</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-sm text-white/80"><Check size={18} className="text-primary" /> Fixed Scope & Timeline</li>
                            <li className="flex gap-3 text-sm text-white/80"><Check size={18} className="text-primary" /> One-off implementation</li>
                            <li className="flex gap-3 text-sm text-white/80"><Check size={18} className="text-primary" /> Handoff training</li>
                        </ul>
                        <button className="w-full py-4 rounded-full border border-white/20 hover:bg-white hover:text-bg-dark transition-all font-bold">Get a Quote</button>
                    </div>

                    {/* Card 2 - Highlighted */}
                    <div className="bg-white text-bg-dark rounded-3xl p-8 flex flex-col transform md:-translate-y-4 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">Popular</div>
                        <h3 className="text-2xl font-display font-bold mb-2">Retainer</h3>
                        <div className="text-4xl font-bold mb-6">From $5k<span className="text-lg text-text-muted font-normal">/mo</span></div>
                        <p className="text-text-muted mb-8 flex-grow">Ongoing support for teams that need continuous iteration and optimization.</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-sm"><Check size={18} className="text-primary" /> Dedicated Team</li>
                            <li className="flex gap-3 text-sm"><Check size={18} className="text-primary" /> Weekly Sprints</li>
                            <li className="flex gap-3 text-sm"><Check size={18} className="text-primary" /> Analytics & Reporting</li>
                        </ul>
                        <button className="w-full py-4 rounded-full bg-bg-dark text-white hover:bg-primary transition-colors font-bold shadow-lg">Start Monthly</button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-display font-bold mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <p className="text-white/60 mb-8 flex-grow">For large organizations needing full-scale digital transformation and custom infra.</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3 text-sm text-white/80"><Check size={18} className="text-primary" /> SLA Support</li>
                            <li className="flex gap-3 text-sm text-white/80"><Check size={18} className="text-primary" /> Custom Integrations</li>
                            <li className="flex gap-3 text-sm text-white/80"><Check size={18} className="text-primary" /> Strategic Advisory</li>
                        </ul>
                        <button className="w-full py-4 rounded-full border border-white/20 hover:bg-white hover:text-bg-dark transition-all font-bold">Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingMTS;
