import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./ActivityChart.scss";

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const kg = payload.find((p) => p.dataKey === "kilogram")?.value;
    const cal = payload.find((p) => p.dataKey === "calories")?.value;

    return (
      <div className="activityChart__tooltip">
        <p>{kg}kg</p>
        <p>{cal}kCal</p>
      </div>
    );
  }
  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default function ActivityChart({ sessions }) {
  const chartData = sessions.map((s, index) => ({
    ...s,
    dayIndex: index + 1,
  }));

  return (
    <section className="activityChart">
      <div className="activityChart__header">
        <h2 className="activityChart__title">Activité quotidienne</h2>
        <div className="activityChart__legend">
          <span className="activityChart__legendItem">
            <span className="activityChart__dot activityChart__dot--black" /> Poids (kg)
          </span>
          <span className="activityChart__legendItem">
            <span className="activityChart__dot activityChart__dot--red" /> Calories brûlées (kCal)
          </span>
        </div>
      </div>

      <div className="activityChart__container">
        <ResponsiveContainer width="100%" height="100%" minHeight={100} minWidth={0}>
          <BarChart data={chartData} barGap={8} barCategoryGap="35%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="dayIndex" tickLine={false} axisLine={false} tickMargin={16} />
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              domain={["dataMin-1", "dataMax+1"]}
              allowDecimals={false}
            />
            <YAxis yAxisId="cal" dataKey="calories" hide />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(196, 196, 196, 0.5)" }} />
            <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" radius={[3, 3, 0, 0]} barSize={7} />
            <Bar yAxisId="cal" dataKey="calories" fill="#E60000" radius={[3, 3, 0, 0]} barSize={7} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

ActivityChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
