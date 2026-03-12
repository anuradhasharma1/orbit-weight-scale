import PlanetCard from "./planetCard";  
import { planets } from "../data/planets";

const PlanetGrid = ({ getPlanetWeight, unit }) => {
  return (
    <div className="planet-grid">
      {planets.map((planet, i) => (
        <PlanetCard
          key={planet.id}
          planet={planet}
          weight={getPlanetWeight(planet.gravityMultiplier)}
          unit={unit}
          index={i}
        />
      ))}
    </div>
  );
};

export default PlanetGrid;