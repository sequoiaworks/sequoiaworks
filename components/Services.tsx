
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, BrainCircuit, Code, WandSparkles, ChartNoAxesCombined } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'User-friendly interfaces that are easy to understand and use.',
    icon: Layout,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    title: 'Graphic Design',
    description: 'Brand visuals, creatives, and designs that look professional and consistent.',
    icon: WandSparkles,
    color: 'from-blue-600/20 to-transparent'
  },
  {
    title: 'Frontend Development',
    description: 'Turning UI/UX designs into fast, scalable, and reliable user experiences.',
    icon: Monitor,
    color: 'from-indigo-600/20 to-transparent'
  },
  {
    title: 'Full-Stack Development',
    description: 'End-to-end development that connects design, data, and AI into one product.',
    icon: Code,
    color: 'from-emerald-600/20 to-transparent'
  },
  {
    title: 'Data Intelligence & Insights',
    description: 'Dashboards and reports that support better decisions.',
    icon: ChartNoAxesCombined,
    color: 'from-blue-600/20 to-transparent'
  },
  {
    title: 'AI-Powered Automation',
    description: 'Smart workflows that improve efficiency and reduce manual work.',
    icon: BrainCircuit,
    color: 'from-purple-600/20 to-transparent'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4"
          >
            What we do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Premium Solutions for <br /> Modern Brands.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-12 glass-card rounded-3xl transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-xl">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 flex items-center justify-between">
                  {service.title}
                </h3>
                
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                  {service.description}
                </p>
                
                {/* <div className="mt-12 flex items-center gap-3">
                  <span className="w-10 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-indigo-500 transition-all duration-500"></span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-600 group-hover:text-white transition-colors">Learn more</span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
