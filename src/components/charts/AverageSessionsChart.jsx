import { useState } from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import "./AverageSessionsChart.scss";

/**
 * Tooltip personnalisé (fond blanc, texte noir)
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="averageSessions__tooltip">
        {payload[0].value} min
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default function AverageSessionsChart({ sessions }) {
  // Index du point survolé
  const [activeIndex, setActiveIndex] = useState(null);

  // ✅ On ajoute un index numérique interne
  const chartData = sessions.map((s, index) => ({
    ...s,
    index,
  }));

  return (
<div className="averageSessions">
  <h2 className="averageSessions__title">
    Durée moyenne des <br /> sessions
  </h2>

  {/* ✅ Wrapper indispensable */}
  <div className="averageSessions__chart">
  <ResponsiveContainer width="100%" height="100%" minHeight={100} minWidth={0}>
      <LineChart
        data={chartData}
        margin={{ top: 10, right: 10, left: 10, bottom: 30 }}
        onMouseMove={(state) => {
          if (state?.activeTooltipIndex !== undefined) {
            setActiveIndex(state.activeTooltipIndex);
          }
        }}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {/* Zone foncée à droite au hover */}
        {activeIndex !== null && (
          <ReferenceArea
            x1={chartData[activeIndex].index}
            x2={chartData[chartData.length - 1].index}
            fill="rgba(0,0,0,0.1)"
            strokeOpacity={0}
          />
        )}

        {/* Axe X = jours */}
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickMargin={12}
          interval={0}
          tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
        />

        <YAxis hide />

        <Tooltip
          content={<CustomTooltip />}
          cursor={{ stroke: "rgba(255,255,255,0.2)", strokeWidth: 2 }}
        />

        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 4,
            fill: "#FFFFFF",
            stroke: "rgba(255,255,255,0.4)",
            strokeWidth: 8,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

  );
}

AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};
