import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";
const CERTS = {
  tech: [
    {
      title: "Cybersecurity Analyst Job Simulation",
      org: "TATA (Forage)",
      date: "Dec 2025",
      img: "/certs/Cybersecurity Analyst.jpg",
    },
    {
      title: "Solutions Architecture Job Simulation",
      org: "AWS (Forage)",
      date: "Dec 2025",
      img: "/certs/Solutions Architecture .jpg",
    },
    {
      title: "Cybersecurity Job Simulation",
      org: "Deloitte (Forage)",
      date: "Dec 2025",
      img: "/certs/Deloitte-Cyber-security.png",
    },
    {
      title: "Full Stack Development Internship",
      org: "Cyber Instant Pvt. Ltd.",
      date: "Jun–Aug 2025",
      img: "/certs/cyberinstant.jpg",
    },
    {
      title: "Web Development Internship",
      org: "TechSonix Solutions",
      date: "Apr 2025",
      img: "/certs/techsonixsolution.jpg",
    },
    {
      title: "Git & GitHub Bootcamp",
      org: "LetsUpgrade",
      date: "Mar 2025",
      img: "/certs/githubboot.jpg",
    },
    {
      title: "AINCAT 2025 (Career Aptitude Test)",
      org: "Naukri Campus",
      date: "May 2025",
      img: "/certs/Ncat.jpeg",
    },
  ],

  other: [
     {
      title: "BASH Training & Assessment",
      org: "EduPyramids • IIT Bombay",
      date: "Nov 2025",
      img: "/certs/Bash.jpg",
    },
    {
      title: "IIC B-Plan Pitch Competition",
      org: "NIT Durgapur",
      date: "2025",
      img: "/certs/planpitch.jpg",
    },
  ],
};



export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="cert-section">
      {/* SECTION ENTERS WHEN SCROLLED TO */}
      <motion.div
        className="cert-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }} // triggers closer to when you reach it
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* TITLE */}
        <h2 className="cert-title">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        <p className="cert-subtitle">
          Explore my achievements — both technical & beyond.
        </p>

        {/* TABS */}
        <div className="cert-tabs">
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cert-tab ${tab === t ? "active" : ""}`}
            >
              {t === "tech" ? "Technical" : "Other"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="certs-grid">
          {CERTS[tab].map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card"
              style={{ ["--angle"]: `${Math.random() * 8 - 4}deg` }}
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }} // each card animates when it comes in view
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedCert(c)}
            >
              <img src={c.img} alt={c.title} className="cert-img" />
              <strong>{c.title}</strong>
              <span className="cert-meta">
                {c.org} • {c.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              className="modal-img"
              src={selectedCert.img}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
