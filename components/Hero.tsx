
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-indigo-500/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 bg-white/5">
            Design in Details
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-8">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            DESIGNED TO <span className="font-serif italic font-normal text-neutral-400">Perform.</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            BUILT TO <span className="font-serif italic font-normal text-neutral-400">Last.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12"
        >
          Crafting intelligent digital solutions that connect with audiences and move businesses forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={() =>{
            const workSection = document.getElementById('contact');
            if (workSection) {
              workSection.scrollIntoView({ behavior: 'smooth' });
              
            }
          }}
          className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
          </button>
          <button 
          onClick={() =>{
            const workSection = document.getElementById('work');
            if (workSection) {
              workSection.scrollIntoView({ behavior: 'smooth' });
              
            }
          }}
            className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all"
          >
            See our work
          </button>
        </motion.div>
      </div>

      {/* Floating UI Elements Mockup (Aesthetic) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-20 w-full max-w-6xl mx-auto relative px-4"
      >
        <div className="relative group perspective-1000">
          <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-indigo-500/10">
            <img 
              src="https://picsum.photos/seed/agency-hero/1600/900" 
              alt="Studio Showcase" 
              className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
