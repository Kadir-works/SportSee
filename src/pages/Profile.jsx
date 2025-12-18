import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../services/sportsee.service";
import ActivityChart from "../components/charts/ActivityChart";
import AverageSessionsChart from "../components/charts/AverageSessionsChart";
import PerformanceRadar from "../components/charts/PerformanceRadar";
import ScoreRadial from "../components/charts/ScoreRadial";
import "./Profile.scss";
import KeyDataCards from "../components/cards/KeyDataCards";






export default function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [avg, setAvg] = useState(null);
  const [perf, setPerf] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setUser(null);
    setActivity(null);
    setAvg(null);
    setPerf(null);

    Promise.all([
      getUserMainData(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ])
      .then(([u, a, av, p]) => {
        setUser(u);
        setActivity(a);
        setAvg(av);
        setPerf(p);
      })
      .catch((e) => setError(e.message));
  }, [id]);

  const loading = !error && (!user || !activity || !avg || !perf);

  return (
    <Layout>
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      {loading && <p>Chargement...</p>}

      {user && (
  <>
    <h1>
      Bonjour <span style={{ color: "red" }}>{user.firstName}</span>
    </h1>
    <p>Score: {Math.round(user.score * 100)}%</p>

    <div className="profile">
      {/* LEFT */}
      <div className="profile__charts">
        {activity && <ActivityChart sessions={activity.sessions} />}

        <div className="profile__bottom">
          {avg && <AverageSessionsChart sessions={avg.sessions} />}
          {perf && <PerformanceRadar data={perf.data} />}
          <ScoreRadial score={user.score} />
        </div>
      </div>

      {/* RIGHT */}
      <KeyDataCards data={user.keyData} />
    </div>
  </>
)}

    </Layout>
  );
}
