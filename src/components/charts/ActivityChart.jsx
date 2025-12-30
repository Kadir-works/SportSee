import { useState } from "react";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceArea,
} from "recharts";
import "./ActivityChart.scss";

// Tooltip personnalisé
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const kg = payload.find((p) => p.dataKey === "kilogram")?.value;
    const cal = payload.find((p) => p.dataKey === "calories")?.value;

    return (
      <div className="activityChart__tooltip">
        <p>{kg}kg</p>
        <p>{cal}Kcal</p>
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

// Formatter pour afficher juste le jour du mois
const formatDayTick = (day) => {
  if (typeof day === "number") return day;
  const d = new Date(day);
  return !Number.isNaN(d.getTime()) ? d.getDate() : day;
};

export default function ActivityChart({ sessions }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // Domaines de valeurs pour les axes
  const kgValues = sessions.map((s) => s.kilogram);
  const calValues = sessions.map((s) => s.calories);

  const kgDomain = [Math.floor(Math.min(...kgValues) - 1), Math.ceil(Math.max(...kgValues) + 1)];
  const calDomain = [0, Math.ceil(Math.max(...calValues) * 1.1)];

  return (
    <div className="activityChart">
      <div className="activityChart__top">
        <h2 className="activityChart__title">Activité quotidienne</h2>
      </div>

      <div className="activityChart__container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sessions}
            barGap={8}
            barCategoryGap="35%"
            onMouseMove={(state) => {
              if (state && state.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            {/* ✅ Fond gris au survol */}
            {activeIndex !== null && sessions[activeIndex] && (
              <ReferenceArea
                x1={Number(sessions[activeIndex].day) - 0.45}
                x2={Number(sessions[activeIndex].day) + 0.45}
                strokeOpacity={0}
                fill="#F4F4F4"
              />
            )}

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={16}
              tickFormatter={formatDayTick}
              tick={{ fill: "#9B9EAC", fontSize: 14 }}
            />

            {/* ✅ Axe Y à droite */}
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              domain={kgDomain}
              allowDecimals={false}
              tick={{ fill: "#9B9EAC", fontSize: 14 }}
            />

            {/* Axe Y pour calories (invisible mais nécessaire) */}
            <YAxis yAxisId="left" hide domain={calDomain} />

            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />

            {/* ✅ Légende avec ordre respecté */}
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{ top: 0, paddingBottom: 16 }}
              payload={[
                {
                  value: "Poids (kg)",
                  type: "circle",
                  id: "kilogram",
                  color: "#282D30",
                },
                {
                  value: "Calories brûlées111111111111 (kCal)",
                  type: "circle",
                  id: "calories",
                  color: "#E60000",
                },
              ]}
            />

            <Bar
              yAxisId="right"
              dataKey="kilogram"
             
              fill="#282D30"
              radius={[3, 3, 0, 0]}
              barSize={7}
            />

            <Bar
              yAxisId="left"
              dataKey="calories"
              
              fill="#E60000"
              radius={[3, 3, 0, 0]}
              barSize={7}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

ActivityChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
