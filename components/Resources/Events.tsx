import React, { useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import ContactSection from '../ContactSection';

const Events: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-bg-light min-h-screen pt-24">
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h1 className="text-6xl font-display font-bold text-text-dark mb-6">Events & Summits</h1>
                    <p className="text-xl text-text-muted max-w-2xl mb-16">
                        Join us for exclusive gatherings of marketing leaders.
                    </p>

                    <div className="space-y-6">
                        {[
                            { title: "The State of AI Marketing 2026", date: "Oct 12, 2026", loc: "Virtual Summit", type: "Upcoming" },
                            { title: "CMO Breakfast Series", date: "Nov 05, 2026", loc: "New York, NY", type: "Upcoming" },
                            { title: "Growth Marketing Conference", date: "Sep 15, 2026", loc: "London, UK", type: "Past" }
                        ].map((evt, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer shadow-sm hover:shadow-lg">
                                <div className="flex gap-8 items-center">
                                    <div className="text-center w-20">
                                        <div className="text-sm font-bold text-text-muted uppercase">{evt.date.split(',')[0].split(' ')[0]}</div>
                                        <div className="text-3xl font-bold text-text-dark">{evt.date.split(',')[0].split(' ')[1]}</div>
                                    </div>
                                    <div>
                                        <span className={`text-xs font-bold uppercase px-2 py-1 rounded mb-2 inline-block ${evt.type === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                            {evt.type}
                                        </span>
                                        <h3 className="text-2xl font-bold font-display text-text-dark group-hover:text-primary transition-colors">{evt.title}</h3>
                                        <div className="flex items-center gap-2 text-text-muted mt-1 text-sm font-medium">
                                            <MapPin size={14} /> {evt.loc}
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-gray-200 font-bold hover:bg-text-dark hover:text-white transition-colors flex items-center gap-2 self-start md:self-auto">
                                    {evt.type === 'Upcoming' ? 'Register Now' : 'Watch Recording'} <ArrowRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactSection />
        </div>
    );
};

export default Events;
