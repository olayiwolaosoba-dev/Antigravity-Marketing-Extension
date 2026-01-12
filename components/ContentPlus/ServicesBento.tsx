import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServicesBento: React.FC = () => {
    const services = [
        {
            title: "Ad Creative",
            desc: "Eye-catching designs that perform across all social platforms.",
            colSpan: "md:col-span-2",
            bgClass: "bg-gradient-to-br from-gray-100 to-white",
        },
        {
            title: "Social Media",
            desc: "Engaging assets for LinkedIn, Instagram, and more.",
            colSpan: "md:col-span-1",
            bgClass: "bg-[#F5F5F7]",
        },
        {
            title: "Presentation Design",
            desc: "Pitch decks that win deals.",
            colSpan: "md:col-span-1",
            bgClass: "bg-[#F5F5F7]",
        },
        {
            title: "AI-Powered Creative",
            desc: "Human brilliance, scaled by AI efficiency.",
            colSpan: "md:col-span-2",
            bgClass: "bg-bg-dark text-white",
            isDark: true,
        },
        {
            title: "Motion Design",
            desc: "Animations that tell your story.",
            colSpan: "md:col-span-1",
            bgClass: "bg-primary/10",
        },
        {
            title: "Web Design",
            desc: "Landing pages that convert.",
            colSpan: "md:col-span-1",
            bgClass: "bg-[#F5F5F7]",
        },
        {
            title: "Email Design",
            desc: "Campaigns that get clicked.",
            colSpan: "md:col-span-1",
            bgClass: "bg-gray-100",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-text-dark">
                        Everything you need.<br />
                        <span className="text-primary opacity-80">Nothing you don't.</span>
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl">
                        From day-to-day production to high-stakes campaigns, we have got you covered with specialized creative talent.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-8 rounded-[32px] overflow-hidden ${service.bgClass} ${service.colSpan} card-hover cursor-pointer`}
                        >
                            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className={`p-2 rounded-full ${service.isDark ? 'bg-white/20 text-white' : 'bg-black/5 text-text-dark'}`}>
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>

                            <div className="h-full flex flex-col justify-between relative z-10">
                                <div>
                                    {/* Placeholder for icon/image if needed */}
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-bold mb-2 ${service.isDark ? 'text-white' : 'text-text-dark'}`}>{service.title}</h3>
                                    <p className={`text-lg leading-snug ${service.isDark ? 'text-white/70' : 'text-text-muted'}`}>{service.desc}</p>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            {!service.isDark && (
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesBento;
