import React, { useEffect } from 'react';
import HeroCP from './components/ContentPlus/HeroCP';
import ContentPlusIntro from './components/ContentPlus/ContentPlusIntro';
import MadeToFlex from './components/ContentPlus/MadeToFlex';
import OurDifference from './components/ContentPlus/OurDifference';
import SuccessInNumbers from './components/ContentPlus/SuccessInNumbers';
import VideoTile from './components/ContentPlus/VideoTile';
import ServicesBento from './components/ContentPlus/ServicesBento';
import WorldClassTalent from './components/ContentPlus/WorldClassTalent';
import OurWorkCollage from './components/ContentPlus/OurWorkCollage';
import TestimonialsCP from './components/ContentPlus/TestimonialsCP';
import AIExcellence from './components/ContentPlus/AIExcellence';
import ContactSection from './components/ContactSection';

interface ContentPlusProps {
    onNavigate: (page: any) => void;
}

const ContentPlus: React.FC<ContentPlusProps> = ({ onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <HeroCP />

            {/* Social Proof Marquee */}
            <div className="py-12 border-y border-gray-100 bg-white overflow-hidden">
                <p className="text-center text-sm font-bold uppercase tracking-widest text-text-muted mb-8">Trusted by 500+ Top Brands</p>
                <div className="flex gap-12 animate-scroll whitespace-nowrap opacity-50 grayscale">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <span key={`logo-${i}`} className="text-2xl font-display font-bold text-text-muted">BRAND LOGO {i}</span>
                    ))}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <span key={`dup-${i}`} className="text-2xl font-display font-bold text-text-muted">BRAND LOGO {i}</span>
                    ))}
                </div>
            </div>

            <ContentPlusIntro />
            <MadeToFlex />
            <OurDifference />
            <SuccessInNumbers />
            <VideoTile />
            <ServicesBento />
            <WorldClassTalent />
            <OurWorkCollage />
            <TestimonialsCP />
            <AIExcellence />

            <ContactSection />
        </div>
    );
};

export default ContentPlus;
