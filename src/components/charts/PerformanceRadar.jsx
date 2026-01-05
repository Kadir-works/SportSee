import PropTypes from "prop-types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import "./PerformanceRadar.scss";

/**
 * Ordre des catégories tel que sur la maquette
 * (le radar suit strictement l’ordre du tableau)
 */
const ORDER = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Énergie",
  "Cardio",
];

export default function PerformanceRadar({ data }) {
  // On force l’ordre des données selon la maquette
  const orderedData = ORDER.map(
    (label) => data.find((item) => item.kind === label)
  ).filter(Boolean); // sécurité si une valeur manque

  return (
    <div className="performanceRadar">
      <ResponsiveContainer width="100%" height="100%" minHeight={100} minWidth={0}>
        <RadarChart data={orderedData}>
          {/* Grille du radar */}
          <PolarGrid stroke="#ffffff" radialLines={false} />

          {/* Labels autour du radar */}
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />

          {/* Zone rouge */}
          <Radar
            dataKey="value"
            fill="#ff0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceRadar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};
