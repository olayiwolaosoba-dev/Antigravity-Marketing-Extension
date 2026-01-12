
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Mail, Linkedin, Copy } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const budgets = ['<$5k', '$5k–$15k', '$15k–$30k', '$30k–$60k', '$60k+'];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-bg-dark pt-32 pb-40 rounded-t-[80px] overflow-hidden" id="contact-form">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-6">Contact Us</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight text-white">
            Have a growth challenge? <br />
            <span className="text-primary">Let's talk about it.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Form */}
          <div className="lg:col-span-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your Name *</label>
                    <input type="text" required placeholder="Enter your name" className="bg-transparent border-b border-white/20 py-4 text-white text-xl outline-none focus:border-primary transition-colors placeholder:text-white/10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Your Email *</label>
                    <input type="email" required placeholder="name@company.com" className="bg-transparent border-b border-white/20 py-4 text-white text-xl outline-none focus:border-primary transition-colors placeholder:text-white/10" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Company</label>
                  <input type="text" placeholder="Enter company name" className="bg-transparent border-b border-white/20 py-4 text-white text-xl outline-none focus:border-primary transition-colors placeholder:text-white/10" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Message</label>
                  <textarea rows={4} placeholder="Tell us about your goals, timeline, and channels" className="bg-transparent border-b border-white/20 py-4 text-white text-xl outline-none focus:border-primary transition-colors resize-none placeholder:text-white/10" />
                </div>

                <div className="space-y-6">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest block">Monthly Marketing Budget?</label>
                  <div className="flex flex-wrap gap-3">
                    {budgets.map(budget => (
                      <label key={budget} className="relative group cursor-pointer">
                        <input type="radio" name="budget" className="peer sr-only" />
                        <span className="px-6 py-3 rounded-full border border-white/10 text-white/60 text-sm font-bold peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary hover:bg-white/5 transition-all block">
                          {budget}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="group w-full md:w-auto bg-primary text-white px-12 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-2 hover:bg-white hover:text-text-dark transition-all duration-300">
                  Submit
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 p-16 rounded-[40px] text-center backdrop-blur-sm border border-white/10"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/20">
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">Message Received!</h3>
                <p className="text-xl text-white/60 mb-10">We'll get back to you within 24 hours to schedule your strategy audit.</p>
                <button className="bg-white text-text-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 mx-auto hover:bg-primary hover:text-white transition-all">
                  Schedule on Calendly instead
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 p-10 rounded-[32px] border border-white/10">
              <h4 className="text-white text-xl font-display font-bold mb-8">Have a project in mind?</h4>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-20 rounded-xl overflow-hidden grayscale">
                  <img src="https://picsum.photos/seed/lead/100/120" alt="Strategist" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-bold text-lg">Osoba O.</p>
                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
                  </div>
                  <p className="text-white/40 text-sm mb-4">Growth Systems Architect</p>
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Copy size={14} className="text-white" />
                    </div>
                    <span className="text-white/60 text-sm group-hover:text-white transition-colors">hello@marketingext.com</span>
                  </div>
                </div>
              </div>
              <a href="mailto:hello@marketingext.com" className="w-full py-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white font-bold hover:bg-white/5 transition-all">
                Send Email <Mail size={18} />
              </a>
            </div>

            <div className="bg-white/5 p-10 rounded-[32px] border border-white/10">
              <h4 className="text-white text-xl font-display font-bold mb-8">Interested in partnership?</h4>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-20 rounded-xl overflow-hidden grayscale">
                  <img src="https://picsum.photos/seed/partner/100/120" alt="Partner" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-bold text-lg">Motilola A.</p>
                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
                  </div>
                  <p className="text-white/40 text-sm mb-4">Client Partnerships Lead</p>
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Copy size={14} className="text-white" />
                    </div>
                    <span className="text-white/60 text-sm group-hover:text-white transition-colors">motilola@marketingext.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
