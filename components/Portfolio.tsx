import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import pic1 from "../images/Strangers.png";
import pic3 from "../images/codegenie.jpeg";
import pic4 from "../images/agent ai.png";

const projects = [
  {
    title: 'Strangers',
    category: 'Frontend',
    image: pic1,
    description:
      'Developed a responsive, user-friendly website for a Rotaract Club cultural event as a freelance client project. Implemented seamless functionality and modern UI components to enhance user engagement. Tech Stack: HTML, CSS, JavaScript, Tailwind CSS, React',
  },
  {
    title: 'Lead Generation',
    category: 'AI / ML',
    image: 'https://onecity.co.in/blog/wp-content/uploads/2022/04/Lead-Generation.jpg',
    description:
      'AI-powered lead generation system that analyzes user behavior to deliver high-quality prospects.',
  },
  {
    title: 'Codegenie',
    category: 'AI / LLM',
    image: pic3,
    description:
      'AI Code Generation & Voice-Enabled Developer Platform:  Built a Streamlit full-stack AI app with OAuth, OTP login, and LLM-powered code generation Gemma-2B-IT, Phi-2, CodeBERT From Hugging Face plus optimized TTS voice output. Developed a scalable MongoDB Atlas backend with a Plotly Multi analytics dashboard; collaborated using GitHub, APIs, and Docker for integration and deployment.',
  },
  {
    title: 'Multi-Agent AI',
    category: 'AI Automation',
    image: pic4,
    description:
      'AI Powered Personal Assistant :   AI professional personal assistant with multi-agent automation and voice-calling assistant using n8n and RetelAI. Integrating OpenAI, Gemini, SerpAPI, Airtable, and WhatsApp/Telegram APIs for task handling, reminders, updates, and calendar bookings, Auto Social media post scheduling and LinkedIn lead generation results in Google Sheets.',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4"
            >
              Recent Works
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-serif italic tracking-tight"
            >
              Our Works
            </motion.h2>
          </div>

          <Link
            to="/work"
            className="group flex items-center gap-3 text-neutral-400 hover:text-white transition-all"
          >
            <span className="text-sm font-bold uppercase tracking-widest">
              View all
            </span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              →
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-2 block">
                      {project.category}
                    </span>

                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                      {project.title}
                    </h3>

                    {/* Project Details (replaces button) */}
                    <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
