import PropTypes from "prop-types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

export default function PerformanceRadar({ data }) {
  return (
    <div
      style={{
        background: "#282d30",
        color: "#fff",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tick={{ fill: "#fff", fontSize: 12 }} />
            <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
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
