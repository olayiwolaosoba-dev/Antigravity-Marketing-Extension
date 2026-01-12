
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const ProblemRow: React.FC<{
  num: number;
  question: string;
  solution: string;
  cta: string;
  image: string;
}> = ({ num, question, solution, cta, image }) => (
  <div className="sticky top-0 h-screen flex items-center bg-white border-t border-gray-100">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-3 gap-16 items-center py-20">
        <div className="lg:pr-10">
          <span className="text-primary font-bold text-4xl mb-6 block font-display">0{num}</span>
          <h3 className="text-3xl font-display font-bold leading-tight text-text-dark">{question}</h3>
        </div>
        
        <div className="flex flex-col gap-8">
          <p className="text-lg text-text-muted leading-relaxed">{solution}</p>
          <button className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-300">
            {cta}
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="relative group rounded-2xl overflow-hidden aspect-video shadow-2xl">
          <img src={image} alt="Process" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform">
              <Play size={24} fill="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProblemsWeSolve: React.FC = () => {
  return (
    <section className="relative">
      <ProblemRow 
        num={1}
        question="Need pipeline fast but don’t have a full marketing team?"
        solution="Hiring in-house takes months. We embed a cross-functional squad (strategist + media + content + ops) into your team in weeks, so you can launch and scale campaigns without building a department from scratch."
        cta="Extend my team"
        image="https://picsum.photos/seed/team/600/400"
      />
      <ProblemRow 
        num={2}
        question="Spending on ads, but can’t prove what’s working?"
        solution="We set up clean tracking, build proper attribution, and design experiments so every dollar has a job. No more guessing which campaign actually drives revenue or MQLs."
        cta="Fix my tracking"
        image="https://picsum.photos/seed/ads/600/400"
      />
      <ProblemRow 
        num={3}
        question="Lots of traffic, but not enough conversions?"
        solution="We audit your funnels and landing pages, identify friction points, and run CRO experiments to convert visitors into customers. We fix the leaks in your growth engine."
        cta="Audit my funnel"
        image="https://picsum.photos/seed/conversion/600/400"
      />
    </section>
  );
};

export default ProblemsWeSolve;
