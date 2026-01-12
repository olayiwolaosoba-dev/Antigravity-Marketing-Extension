import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Menu, X, ArrowRight, BookOpen, Calendar, FileText, BarChart2, Play, Layers } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: any) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Resources', id: 'resources' },
    { label: 'Pricing', id: 'pricing', noMega: true },
    { label: 'Insights', id: 'insights', noMega: true },
  ];

  const handleNavClick = (page: string) => {
    onNavigate?.(page);
    setActiveMenu(null);
    setMobileMenuOpen(false);

    // Smooth scroll to top if not already there
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Visibility logic
  const isLightMode = scrolled || activeMenu || currentPage !== 'home';
  const textColor = isLightMode ? 'text-text-dark' : 'text-white';
  const headerBg = (scrolled || activeMenu) ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6';

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${headerBg}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group outline-none">
            <div className="relative w-8 h-8 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <div className="absolute inset-0 border-[6px] border-primary rounded-full shadow-lg shadow-primary/20" />
              <div className={`w-2 h-2 rounded-full ${isLightMode ? 'bg-text-dark' : 'bg-white'}`} />
            </div>
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${textColor}`}>
              Marketing Extension
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative py-2"
                onMouseEnter={() => !item.noMega && setActiveMenu(item.id)}
              >
                <button
                  onClick={() => item.noMega && handleNavClick(item.id)}
                  className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${activeMenu === item.id ? 'text-primary' : textColor} hover:text-primary`}
                >
                  {item.label}
                  {!item.noMega && (
                    <motion.span
                      animate={{ rotate: activeMenu === item.id ? 180 : 0 }}
                      className="ml-0.5 opacity-50"
                    >
                      <ChevronRight size={14} className="rotate-90" />
                    </motion.span>
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button className={`px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${isLightMode ? 'bg-text-dark text-white hover:bg-primary shadow-lg' : 'bg-white text-text-dark hover:bg-primary hover:text-white shadow-lg'}`}>
              Book a strategy call
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${mobileMenuOpen ? 'text-text-dark' : textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mega Menus Container */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
            >
              <div className="container mx-auto px-6 max-w-7xl py-12">
                {activeMenu === 'services' && <ServicesMega onNavigate={handleNavClick} />}
                {activeMenu === 'why-us' && <WhyUsMega />}
                {activeMenu === 'resources' && <ResourcesMega onNavigate={handleNavClick} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Backdrop */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[90] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[72px] bg-bg-light z-[99] lg:hidden overflow-y-auto px-6 py-10"
          >
            <div className="flex flex-col gap-6">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => (!item.noMega ? null : handleNavClick(item.id))}
                  className="text-2xl font-display font-bold text-left border-b border-gray-100 pb-4 flex items-center justify-between"
                >
                  {item.label} {!item.noMega && <ChevronRight size={20} className="text-primary" />}
                </button>
              ))}
              <div className="pt-4 space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-text-muted">Services</p>
                <button onClick={() => handleNavClick('marketing-consulting')} className="block text-lg font-bold text-text-dark">Marketing Consulting</button>
                <button onClick={() => handleNavClick('contentplus')} className="block text-lg font-bold text-text-dark">ContentPlus</button>
                <button onClick={() => handleNavClick('martech-studio')} className="block text-lg font-bold text-text-dark">MarTech Studio</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* --- MEGA MENU COMPONENTS --- */

