import React, { useEffect } from 'react';
import HeroMTS from './components/MarTechStudio/HeroMTS';
import BrandsCarouselMTS from './components/MarTechStudio/BrandsCarouselMTS';
import WorkVideoTileMTS from './components/MarTechStudio/WorkVideoTileMTS';
import OurApproachMTS from './components/MarTechStudio/OurApproachMTS';
import CaseStudiesMTS from './components/MarTechStudio/CaseStudiesMTS';
import BuildingWithAI from './components/MarTechStudio/BuildingWithAI';
import WhyBetter from './components/MarTechStudio/WhyBetter';
import ResearchCarousel from './components/MarTechStudio/ResearchCarousel';
import Newsletter from './components/MarTechStudio/Newsletter';

interface MarTechStudioProps {
    onNavigate: (page: any) => void;
}

const MarTechStudio: React.FC<MarTechStudioProps> = ({ onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-bg-light min-h-screen">
            <HeroMTS />
            <BrandsCarouselMTS />
            <WorkVideoTileMTS />
            <OurApproachMTS />
            <CaseStudiesMTS />
            <BuildingWithAI />
            <WhyBetter />
            <ResearchCarousel />
            <Newsletter />
        </div>
    );
};

export default MarTechStudio;
