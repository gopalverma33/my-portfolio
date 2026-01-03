import { useEffect, useState } from "react";
import { ArrowLeft, User, Briefcase, Trophy, Camera } from "lucide-react";
import "./GalleryPage.css";

import { PersonalGrid } from "./gallery/PersonalGrid";
import { ProjectsFeed } from "./gallery/ProjectsFeed";
import { AchievementsFeed } from "./gallery/AchievementsFeed";
import { PhotographyFrames } from "./gallery/PhotographyFrames";

export function GalleryPage({ theme, onBack }) {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("personal");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { key: "personal", name: "Personal Life", icon: User },
    { key: "projects", name: "Projects & Work", icon: Briefcase },
    { key: "achievements", name: "Achievements", icon: Trophy },
    { key: "photography", name: "Photography Lab", icon: Camera },
  ];

  return (
    <div className="gallery-container">
      {/* NAVBAR */}
      <nav className="gallery-navbar">
        <h2
          className="gallery-title"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          My <span>Collections</span>
        </h2>

        <div className="gallery-links">
          {categories.map((c) => (
            <p
              key={c.key}
              className={activeCategory === c.key ? "active-link" : ""}
              onClick={() => setActiveCategory(c.key)}
            >
              <c.icon size={18} style={{ marginRight: "6px" }} />
              {c.name}
            </p>
          ))}
        </div>

        {/* BACK BUTTON */}
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back To Portfolio
        </button>
      </nav>

      {/* CATEGORY CONTENT */}
      <section className="category-section animate">
        {activeCategory === "personal" && <PersonalGrid />}
        {activeCategory === "projects" && <ProjectsFeed />}
        {activeCategory === "achievements" && <AchievementsFeed />}
        {activeCategory === "photography" && <PhotographyFrames />}
      </section>
    </div>
  );
}
