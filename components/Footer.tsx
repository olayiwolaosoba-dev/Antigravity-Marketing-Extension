
import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Globe, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'marketing-consulting') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const links = {
    explore: [
      { name: 'Services', href: '#' },
      { name: 'Marketing Consulting', action: () => onNavigate?.('marketing-consulting') },
      { name: 'About', href: '#' },
      { name: 'Team & Advisors', href: '#' },
      { name: 'Career', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    locations: [
      { city: 'Wroclaw', country: 'Poland' },
      { city: 'Tallinn', country: 'Estonia' },
      { city: 'Lugano', country: 'Switzerland' },
      { city: 'Lagos', country: 'Nigeria' },
      { city: 'Vancouver', country: 'Canada' },
      { city: 'Dover', country: 'USA' },
    ]
  };

  return (
    <footer className="bg-white pt-32 pb-12 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          {/* Menu Column */}
          <div className="grid grid-cols-2 gap-10">
            <ul className="space-y-4">
              {links.explore.map(link => (
                <li key={link.name}>
                  {link.action ? (
                    <button onClick={link.action} className="text-xl font-display font-bold text-text-dark hover:text-primary transition-colors text-left outline-none">
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-xl font-display font-bold text-text-dark hover:text-primary transition-colors">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 items-start">
               {[Linkedin, Twitter, Instagram, Facebook, Globe].map((Icon, i) => (
                 <a key={i} href="#" className="w-12 h-12 rounded-xl bg-bg-gray flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-all">
                   <Icon size={20} />
                 </a>
               ))}
            </div>
          </div>

          {/* Locations Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {links.locations.map(loc => (
              <a 
                key={loc.city} 
                href="#" 
                className="p-6 rounded-2xl bg-bg-gray hover:bg-white hover:shadow-xl hover:translate-y-[-2px] transition-all group border border-transparent hover:border-gray-100"
              >
                <div className="w-8 h-6 bg-gray-200 rounded-sm mb-4" />
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-text-dark">{loc.country}, {loc.city}</p>
                  <ArrowRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 gap-6">
          <div className="flex gap-8 items-center text-xs font-bold uppercase tracking-widest text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies Policy</a>
          </div>
          <div className="text-xs font-bold uppercase tracking-widest text-text-muted">
            Marketing Extension © {new Date().getFullYear()}
          </div>
        </div>

        {/* Rating strip */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 py-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-t border-gray-50">
           <span className="font-display font-black text-2xl">CLUTCH</span>
           <span className="font-display font-black text-2xl">DESIGNRUSH</span>
           <span className="font-display font-black text-2xl">UPWORK</span>
           <span className="font-display font-black text-2xl">G2</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
