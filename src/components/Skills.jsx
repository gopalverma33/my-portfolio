import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Skills.css";

/* SKILL ICONS */
const SKILLS = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },

  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
 { 
  name: "Tailwind CSS",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"},

  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },

  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
 {
  name: "Express.js",logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},

  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];


/* SKILL TABLE DATA */
const ROWS = [
  [
    {
      title: "Programming Languages",
      items: [
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 75 },
        { name: "C++", level: 78 },
      ],
    },
    {
      title: "Frontend Development",
      items: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 85 },
        { name: "Redux", level: 75 },
      ],
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 78 },
        { name: "REST APIs", level: 85 },
        { name: "JWT Authentication", level: 75 },
      ],
    },
    {
      title: "Databases & Tools",
      items: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 78 },
        { name: "Git", level: 85 },
        { name: "Postman", level: 80 },
      ],
    },
  ],
  [
    {
      title: "Full-Stack Essentials",
      items: [
        { name: "Authentication & Authorization", level: 80 },
        { name: "API Integration", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Basic Deployment", level: 70 },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Problem Solving", level: 92 },
        { name: "Creativity", level: 90 },
        { name: "Teamwork", level: 88 },
        { name: "Adaptability", level: 85 },
        { name: "Communication", level: 82 },
      ],
    },
  ],
];


/* ANIMATIONS */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export function Skills() {
  const stageRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(stageRef, { once: true });

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => Math.hypot(p.x - x, p.y - y) < p.size / 2 + size / 2 + 40);

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;

      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 100;
      const dy = (Math.random() - 0.5) * 100;

      circle.animate(
        [{ transform: "translate(0,0)" }, { transform: `translate(${dx}px,${dy}px)` }],
        { duration: 6000, direction: "alternate", iterations: Infinity, easing: "ease-in-out" }
      );
    });
  }, []);

  return (
    <section id="skills" className="skills-container">
      <motion.div className="skills-header" variants={fadeUp} initial="hidden" animate={controls}>
        <h2 className="skills-title">
          My <span className="grad">Skills</span>
        </h2>
        <div className="skills-underline" />
        <p className="skills-description">
          ✨ Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </motion.div>

      {/* FLOATING ICON CLOUD */}
      <motion.div ref={stageRef} className="skills-stage" variants={container} initial="hidden" animate={controls}>
        {SKILLS.map((s) => (
          <motion.div key={s.name} className="skill-circle" variants={fadeUp} whileHover={{ scale: 1.3 }}>
            <img src={s.logo} className="skill-logo" alt={s.name} />
            <span className="skill-name">{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* TABLE */}
      <div className="skills-table">
        {ROWS.map((row, i) => (
          <div key={i} className="skills-row">
            {row.map((col) => (
              <motion.div
                key={col.title}
                className="skill-box"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3>{col.title}</h3>
                <ul>
                  {col.items.map((item, j) => (
                    <li key={j} className="skill-item">
                      <div className="skill-item-header">
                        <span>{item.name}</span>
                        <span className="skill-percent">{item.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div className="skill-progress-fill" style={{ width: `${item.level}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
