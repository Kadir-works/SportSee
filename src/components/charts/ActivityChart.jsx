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

export default function ActivityChart({ sessions }) {
  return (
    <div className="activityChart">
      <h2 className="activityChart__title">Activité quotidienne</h2>

      <div className="activityChart__container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sessions} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tickLine={false} />

            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              axisLine={false}
              tickLine={false}
              domain={["dataMin-1", "dataMax+1"]}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              hide
              domain={[0, "dataMax+50"]}
            />

            <Tooltip />
            <Bar yAxisId="kg" dataKey="kilogram" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="cal" dataKey="calories" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

ActivityChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};
