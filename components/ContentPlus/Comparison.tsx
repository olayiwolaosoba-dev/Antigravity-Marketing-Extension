import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
    return (
        <section className="py-24 bg-[#022c22] text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-medium mb-4">
                        Hiring or traditional<br /> outsourcing? <span className="italic font-serif text-[#34d399]">Neither.</span>
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <div className="min-w-[800px]">
                        {/* Header Row */}
                        <div className="grid grid-cols-6 gap-4 items-center mb-8 px-8">
                            <div className="col-span-1"></div>
                            {["Speed", "Flexibility", "Quality", "Scalability", "Cost-effectiveness"].map(head => (
                                <div key={head} className="text-center font-serif italic text-xl text-gray-300">
                                    {head}
                                </div>
                            ))}
                        </div>

                        {/* Our Row */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0.95 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-6 gap-4 items-center bg-[#ccfbf1] text-[#022c22] p-8 rounded-[100px] mb-8 relative z-10"
                        >
                            <div className="col-span-1 pl-4">
                                <h3 className="font-bold text-2xl font-display">Marketing Extension</h3>
                                <p className="text-sm mt-2 opacity-80">Work with top 1% talent, supercharged by AI.</p>
                            </div>
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex justify-center">
                                    <Check size={32} strokeWidth={3} className="text-[#059669]" />
                                </div>
                            ))}
                        </motion.div>

                        {/* Other Rows */}
                        <div className="grid grid-cols-6 gap-4 items-center border-b border-white/10 py-8 px-8">
                            <div className="col-span-1">
                                <h3 className="font-bold text-xl">In-house team</h3>
                                <p className="text-sm mt-2 text-gray-400">Hard to scale, expensive overhead.</p>
                            </div>
                            <div className="flex justify-center"><X size={28} className="text-gray-500" /></div>
                            <div className="flex justify-center"><X size={28} className="text-gray-500" /></div>
                            <div className="flex justify-center"><Check size={28} className="text-white" /></div>
                            <div className="flex justify-center"><Check size={28} className="text-white" /></div>
                            <div className="flex justify-center"><X size={28} className="text-gray-500" /></div>
                        </div>

                        <div className="grid grid-cols-6 gap-4 items-center py-8 px-8">
                            <div className="col-span-1">
                                <h3 className="font-bold text-xl">Agencies</h3>
                                <p className="text-sm mt-2 text-gray-400">Slow, rigid, and high markup fees.</p>
                            </div>
                            <div className="flex justify-center"><X size={28} className="text-gray-500" /></div>
                            <div className="flex justify-center"><X size={28} className="text-gray-500" /></div>
                            <div className="flex justify-center"><Check size={28} className="text-white" /></div>
                            <div className="flex justify-center"><Check size={28} className="text-white" /></div>
                            <div className="flex justify-center"><X size={28} className="text-gray-500" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
