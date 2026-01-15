
import React from 'react';
import { motion } from 'framer-motion';

const values = [
  { title: "Design-led", desc: "Crafting aesthetics that command attention." },
  { title: "Performance-focused", desc: "Built for speed, scalability, and SEO." },
  { title: "Detail-obsessed", desc: "No pixel left behind in our rigorous process." }
];

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center md:text-left border-l border-white/10 pl-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                “{val.title}”
              </h3>
              <p className="text-neutral-500 text-lg leading-relaxed font-light">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Large Aesthetic Text Reveal */}
        
      </div>
    </section>
  );
}

export default Philosophy;
