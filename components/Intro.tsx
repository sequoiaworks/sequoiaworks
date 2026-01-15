"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="py-32 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8">
              Built with design. <br />
              <span className="text-neutral-500">Powered by engineering.</span><br />
               Scaled by AI.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Sequoia Works is a digital agency focused on lasting impact. Inspired by the Sequoia tree, we create scalable digital solutions for growing businesses.
            </p>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Our team blends design, development, and AI to build intelligent systems.
            </p>
            <p className="text-xl md:text-xl font-bold tracking-tight leading-tight mb-8">
              Built strong. Built to last.
            </p>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
