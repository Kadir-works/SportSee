import PropTypes from "prop-types";
import "./KeyDataCards.scss";

export default function KeyDataCards({ data }) {
  const items = [
    { label: "Calories", value: data.calorieCount, unit: "kCal", color: "#ff0000" },
    { label: "Protéines", value: data.proteinCount, unit: "g", color: "#4ab8ff" },
    { label: "Glucides", value: data.carbohydrateCount, unit: "g", color: "#fdcc0c" },
    { label: "Lipides", value: data.lipidCount, unit: "g", color: "#fd5181" },
  ];

  return (
    <div className="keydata">
      {items.map((item) => (
        <div className="keydata__card" key={item.label}>
          <div
            className="keydata__icon"
            style={{ backgroundColor: `${item.color}20`, color: item.color }}
          >
            ●
          </div>
          <div>
            <p className="keydata__value">
              {item.value}
              {item.unit}
            </p>
            <p className="keydata__label">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

KeyDataCards.propTypes = {
  data: PropTypes.shape({
    calorieCount: PropTypes.number,
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }).isRequired,
};
