import { useEffect, useRef, useState } from "react";
import { Code, Timer, Cpu, Trophy, Gamepad2 } from "lucide-react";

import "./About.css";

export function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [extraVisible, setExtraVisible] = useState(false);
  const [hobbiesVisible, setHobbiesVisible] = useState(false);

  const containerRef = useRef(null);
  const infoRef = useRef(null);
  const extraRef = useRef(null);

  /* ===== TITLE REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setTitleVisible(true),
      { threshold: 0.5 }
    );
    const intro = document.querySelector(".about-intro-screen");
    if (intro) observer.observe(intro);
    return () => observer.disconnect();
  }, []);

  /* ===== IMAGE SCROLL ===== */
  useEffect(() => {
    const NAVBAR_HEIGHT = 80;
    const IMAGE_STOP_OFFSET = 60;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = Math.max(
        0,
        NAVBAR_HEIGHT + IMAGE_STOP_OFFSET - rect.top
      );
      const progress = Math.min(scrolled / (window.innerHeight * 0.25), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===== WHO AM I REVEAL ===== */
  useEffect(() => {
    let triggered = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;

          setTimeout(() => {
            setInfoVisible(true);
            setTimeout(() => {
              const el = document.querySelector(".whoami-title");
              el?.classList.add("type");
            }, 200);
          }, 1000);
        }
      },
      { threshold: 0.7 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== EXTRA REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setExtraVisible(true),
      { threshold: 0.3 }
    );
    if (extraRef.current) observer.observe(extraRef.current);
    return () => observer.disconnect();
  }, []);

  /* ===== HOBBIES REVEAL ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHobbiesVisible(true),
      { threshold: 0.3 }
    );
    const hobbiesElement = document.querySelector(".about-hobbies");
    if (hobbiesElement) observer.observe(hobbiesElement);
    return () => observer.disconnect();
  }, []);

  /* ===== COUNTERS ===== */
  const counters = [
    { icon: Code, label: "Projects Completed", value: 4 },
    { icon: Timer, label: "Months Experience in Development", value: 3 },
    { icon: Cpu, label: "Technologies Mastered", value: 10 },
    // { icon: Trophy, label: "LeetCode Solved", value: 1000 },
  ];

  const [countValues, setCountValues] = useState(counters.map(() => 0));

  useEffect(() => {
    if (!extraVisible) return;

    counters.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const interval = setInterval(() => {
        start++;
        setCountValues((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
        if (start === end) clearInterval(interval);
      }, 1500 / counter.value);
    });
  }, [extraVisible]);

  /* ===== IMAGE + TEXT ===== */
  const getImageWidth = () =>
    scrollProgress < 0.2
      ? 100
      : scrollProgress < 0.6
      ? 100 - ((scrollProgress - 0.4) / 0.2) * 50
      : 50;

  const NAVBAR_HEIGHT = 80;

  const getImageTransform = () =>
    scrollProgress < 0.2
      ? `translateY(${
          100 - (scrollProgress / 0.2) * 100 + NAVBAR_HEIGHT
        }px)`
      : `translateY(${NAVBAR_HEIGHT}px)`;

  const getTextOpacity = () =>
    scrollProgress < 0.4
      ? 0
      : scrollProgress < 0.6
      ? (scrollProgress - 0.4) / 0.2
      : 1;

  return (
    <section id="about" className="about-wrapper">
      {/* INTRO TITLE */}
      <div className={`about-intro-screen ${titleVisible ? "show-title" : ""}`}>
        <h1>
          About <span className="grad">me?</span>
        </h1>
      </div>

      {/* MAIN SCROLL AREA */}
      <div ref={containerRef} className="about-scroll">
        <div className="about-sticky">
          {/* IMAGE */}
          <div
            className="about-image"
            style={{
              width: `${getImageWidth()}%`,
              transform: getImageTransform(),
            }}
          >
            <img src="./temp6.png" alt="Profile" />
          </div>

          {/* INFO PANEL */}
          <div
            ref={infoRef}
            className={`about-info ${infoVisible ? "info-show" : ""}`}
            style={{
              opacity: infoVisible ? getTextOpacity() : 0,
              width: infoVisible
                ? getImageWidth() > 60
                  ? "0%"
                  : "50%"
                : "0%",
            }}
          >
            <div className="info-inner">
              <h2 className="whoami-title">
                <span>Who am I?</span>
              </h2>

          <p>
  I’m Gopal Verma, a Full-Stack Developer focused on building scalable,
  high-quality web applications using modern technologies such as React,
  Next.js, Node.js, and the MERN stack.
</p>

<p>
  I have a strong interest in creating clean user interfaces, smooth
  interactions, and well-structured backend systems, ensuring performance,
  usability, and maintainability across applications.
</p>

<p>
  I am a B.Tech student with hands-on experience in full-stack development
  through real-world projects. I am actively seeking internship or
  entry-level opportunities where I can apply my skills, learn from
  experienced teams, and contribute to impactful software solutions.
</p>


            </div>
          </div>
        </div>
      </div>

      {/* EXTRA SECTION */}
      <div
        ref={extraRef}
        className={`about-extra ${extraVisible ? "extra-show" : ""}`}
      >
        <div className="about-counters">
          {counters.map((c, i) => (
            <div key={i} className="counter-box">
              <c.icon size={42} className="counter-icon" />
              <h3>{countValues[i]}+</h3>
              <p>{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HOBBIES SECTION */}
      <div
        className={`about-hobbies ${
          hobbiesVisible ? "hobbies-show" : "hobbies-hidden"
        }`}
      >
        <h2>Hobbies & Interests</h2>
<div className="hobby-grid">
  <div className="hobby">🎧 Music</div>
  <div className="hobby">📷 Photography & Visual Storytelling</div>
  <div className="hobby">🏀 Sports & Physical Fitness</div>
  <div className="hobby">
    🌿 Travel & Nature Exploration (Hills, Mountains, Greenery, Waterfalls)
  </div>
</div>

      </div>
    </section>
  );
}
