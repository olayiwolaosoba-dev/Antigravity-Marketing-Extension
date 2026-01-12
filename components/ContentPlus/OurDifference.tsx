import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Sliders, Star, Play } from 'lucide-react';

const OurDifference: React.FC = () => {
    const features = [
        {
            icon: PenTool,
            title: "Scalable",
            subtitle: "Boost your in-house creative",
            desc: "We handle the heavy lifting so you can focus on strategic, high impact work without adding overhead to the team."
        },
        {
            icon: Sliders,
            title: "Flexible",
            subtitle: "Say yes to more projects",
            desc: "Whether you need more bandwidth or different skills, Marketing Extension has whatever resources you need to get the job done."
        },
        {
            icon: Star,
            title: "Responsive",
            subtitle: "Don't sacrifice quality for speed",
            desc: "Our global team of creatives delivers agency-level work in a fraction of the time."
        }
    ];

    return (
        <section className="py-24 bg-bg-light">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-4 block">Our Difference</span>
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-text-dark max-w-4xl mx-auto leading-tight">
                        Marketing Extension is the <span className="font-serif italic text-primary">perfect fit</span> for fast moving brands
                    </h2>
                </div>

                {/* 3 Column Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-start"
                        >
                            <div className="w-16 h-16 bg-bg-gray rounded-2xl flex items-center justify-center mb-6 text-text-dark">
                                <feature.icon size={32} strokeWidth={1.5} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-text-muted mb-3">{feature.title}</span>
                            <h3 className="text-2xl font-display font-bold text-text-dark mb-4">{feature.subtitle}</h3>
                            <p className="text-lg text-text-muted leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Video Tile */}

            </div>
        </section>
    );
};

export default OurDifference;
