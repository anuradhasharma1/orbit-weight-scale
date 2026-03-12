export const kgToLbs = (kg) => +(kg * 2.20462).toFixed(1);
export const lbsToKg = (lbs) => +(lbs / 2.20462).toFixed(1);

export const calcPlanetWeight = (earthWeightKg, multiplier) =>
  +(earthWeightKg * multiplier).toFixed(1);

export const getAnimationType = (multiplier) => {
  if (multiplier >= 5) return "crushed";
  if (multiplier >= 1.5) return "heavy";
  if (multiplier >= 0.8) return "normal";
  if (multiplier >= 0.3) return "light";
  return "floating";
};