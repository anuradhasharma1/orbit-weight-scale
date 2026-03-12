import { useMemo } from "react";

const Starfield = () => {
  const stars = useMemo(() =>
    Array.from({ length: 160 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    })), []);

  const shootingStars = useMemo(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      top: Math.random() * 50,
      delay: i * 4 + Math.random() * 3,
      duration: Math.random() * 1.5 + 1,
    })), []);

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {shootingStars.map((s) => (
        <div
          key={s.id}
          className="shooting-star"
          style={{
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;