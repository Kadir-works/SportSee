import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Accueil</h1>
      <p>Choisis un utilisateur :</p>

      <ul>
        <li>
          <Link to="/user/12">Utilisateur 12</Link>
        </li>
        <li>
          <Link to="/user/18">Utilisateur 18</Link>
        </li>
      </ul>
    </Layout>
  );
}
