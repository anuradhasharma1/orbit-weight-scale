import { useState } from "react";
import { getAnimationType } from "../utils/conversions";

const AstronautMoji = ({ type }) => {
  const mojiMap = {
    crushed: "😵",
    heavy: "😓",
    normal: "🧑‍🚀",
    light: "😄",
    floating: "🤸",
  };
  const classMap = {
    crushed: "astro-crushed",
    heavy: "astro-heavy",
    normal: "astro-normal",
    light: "astro-light",
    floating: "astro-floating",
  };
  return (
    <span className={`astro-emoji ${classMap[type]}`}>
      {mojiMap[type]}
    </span>
  );
};

const PlanetCard = ({ planet, weight, unit, index }) => {
  const [flipped, setFlipped] = useState(false);
  const animType = getAnimationType(planet.gravityMultiplier);
  const hasWeight = weight !== null;

  const multiplierLabel =
    planet.gravityMultiplier > 1
      ? `+${((planet.gravityMultiplier - 1) * 100).toFixed(0)}% gravity`
      : planet.gravityMultiplier === 1
      ? "baseline"
      : `-${((1 - planet.gravityMultiplier) * 100).toFixed(0)}% gravity`;

  return (
    <div
      className={`planet-card ${planet.isEarth ? "earth-card" : ""}`}
      style={{
        animationDelay: `${index * 0.06}s`,
        "--planet-color": planet.color,
        "--planet-glow": planet.glowColor,
      }}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Planet orb */}
      <div className="planet-orb-wrapper">
        <div
          className="planet-orb"
          style={{ background: planet.textureGradient }}
        >
          {planet.id === "saturn" && <div className="saturn-ring" style={{ borderColor: planet.color }} />}
        </div>
        <div className="planet-glow" style={{ background: planet.glowColor }} />
      </div>

      {/* Name */}
      <div className="planet-name">{planet.name}</div>
      <div className="planet-desc">{planet.description}</div>

      {/* Weight display */}
      {hasWeight ? (
        <div className="weight-display">
          <span className="weight-value">{weight}</span>
          <span className="weight-unit">{unit}</span>
          {hasWeight && <AstronautMoji type={animType} />}
        </div>
      ) : (
        <div className="weight-placeholder">— {unit}</div>
      )}

      {/* Gravity tag */}
      <div className="gravity-tag" style={{ color: planet.color, borderColor: `${planet.color}44`, background: `${planet.glowColor}` }}>
        {multiplierLabel}
      </div>

      {/* Flip hint */}
      <div className="flip-hint">tap for fun fact</div>

      {/* Fun fact overlay */}
      {flipped && (
        <div className="fun-fact-overlay" style={{ background: `${planet.color}ee` }}>
          <span className="fun-fact-close">✕</span>
          <div className="fun-fact-emoji">{planet.emoji}</div>
          <p className="fun-fact-text">{planet.funFact}</p>
          <p className="fun-fact-gravity">Surface gravity: {planet.surfaceGravity}</p>
        </div>
      )}
    </div>
  );
};

export default PlanetCard;