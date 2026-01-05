import PropTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./ScoreRadial.scss";

export default function ScoreRadial({ score }) {
  const percentage = Math.round(score * 100);

  // Données pour PieChart : une portion rouge + le reste transparent
  const data = [
    { name: "score", value: percentage },
    { name: "remainder", value: 100 - percentage }
  ];

  return (
    <div className="scoreRadial">
      <h2 className="scoreRadial__title">Score</h2>

      <div className="scoreRadial__chart">
        <ResponsiveContainer width="100%" height="100%" minHeight={100} minWidth={0}>
          <PieChart>
            <Pie
              data={data}
              startAngle={90}
              endAngle={90 + 360}
              innerRadius="70%"
              outerRadius="80%"
              paddingAngle={0}
              dataKey="value"
            >
              <Cell key="score" fill="#FF0101" cornerRadius="10px" />
              <Cell key="remainder" fill="#FBFBFB" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="scoreRadial__text">
        <p className="scoreRadial__percent">{percentage}%</p>
        <p className="scoreRadial__label">
          de votre <br /> objectif
        </p>
      </div>
    </div>
  );
}

ScoreRadial.propTypes = {
  score: PropTypes.number.isRequired,
};
