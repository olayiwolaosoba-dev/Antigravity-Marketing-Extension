import React from 'react';

const BrandsCarouselMTS: React.FC = () => {
    return (
        <div className="py-12 bg-bg-dark border-t border-white/10 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Powering stack for top brands</p>
            </div>
            <div className="flex gap-12 animate-scroll whitespace-nowrap opacity-40 hover:opacity-100 transition-opacity duration-500">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-3xl font-display font-bold text-white/50 px-8">
                        TECH BRAND {i + 1}
                    </span>
                ))}
                {[...Array(10)].map((_, i) => (
                    <span key={`dup-${i}`} className="text-3xl font-display font-bold text-white/50 px-8">
                        TECH BRAND {i + 1}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BrandsCarouselMTS;
