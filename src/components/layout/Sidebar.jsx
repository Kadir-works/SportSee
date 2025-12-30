import "./Sidebar.scss";

import meditationIcon from "../../assets/icons/icon-meditation.svg";
import natationIcon from "../../assets/icons/icon-natation.svg";
import veloIcon from "../../assets/icons/icon-velo.svg";
import musculationIcon from "../../assets/icons/icon-musculation.svg";




export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="icons">
        <li>
          <img src={meditationIcon} alt="Méditation" />
        </li>
        <li>
          <img src={natationIcon} alt="Natation" />
        </li>
        <li>
          <img src={veloIcon} alt="Vélo" />
        </li>
        <li>
          <img src={musculationIcon} alt="Musculation" />
        </li>
      </ul>

      <p className="copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}
