import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SuccessInNumbers: React.FC = () => {
    return (
        <section className="py-24 bg-[#022c22] text-white relative overflow-hidden">
            {/* Background subtle gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-24">
                    <span className="text-[#34d399] font-bold tracking-widest uppercase text-sm mb-4 block">Success in Numbers</span>
                    <h2 className="text-5xl md:text-7xl font-display font-medium">
                        The best return on <br />
                        <span className="italic font-serif">your investment</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20">
                    {/* Stat 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-t border-white/20 pt-8"
                    >
                        <div className="text-8xl md:text-9xl font-display font-medium mb-6">500+</div>
                        <p className="text-xl text-gray-400 mb-6">
                            Startups, enterprises and mid-market companies trust Marketing Extension to deliver pixel-perfect creative, at scale.
                        </p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="border-t border-white/20 pt-8"
                    >
                        <div className="text-8xl md:text-9xl font-display font-medium mb-6">70k+</div>
                        <p className="text-xl text-gray-400 mb-6">
                            Projects delivered to this day and counting.
                        </p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="border-t border-white/20 pt-8"
                    >
                        <div className="text-8xl md:text-9xl font-display font-medium mb-6">94%</div>
                        <p className="text-xl text-gray-400 mb-6">
                            Brands see a three-year ROI of 94% on their subscription.
                        </p>
                        <button className="text-[#34d399] flex items-center gap-2 hover:gap-3 transition-all font-bold">
                            Read more in the Forrester TEI report <ArrowUpRight size={18} />
                        </button>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="border-t border-white/20 pt-8"
                    >
                        <div className="text-8xl md:text-9xl font-display font-medium mb-6">6 months</div>
                        <p className="text-xl text-gray-400 mb-6">
                            Brands see a 6-month payback period on their subscription.
                        </p>
                        <button className="text-[#34d399] flex items-center gap-2 hover:gap-3 transition-all font-bold">
                            Read more in the Forrester TEI report <ArrowUpRight size={18} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SuccessInNumbers;
