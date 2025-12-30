/**
 * Transforme les données utilisateur principales
 * pour qu'elles soient propres et sécurisées
 */
export function formatUser(data) {
  // Certains utilisateurs ont "todayScore", d'autres "score"
  // On gère les deux cas
  const score = data.todayScore ?? data.score ?? 0;

  return {
    // Identifiant utilisateur
    id: data.id,

    // Informations personnelles
    firstName: data.userInfos?.firstName ?? "",
    lastName: data.userInfos?.lastName ?? "",
    age: data.userInfos?.age ?? null,

    // Score normalisé (entre 0 et 1)
    score,

    // Données nutritionnelles (calories, protéines, etc.)
    keyData: data.keyData ?? {},
  };
}
