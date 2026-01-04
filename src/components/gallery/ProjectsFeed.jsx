import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ───────────────────────── PROJECTS DATA ───────────────────────── */
export function ProjectsFeed() {
  const projects = [
  {
    title: "NotesIn – Learning Platform",
    desc: "A full-stack MERN learning platform providing university notes, code labs, AI tools, AI tools, quizzes, and secure authentication.",
    images: [
      "/gallery/projects/notesin1.png",
      "/gallery/projects/notesin2.png",
      "/gallery/projects/notesin3.png",
    ],
  },
  {
    title: "AURA – Smart Attendance System",
    desc: "Automated attendance system using dynamic QR codes, JWT authentication, role-based access, and real-time logging.",
    images: [
      "/gallery/projects/aura1.png",
      "/gallery/projects/aura2.png",
      "/gallery/projects/aura3.png",
    ],
  },
  {
    title: "Trust Business CMS",
    desc: "A real-world business CMS built for managing clients, services, content, and inquiries with secure authentication and an admin dashboard.",
    images: [
      "/gallery/projects/cms1.png",
      "/gallery/projects/cms2.png",
      "/gallery/projects/cms3.png",
    ],
  },
  {
    title: "Personal Portfolio Website",
    desc: "Modern responsive portfolio built using React, Tailwind CSS, Framer Motion, and EmailJS, deployed on Vercel.",
    images: [
      "/gallery/projects/portfolio1.png",
      "/gallery/projects/portfolio2.png",
    ],
  },
];


  return (
    <section id="projects" className="g-projects-feed">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="g-title"
      >
        My <span className="grad">Projects</span>
      </motion.h2>

      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, duration: 0.7 }}
        >
          <GalleryProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
}

/* ───────────────────────── PROJECT CARD ───────────────────────── */

function GalleryProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () =>
    setIndex((p) => (p + 1) % project.images.length);
  const prev = () =>
    setIndex((p) => (p === 0 ? project.images.length - 1 : p - 1));

  const fade = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <>
      <div className="g-project-card">
        {/* IMAGE */}
        <div className="g-carousel" onClick={() => setOpen(true)}>
          <AnimatePresence mode="wait">
            <motion.img
              key={project.images[index]}
              src={project.images[index]}
              alt={project.title}
              className="g-cimg"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {/* NAV BUTTONS */}
        {project.images.length > 1 && (
          <div className="g-carousel-nav">
            <button
              className="g-carousel-btn"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft />
            </button>
            <button
              className="g-carousel-btn"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight />
            </button>
          </div>
        )}

        <h3 className="g-project-title">{project.title}</h3>
        <p className="g-caption">{project.desc}</p>
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="g-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <div
              className="g-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.images[index]}
                  src={project.images[index]}
                  alt="Project preview"
                  className="g-modal-img"
                  variants={fade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>

              <button
                className="g-close-modal"
                onClick={() => setOpen(false)}
              >
                <X size={30} />
              </button>

              {project.images.length > 1 && (
                <>
                  <button
                    className="g-modal-left"
                    onClick={prev}
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    className="g-modal-right"
                    onClick={next}
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
