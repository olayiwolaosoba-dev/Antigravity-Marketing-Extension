import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Bot, BarChart2, Plus, ArrowRight } from 'lucide-react';

const OurApproachMTS: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const pillars = [
        {
            icon: Layout,
            title: "Web & Product Experiences",
            desc: "We build pixel-perfect, high-performance web experiences that convert. From complex web apps to marketing sites.",
            features: ["Custom Web Development", "UX/UI Design Systems", "Headless CMS Architecture"]
        },
        {
            icon: Bot,
            title: "Marketing Automation",
            desc: "Orchestrate complex customer journeys across email, SMS, and ad platforms using best-in-class tools.",
            features: ["Lifecycle Workflow Design", "HubSpot/Marketo Implementation", "Cross-channel Orchestration"]
        },
        {
            icon: BarChart2,
            title: "Analytics & Intelligence",
            desc: "Unify your data sources into a single source of truth. Real-time dashboards that drive decision making.",
            features: ["Attribution Modeling", "Looker/Tableau Dashboards", "Data Warehousing (Snowflake/BigQuery)"]
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-text-dark mb-6">
                        An integrated approach to <br />
                        <span className="text-primary opacity-80">marketing infrastructure.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left: Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {pillars.map((pillar, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`text-left p-8 rounded-3xl transition-all duration-300 border ${activeTab === index
                                        ? 'bg-bg-dark text-white border-bg-dark shadow-xl scale-105'
                                        : 'bg-bg-gray text-text-muted border-transparent hover:bg-gray-200'
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <pillar.icon size={32} className={activeTab === index ? 'text-primary' : 'text-gray-400'} />
                                    {activeTab === index && <ArrowRight size={24} className="text-white" />}
                                </div>
                                <h3 className={`text-2xl font-display font-bold mb-2 ${activeTab === index ? 'text-white' : 'text-text-dark'}`}>
                                    {pillar.title}
                                </h3>
                                <div className={`h-1 w-12 rounded-full ${activeTab === index ? 'bg-primary' : 'bg-gray-300'}`} />
                            </button>
                        ))}
                    </div>

                    {/* Right: Content Panel */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-bg-gray rounded-[40px] p-12 h-full flex flex-col justify-center"
                            >
                                <div className="mb-8">
                                    <h3 className="text-4xl font-display font-bold text-text-dark mb-6">
                                        {pillars[activeTab].title}
                                    </h3>
                                    <p className="text-xl text-text-muted leading-relaxed">
                                        {pillars[activeTab].desc}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {pillars[activeTab].features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Plus size={16} strokeWidth={3} />
                                            </div>
                                            <span className="text-lg font-medium text-text-dark">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-10 border-t border-gray-200">
                                    <button className="text-primary font-bold tracking-widest uppercase text-sm flex items-center gap-2 hover:gap-4 transition-all">
                                        Explore Solutions <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurApproachMTS;
