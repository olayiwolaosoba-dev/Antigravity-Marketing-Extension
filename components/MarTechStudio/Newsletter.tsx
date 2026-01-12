import React from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <div className="mb-10">
                    <h2 className="text-4xl font-display font-bold text-text-dark mb-4">
                        Stay ahead of the curve.
                    </h2>
                    <p className="text-xl text-text-muted">
                        Join 10,000+ marketing leaders receiving our weekly technical deep dives.
                    </p>
                </div>

                <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your work email"
                        className="flex-1 px-6 py-4 rounded-full bg-bg-gray border border-gray-200 focus:outline-none focus:border-primary text-text-dark"
                    />
                    <button className="bg-text-dark text-white px-8 py-4 rounded-full font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2">
                        Subscribe <ArrowRight size={18} />
                    </button>
                </form>
                <p className="text-xs text-gray-400 mt-4">Unsubscribe at any time.</p>
            </div>
        </section>
    );
};

export default Newsletter;
