import PropTypes from "prop-types";
import "./KeyDataCards.scss";
import caloriesIcon from "../../assets/keydata/icon-calories.svg";
import proteinesIcon from "../../assets/keydata/icon-proteines.svg";
import glucidesIcon from "../../assets/keydata/icon-glucides.svg";
import lipidesIcon from "../../assets/keydata/icon-lipides.svg";

export default function KeyDataCards({ data }) {
  const items = [
  {
    label: "Calories",
    value: data.calorieCount,
    unit: "kCal",
    color: "#FF0000",
    icon: caloriesIcon,
  },
  {
    label: "Protéines",
    value: data.proteinCount,
    unit: "g",
    color: "#4AB8FF",
    icon: proteinesIcon,
  },
  {
    label: "Glucides",
    value: data.carbohydrateCount,
    unit: "g",
    color: "#F9CE23",
    icon: glucidesIcon,
  },
  {
    label: "Lipides",
    value: data.lipidCount,
    unit: "g",
    color: "#FD5181",
    icon: lipidesIcon,
  },
];


  return (
    <div className="keydata">
      {items.map((item) => (
        <div className="keydata__card" key={item.label}>
          <div
            className="keydata__icon"
            style={{ backgroundColor: `${item.color}20`, color: item.color }}
          >
            <img src={item.icon} alt={item.label} />
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
