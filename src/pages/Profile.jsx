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
import KeyDataCards from "../components/cards/KeyDataCards";

import "./Profile.scss";

export default function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [avg, setAvg] = useState(null);
  const [perf, setPerf] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // évite setState si on quitte la page

    setLoading(true);
    setError(null);

    Promise.all([
      getUserMainData(id),
      getUserActivity(id),
      getUserAverageSessions(id),
      getUserPerformance(id),
    ])
      .then(([u, a, av, p]) => {
        if (!isMounted) return;
        setUser(u);
        setActivity(a);
        setAvg(av);
        setPerf(p);
        setLoading(false);
      })
      .catch((e) => {
        if (!isMounted) return;
        setError(e.message || "Une erreur est survenue.");
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Layout>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur : {error}</p>}

      {!loading && !error && user && activity && avg && perf && (
        <>
          <div className="profile-header">
  <h1 className="profile-header__title">
    Bonjour <span>{user.firstName}</span>
  </h1>
  <p className="profile-header__subtitle">
    Félicitation ! Vous avez explosé vos objectifs hier 👏
  </p>
</div>


          <div className="profile">
            {/* LEFT */}
            <div className="profile__charts">
              <div className="profile__activity-card">
    <ActivityChart sessions={activity.sessions} />
  </div>
              <div className="profile__bottom">
  <div className="profile__small-card">
    <AverageSessionsChart sessions={avg.sessions} />
  </div>

  <div className="profile__small-card">
    <PerformanceRadar data={perf.data} />
  </div>

  <div className="profile__small-card">
    <ScoreRadial score={user.score} />
  </div>
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
