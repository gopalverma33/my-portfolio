import { motion } from "framer-motion";


const FRIENDS = [
  {
    name: "Harsh Joshi",
    img: "./Harsh joshi.png",
    role: "B.Tech Student | AI & Backend Developer",
    link: "https://www.linkedin.com/in/harsh-joshi-3b4589269 ",
    intro:
      "B.Tech student passionate about AI and backend development, contributing to scalable and intelligent systems.",
    contribution:
      "Backend logic and API handling",
  },
  {
    name: "Harsh Bajaj",
    img: "harshbajaj2.png",
    role: "B.Tech Student | Frontend Developer & UI Designer",
    link: "https://www.linkedin.com/in/harsh-bajaj-4081832ab ",
    intro:
      "Frontend developer and UI designer focused on building clean, responsive, and user-friendly interfaces.",
    contribution:
      "UI design and frontend implementation",
  },
];

export function Team() {
  return (
    <section id="team" className="team-section">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="team-title"
      >
        My <span className="grad">Creative Companions</span>
      </motion.h2>

      <div className="team-grid">
        {FRIENDS.map((f, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <img src={f.img} alt={f.name} className="team-photo" />

            <div className="team-info">
              <h3 className="team-name">{f.name}</h3>
              <p className="team-role">{f.role}</p>
              <p className="team-intro">{f.intro}</p>

              <p className="team-contribution">
                <strong>Contribution:</strong> {f.contribution} for{" "}
                <strong> Attendify QR – Smart Attendance System</strong>
              </p>

              <motion.a
                href={f.link}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="team-link"
              >
                Visit Profile →
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
