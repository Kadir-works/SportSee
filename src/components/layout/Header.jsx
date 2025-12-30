import "./Header.scss";
import logo from "../../assets/logo/logo-sportsee.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="SportSee logo" /></div>
      <nav className="nav">
        <a href="/">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </nav>
    </header>
  );
}
