import "./Sidebar.scss";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="icons">
        <li>🧘</li>
        <li>🏊</li>
        <li>🚴</li>
        <li>🏋️</li>
      </ul>
      <p className="copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}
