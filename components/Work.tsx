import React from "react";
import { motion } from "framer-motion";
import pic1 from "../images/Strangers.png";
import pic3 from "../images/codegenie.jpeg";
import pic4 from "../images/agent ai.png";

const allProjects = [
  {
    title: "Strangers",
    category: "Cultural website / Frontend",
    image: pic1,
    details:
      "Developed a responsive, user-friendly website for a Rotaract Club cultural event as a freelance client project. Implemented seamless functionality and modern UI components to enhance user engagement. Tech Stack: HTML, CSS, JavaScript, Tailwind CSS, React",
  },
  {
    title: "Lead Generation",
    category: "AI / ML",
    image:
      "https://onecity.co.in/blog/wp-content/uploads/2022/04/Lead-Generation.jpg",
    details:
      "An AI-driven lead generation solution that automates user data analysis and improves conversion through intelligent targeting.",
  },
  {
    title: "Codegenie",
    category: "AI / LLM",
    image: pic3,
    details:
      "AI Code Generation & Voice-Enabled Developer Platform:  Built a Streamlit full-stack AI app with OAuth, OTP login, and LLM-powered code generation Gemma-2B-IT, Phi-2, CodeBERT From Hugging Face plus optimized TTS voice output. Developed a scalable MongoDB Atlas backend with a Plotly Multi analytics dashboard; collaborated using GitHub, APIs, and Docker for integration and deployment.",
  },
  {
    title: "Multi-Agent AI",
    category: "AI Automation",
    image: pic4,
    details:
      "AI Powered Personal Assistant :   AI professional personal assistant with multi-agent automation and voice-calling assistant using n8n and RetelAI. Integrating OpenAI, Gemini, SerpAPI, Airtable, and WhatsApp/Telegram APIs for task handling, reminders, updates, and calendar bookings, Auto Social media post scheduling and LinkedIn lead generation results in Google Sheets.",
  },
];

const Work: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-serif italic mb-20"
        >
          All Works
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {allProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 mb-2 block">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-serif italic mb-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Details */}
                  <p className="text-sm text-white/80 leading-relaxed">
                    {project.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
