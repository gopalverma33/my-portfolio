import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
  title: "📚 NotesIn – Smart Learning Platform",
  desc: "All-in-one student learning platform offering university notes, coding resources, resume builder, quizzes, and AI-powered tools. Built with Next.js and deployed on Render with a custom domain.",
  ss: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  tech: [
    "Next.js",
    "React",
    "Node.js",
    "Gemini API",
    "Render",
    "Tailwind CSS",
    "REST API"
  ],
  live: "https://www.notesin.com",
  code: "https://github.com/gopalverma33/notesin", 
},
{
  title: "📱 Attendify QR – Smart Attendance System",
  desc: "QR-based attendance management system that allows teachers to generate QR codes and students to mark attendance securely. Designed to eliminate proxies and paperwork. Built with Next.js and deployed on Vercel.",
  ss: "../gallery/Projects/QR-Gemini.png",
  tech: [
    "Next.js",
    "React",
    "JavaScript",
    "QR Code",
    "Vercel"
  ],
  live: "https://aura-pnna.vercel.app/",
  code: "https://github.com/harshhh-45/JS",
},


  {
  title: "🏢 RealTrust Business CMS",
  desc: "Full-stack MERN Business CMS with admin dashboard to manage projects, clients, contacts, and newsletter subscribers. Deployed on Vercel (frontend) and Render (backend).",
  ss: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  tech: [
    "React",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "REST API",
    "Vercel",
    "Render"
  ],
  live: "https://real-trust-business-cms2-bgtjpzij7.vercel.app",
  code: "https://github.com/gopalverma33/real-trust-business-cms2",
},


  
  {
    title: "💼 Portfolio Website",
    desc: "Modern portfolio built with React + Framer Motion with smooth animations and clean UI.",
    ss: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
    live: "https://my-portfolio-6qvo.vercel.app/",
    code: "https://github.com/gopalverma33/my-portfolio.git",
  },
  
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
