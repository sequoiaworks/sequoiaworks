
import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-950/20 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-12"
        >
          Create Bold.<br />
          <span className="font-serif italic font-normal text-neutral-500">Deliver Better.</span>
        </motion.h2>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          
          <p className="text-neutral-500 text-sm font-medium tracking-widest uppercase">
            Currently accepting new projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
