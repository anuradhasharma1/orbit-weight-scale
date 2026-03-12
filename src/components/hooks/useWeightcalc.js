import { useState, useCallback } from "react";
import { kgToLbs, lbsToKg, calcPlanetWeight } from "../utils/conversions";

export const useWeightCalc = () => {
  const [inputValue, setInputValue] = useState("");
  const [unit, setUnit] = useState("kg");

  const earthWeightKg = useCallback(() => {
    const val = parseFloat(inputValue);
    if (isNaN(val) || val <= 0) return 0;
    return unit === "kg" ? val : lbsToKg(val);
  }, [inputValue, unit]);

  const getPlanetWeight = useCallback(
    (multiplier) => {
      const kg = earthWeightKg();
      if (!kg) return null;
      const weightKg = calcPlanetWeight(kg, multiplier);
      return unit === "kg" ? weightKg : kgToLbs(weightKg);
    },
    [earthWeightKg, unit]
  );

  const toggleUnit = () => {
    const val = parseFloat(inputValue);
    if (!isNaN(val) && val > 0) {
      if (unit === "kg") {
        setInputValue(String(kgToLbs(val)));
        setUnit("lbs");
      } else {
        setInputValue(String(lbsToKg(val)));
        setUnit("kg");
      }
    } else {
      setUnit((u) => (u === "kg" ? "lbs" : "kg"));
    }
  };

  const hasWeight = parseFloat(inputValue) > 0;

  return { inputValue, setInputValue, unit, toggleUnit, getPlanetWeight, hasWeight };
};