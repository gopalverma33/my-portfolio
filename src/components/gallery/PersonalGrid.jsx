import { useEffect, useState } from "react";

const images = import.meta.glob("/src/assets/Personal/*.{jpg,jpeg,png,gif}", {
  eager: true,
});

export function PersonalGrid() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // delay for smooth section-switch animation
    const timer = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`masonry-wrapper ${loaded ? "show" : ""}`}>
      <div className="masonry">
        {Object.values(images).map((img, index) => (
          <div key={index} className="masonry-item">
            <img src={img.default} alt="personal" />
          </div>
        ))}
      </div>
    </div>
  );
}
