import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

export default function ScoreRadial({ score }) {
  const data = [{ name: "score", value: score * 100 }];

  return (
    <div
      style={{
        background: "#fbfbfb",
        padding: 20,
        borderRadius: 8,
        position: "relative",
      }}
    >
      <p style={{ margin: 0, fontWeight: "bold" }}>Score</p>

      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            innerRadius="70%"
            outerRadius="80%"
            startAngle={90}
            endAngle={450}
          >
            <RadialBar dataKey="value" cornerRadius={10} fill="#ff0101" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: 22, fontWeight: "bold" }}>
          {Math.round(score * 100)}%
        </p>
        <p style={{ margin: 0, color: "#74798C" }}>de votre objectif</p>
      </div>
    </div>
  );
}

ScoreRadial.propTypes = {
  score: PropTypes.number.isRequired, // ex 0.12
};
