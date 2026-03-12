import { useState } from "react";
import { getAnimationType } from "../utils/conversions";

const AstronautMoji = ({ type }) => {
  const mojiMap = {
    crushed: "/emojis/crushed.png",
    heavy: "emojis/vinyl.png",
    normal: "emojis/same.png",
    light: "emojis/float.png",
    floating: "emojis/material.png",
  };
  const classMap = {
    crushed: "astro-crushed",
    heavy: "astro-heavy",
    normal: "astro-normal",
    light: "astro-light",
    floating: "astro-floating",
  };

  const value = mojiMap[type];
  const isImage = value?.endsWith(".png") || value?.endsWith(".svg");

  return (
    <span className={`astro-emoji ${classMap[type]}`}>
      {isImage
        ? <img src={value} alt={type} width={24} height={24} style={{ display: "inline-block", filter: type === "light" ? "invert(1)" : "none" }} />
        : value
      }
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
        <img
          src={planet.icon}
          alt={planet.name}
          width={64}
          height={64}
          style={{ borderRadius: "50%", position: "relative", zIndex: 1 }}
        />
        
      </div>

      {/* Name */}
      <div className="planet-name">{planet.name}</div>
      <div className="planet-desc">{planet.description}</div>

      {/* Weight display */}
      {hasWeight ? (
        <div className="weight-display">
          <span className="weight-value">{weight}</span>
          <span className="weight-unit">{unit}</span>
          <AstronautMoji type={animType} />
        </div>
      ) : (
        <div className="weight-placeholder">— {unit}</div>
      )}

      {/* Gravity tag */}
      <div
        className="gravity-tag"
        style={{
          color: planet.color,
          borderColor: `${planet.color}44`,
          background: `${planet.glowColor}`,
        }}
      >
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