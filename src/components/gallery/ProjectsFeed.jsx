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
        "https://github.com/user-attachments/assets/659391f6-f778-4bdf-aedd-8e20630ccd6d",
      "https://github.com/user-attachments/assets/40d1e819-71d7-4201-8c4e-63ef7aa2f03c",
      "https://github.com/user-attachments/assets/929e6da1-fdc2-4af0-a8aa-422858c2b25a",
      "https://github.com/user-attachments/assets/b0417816-fc62-4706-b29b-b6e55d61ef25",
      "https://github.com/user-attachments/assets/2fee3268-5463-4a01-aa99-f932d25d1a69",
      "https://github.com/user-attachments/assets/fa5cc4ba-71c1-479c-b9f6-1144724d5435",
    ],
  },
  {
    title: "AURA – Smart Attendance System",
    desc: "Automated attendance system using dynamic QR codes, JWT authentication, role-based access, and real-time logging.",
    images: [
         "https://github.com/user-attachments/assets/62098d66-bc3d-4290-9081-a20bcc0feb17",
"https://github.com/user-attachments/assets/49b22900-40b0-482a-be07-fc06c3adf49c",
"https://github.com/user-attachments/assets/f5acdb27-2e65-4b6b-8e3b-13e4ceaec3c3",
    ],
  },
  {
    title: "Trust Business CMS",
    desc: "A real-world business CMS built for managing clients, services, content, and inquiries with secure authentication and an admin dashboard.",
    images: [
       "https://github.com/user-attachments/assets/65802813-60fe-4e63-a133-718f45747b84",
"https://github.com/user-attachments/assets/828fb1f9-684e-4487-b616-8e3b0fda2547",
"https://github.com/user-attachments/assets/8ecee73a-a7d8-487d-ba3f-6ef52a2a93f7",
"https://github.com/user-attachments/assets/5b066eb3-b5d8-479c-9150-d387471769b7",
"https://github.com/user-attachments/assets/b4810dc6-5ea0-4e44-9fe5-a342a858bc83",
"https://github.com/user-attachments/assets/0dd01cfe-9a9c-492a-8870-23b6225d61a2",
"https://github.com/user-attachments/assets/f8370b0e-6abd-4043-8ea2-eee99a6cf684",
"https://github.com/user-attachments/assets/c6becdab-c771-49f1-8e48-6e3380017a3a",
"https://github.com/user-attachments/assets/abd451e8-a6e8-4c86-9356-5e6082a7e365",
"https://github.com/user-attachments/assets/d77fbd15-8e39-402b-b7a8-2f158b371da1",
"https://github.com/user-attachments/assets/e95ac007-af3e-40e6-ac9f-6f381e3a151b" ,
    ],
  },
  {
    title: "Personal Portfolio Website",
    desc: "Modern responsive portfolio built using React, Tailwind CSS, Framer Motion, and EmailJS, deployed on Vercel.",
    images: [
      "https://github.com/user-attachments/assets/cce4e021-edb3-4fb6-a7e8-6fdadad9cf21" ,
      "https://github.com/user-attachments/assets/023a1ac9-7650-49b5-aaa9-f50c262193c7",
      "https://github.com/user-attachments/assets/fe8ac0d5-13fb-45ce-a7c4-513a4c370121",
      "https://github.com/user-attachments/assets/3a554588-371e-482a-8305-15006d04ac58",
      "https://github.com/user-attachments/assets/f712eedb-cc40-4d71-9d50-20dbb599595a",
      "https://github.com/user-attachments/assets/d5b3f509-a00e-47c3-ab5e-2ee8aa98f4c4",
      "https://github.com/user-attachments/assets/2d499aec-ba83-4ddc-831b-0c6e2aa340f1",
      "https://github.com/user-attachments/assets/246a322b-b1e8-4ae3-8508-146835146a84",
      "https://github.com/user-attachments/assets/62d20f32-b4ce-4198-806b-d679cba912c3",
      "https://github.com/user-attachments/assets/d34919a8-58bb-4f3d-845d-64a67faf2c61",
      "https://github.com/user-attachments/assets/35745008-04e6-44b5-9ac8-23abec10adef",
      "https://github.com/user-attachments/assets/4f5a5a67-fb9c-40f5-bf3b-eb8aa3b0d0a3",
      "https://github.com/user-attachments/assets/dd7c267c-4c86-46f3-b48d-38bac7fd571a",
      "https://github.com/user-attachments/assets/2bf6d067-bbbc-4dad-b9f4-5a725e881363",

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
