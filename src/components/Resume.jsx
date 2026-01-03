import { motion } from "framer-motion";
import { Download, GraduationCap, Laptop, Layers } from "lucide-react";
import "./Resume.css";

export function Resume() {
  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        {/* TITLE */}
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-title"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-download-top"
        >
          <a href="/resume.pdf" download className="download-btn">
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* PROFILE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="profile-box"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-name"
          >
            Gopal Verma
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="profile-info"
          >
            📚 B.Tech — Computer Science & Engineering<br />
            📍 Indore, Madhya Pradesh, India<br />
            📩 gpverma869@gmail.com | 📱 +91 7610100823
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="profile-summary"
          >
            Passionate Full-Stack Developer with hands-on experience in building responsive, scalable web
            applications. Skilled in frontend and backend development, API integration, and database management, 
            with a strong focus on delivering efficient, user-centric solutions.
          </motion.p>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <div className="icon-box education-icon">
              <GraduationCap className="icon" />
            </div>
            <h3>Education</h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree: "B.Tech in Computer Science & Engineering",
                college: "Medicaps University, Indore, Madhya Pradesh",
                period: "2022 – 2026",
                detail: "Current GPA: 7.5",
              },
              {
                degree: "Higher Secondary (12th)",
                school: "Pushp Bal Vidhya Mandir H.S. School",
                period: "2020 – 2022",
                detail: "75.6%",
              },
              {
                degree: "Higher Secondary (10th)",
                school: "Pushp Bal Vidhya Mandir H.S. School",
                period: "2019 – 2020",
                detail: "85.3%",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6 }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{edu.degree}</h4>
                <p className="resume-card-school">{edu.school}</p>
                <p className="resume-card-period">
                  {edu.period} — <span>{edu.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="resume-heading">
            <div className="icon-box project-icon">
              <Laptop className="icon" />
            </div>
            <h3>Projects</h3>
          </div>

          <ul className="project-list">
            {[
              "NotesIn – Smart Learning Platform (Next.js, Gemini API, Render)",
"Attendify QR – Smart Attendance System (Next.js, QR Code, Vercel)",
"RealTrust Business CMS – MERN Admin Dashboard (Vercel + Render)",
"Portfolio Website – React & Framer Motion Based Personal Site",

            ].map((project, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {project}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-skills"
        >
          <div className="resume-heading">
            <div className="icon-box skills-icon">
              <Layers className="icon" />
            </div>
            <h3>Skills</h3>
          </div>

<div className="skill-tags">
  {[
    // Programming Languages
    "Java", "JavaScript", "C", "C++",

    // Frontend
    "React", "Redux",
    "HTML", "CSS", "Tailwind CSS",

    // Backend
    "Node.js", "Express.js",
    "REST APIs",

    // Databases
    "MySQL", "MongoDB",

    // Dev Tools
    "Git", "GitHub", "Postman",

    // Full-Stack Essentials
    "Authentication & Authorization",
    "JWT Authentication",
    "API Integration",
    "Responsive Design",
    "Basic Deployment",

    // Soft Skills
    "Problem Solving",
    "Creativity",
    "Teamwork"
  ].map((skill) => (
    <motion.span key={skill} className="skill-chip">
      {skill}
    </motion.span>
  ))}
</div>


        </motion.div>

      </div>
    </section>
  );
}
