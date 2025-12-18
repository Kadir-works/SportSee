import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">SportSee</div>
      <nav className="nav">
        <a href="/">Accueil</a>
        <a href="#">Profil</a>
        <a href="#">Réglage</a>
        <a href="#">Communauté</a>
      </nav>
    </header>
  );
}
