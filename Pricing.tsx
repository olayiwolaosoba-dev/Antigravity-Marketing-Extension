import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle, ArrowRight } from 'lucide-react';
import ContactSection from './components/ContactSection'; // Reuse Contact

interface PricingProps {
    onNavigate: (page: any) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <div className="bg-bg-light min-h-screen pt-24">
            {/* Header */}
            <section className="py-20 text-center container mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-text-dark mb-6">
                    Transparent pricing.<br />
                    <span className="text-primary">Predictable growth.</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto mb-12">
                    No hidden fees, no surprise overages. Just a flat monthly rate for your dedicated growth team.
                </p>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={`font-bold ${!isAnnual ? 'text-text-dark' : 'text-text-muted'}`}>Monthly</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className="w-16 h-8 bg-bg-dark rounded-full relative px-1 transition-colors"
                    >
                        <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 ${isAnnual ? 'left-9' : 'left-1'}`} />
                    </button>
                    <span className={`font-bold ${isAnnual ? 'text-text-dark' : 'text-text-muted'}`}>
                        Annual <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded ml-1">SAVE 20%</span>
                    </span>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            name: "Essential",
                            desc: "For startups validating market fit.",
                            price: isAnnual ? "3,900" : "4,900",
                            features: ["Dedicated Project Manager", "Graphic Design & Copy", "2 Active Requests", "48h Turnaround"]
                        },
                        {
                            name: "Growth",
                            desc: "For scaleups expanding channels.",
                            price: isAnnual ? "7,900" : "9,900",
                            popular: true,
                            features: ["Everything in Essential", "Motion Graphics & Video", "Web Development", "4 Active Requests", "Dedicated Creative Director"]
                        },
                        {
                            name: "Enterprise",
                            desc: "For organizations needing scale.",
                            price: "Custom",
                            features: ["Everything in Growth", "Dedicated Growth Pod", "MarTech Implementation", "Unlimited Requests", "SLA Guarantees"]
                        }
                    ].map((plan, i) => (
                        <div key={i} className={`relative p-8 rounded-3xl text-left flex flex-col ${plan.popular ? 'bg-bg-dark text-white shadow-2xl scale-105 z-10' : 'bg-white text-text-dark border border-gray-100'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold font-display mb-2">{plan.name}</h3>
                            <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-text-muted'}`}>{plan.desc}</p>

                            <div className="mb-8">
                                <span className="text-4xl font-bold font-display">${plan.price}</span>
                                {plan.price !== "Custom" && <span className="text-sm opacity-60">/mo</span>}
                            </div>

                            <button className={`w-full py-4 rounded-full font-bold mb-8 transition-colors ${plan.popular
                                    ? 'bg-primary text-white hover:bg-white hover:text-text-dark'
                                    : 'bg-bg-gray text-text-dark hover:bg-bg-dark hover:text-white'
                                }`}>
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </button>

                            <div className="space-y-4 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-primary/20 text-primary' : 'bg-green-100 text-green-600'}`}>
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-text-muted'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-16">Compare Plans</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-4 border-b border-gray-100 min-w-[200px]">Features</th>
                                    <th className="p-4 border-b border-gray-100 text-center font-bold">Essential</th>
                                    <th className="p-4 border-b border-gray-100 text-center font-bold text-primary">Growth</th>
                                    <th className="p-4 border-b border-gray-100 text-center font-bold">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Design & Copy", ess: true, gro: true, ent: true },
                                    { name: "Video Production", ess: false, gro: true, ent: true },
                                    { name: "Webflow Development", ess: false, gro: true, ent: true },
                                    { name: "MarTech Strategy", ess: false, gro: false, ent: true },
                                    { name: "Dedicated Slack Channel", ess: true, gro: true, ent: true },
                                    { name: "Turnaround Time", ess: "48 hours", gro: "24 hours", ent: "Same Day" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-4 border-b border-gray-100 font-medium text-text-dark">{row.name}</td>
                                        <td className="p-4 border-b border-gray-100 text-center">
                                            {typeof row.ess === 'boolean' ? (row.ess ? <Check className="mx-auto text-green-500" size={18} /> : '-') : row.ess}
                                        </td>
                                        <td className="p-4 border-b border-gray-100 text-center bg-primary/5">
                                            {typeof row.gro === 'boolean' ? (row.gro ? <Check className="mx-auto text-primary" size={18} /> : '-') : row.gro}
                                        </td>
                                        <td className="p-4 border-b border-gray-100 text-center">
                                            {typeof row.ent === 'boolean' ? (row.ent ? <Check className="mx-auto text-green-500" size={18} /> : '-') : row.ent}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="py-20 bg-bg-gray">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                        alt="CEO"
                        className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                    />
                    <blockquote className="text-2xl font-display font-medium text-text-dark mb-6">
                        "Switching to Marketing Extension's Growth plan saved us hiring 3 full-time roles. The quality is consistently top-tier."
                    </blockquote>
                    <cite className="not-italic text-sm font-bold text-text-muted">
                        ALEX RIVERA, CMO @ TECHFLOW
                    </cite>
                </div>
            </section>

            <ContactSection />
        </div>
    );
};

export default Pricing;
