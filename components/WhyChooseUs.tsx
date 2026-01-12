
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      label: 'Operator-first, not agency-first',
      title: 'We’ve led in-house teams. We think in CAC, cohorts, and payback.',
      desc: 'We don\'t care about vanity impressions. We care about the metrics that show up on your P&L.'
    },
    {
      label: 'Embedded, not outsourced',
      title: 'We join your standups and act as an extension of your team.',
      desc: 'We plug into your Slack, your tools, and your leadership rhythms to co-own revenue targets.'
    },
    {
      label: 'Experiment-led growth',
      title: 'We prioritize high-velocity testing and document every learning.',
      desc: 'Instead of one big bet, we run 10 small ones to find the winners that scale predictably.'
    },
    {
      label: 'Clear reporting, no black boxes',
      title: 'You always know what’s running, what’s winning, and what’s next.',
      desc: 'No monthly "PDF reports". Real-time dashboards that tie marketing activity to business growth.'
    }
  ];

  return (
    <section className="bg-bg-gray py-32 rounded-[80px]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-6">Why Choose Us?</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Your success is <span className="text-primary">our priority</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[32px] shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
            >
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-6">{benefit.label}</p>
              <h3 className="text-2xl font-display font-bold mb-6 text-text-dark">{benefit.title}</h3>
              <p className="text-text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