const ServicesMega = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [activeTab, setActiveTab] = useState('marketing-consulting');

  const pillars = [
    {
      id: 'marketing-consulting',
      label: 'Marketing Consulting',
      items: ['GTM & Launch Strategy', 'Campaign Strategy', 'Audience Research', 'Brand Narrative'],
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'contentplus',
      label: 'ContentPlus',
      items: ['Creative Design Services', 'Specialized Production', 'Copywriting', 'AI Services'],
      img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'martech-studio',
      label: 'Martech Studio',
      items: ['Web & Product Experiences', 'Marketing Automation', 'Analytics & Integration', 'AI-First Systems'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
  ];

  const active = pillars.find(p => p.id === activeTab)!;

  return (
    <div className="grid grid-cols-[250px_1fr_400px] gap-12">
      <div className="border-r border-gray-100 pr-12 flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4">Core Pillars</p>
        {pillars.map(p => (
          <button
            key={p.id}
            onMouseEnter={() => setActiveTab(p.id)}
            onClick={() => onNavigate(p.id)}
            className={`text-left py-3 px-4 rounded-xl font-display font-bold text-lg transition-all ${activeTab === p.id ? 'bg-bg-gray text-primary translate-x-2' : 'text-text-muted hover:text-text-dark'}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-display font-bold mb-8 text-text-dark">{active.label}</h3>
        <ul className="grid grid-cols-1 gap-4">
          {active.items.map(item => (
            <li key={item} className="flex items-center gap-3 group cursor-pointer" onClick={() => onNavigate(active.id)}>
              <div className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
              <span className="text-lg font-medium text-text-muted group-hover:text-text-dark transition-colors">{item}</span>
            </li>
          ))}
        </ul>
        <button onClick={() => onNavigate(active.id)} className="mt-10 flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-widest text-xs">
          Explore {active.label} <ArrowRight size={14} />
        </button>
      </div>

      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-bg-gray shadow-xl">
        <motion.img
          key={activeTab}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={active.img}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const WhyUsMega = () => {
  // ... existing content (preserved)
  const cards = [
    { id: 'talent', title: 'Strategic talent', desc: 'Senior strategists plugged directly into your roadmap.', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
    { id: 'ai', title: 'AI + Human', desc: 'Accelerated creative output through AI-augmented workflows.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600' },
    { id: 'tech', title: 'MX OS', desc: 'A unified operating system for total marketing transparency.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600' },
  ];
  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map(card => (
        <div key={card.id} className="group cursor-pointer rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all">
          <div className="aspect-[16/9] overflow-hidden"><img src={card.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" /></div>
          <div className="p-6 bg-white"><h4 className="font-display font-bold text-lg mb-2">{card.title}</h4><p className="text-sm text-text-muted">{card.desc}</p></div>
        </div>
      ))}
    </div>
  );
};

const ResourcesMega = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] gap-8">
      {/* Column 1: Learning Center */}
      <div className="flex flex-col h-full">
        <button
          onClick={() => onNavigate('resources-learn')}
          className="text-left group"
        >
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-lg font-display font-bold text-text-dark group-hover:text-primary transition-colors">Learning Center</h4>
            <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </div>
          <p className="text-sm text-text-muted mb-6">
            Access our full library of growth playbooks, GTM frameworks, and strategic guides.
          </p>
        </button>
      </div>

      {/* Column 2: Links List */}
      <div className="border-l border-gray-100 pl-8 flex flex-col gap-4">
        {[
          { label: "Events & Summits", sub: "Upcoming events and recordings", icon: Calendar, link: 'resources-events' },
          { label: "Guides", sub: "Insights from marketing leaders", icon: FileText, link: 'resources-guides' },
          { label: "Reports", sub: "Data for smarter decisions", icon: BarChart2, link: 'resources-reports' },
          { label: "Video Library", sub: "Latest videos", icon: Play, link: 'resources-videos' },
          { label: "Playbooks", sub: "Quick ways to step up your game", icon: Layers, link: 'resources-playbooks' },
        ].map((item, i) => (
          <button
            key={i}
            onClick={() => onNavigate(item.link)}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-bg-gray transition-colors group text-left"
          >
            <item.icon size={20} className="text-text-muted group-hover:text-primary mt-1 transition-colors" />
            <div>
              <div className="font-bold text-text-dark text-sm">{item.label}</div>
              <div className="text-xs text-text-muted">{item.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Column 3: Featured Story */}
      <div className="pl-8 border-l border-gray-100">
        <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">Featured Story</p>
        <div className="group cursor-pointer">
          <div className="rounded-xl overflow-hidden mb-4 relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <h5 className="font-display font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
            How a Fortune 500 doubled their AI adoption
          </h5>
          <div className="flex items-center gap-2 text-sm font-bold text-text-muted group-hover:text-primary transition-colors">
            Read Story <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
