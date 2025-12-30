/**
 * Correspondance entre les numéros de jour et les lettres françaises
 * 1 = Lundi, 2 = Mardi, etc.
 */
const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

/**
 * Transforme les données de durée moyenne des sessions
 * pour le graphique en courbe
 */
export function formatAverageSessions(data) {
  const sessions = (data.sessions ?? []).map((session) => ({
    // On transforme le numéro du jour (1 à 7)
    // en lettre pour l'affichage (L M M J V S D)
    day: DAYS[session.day - 1] ?? "",

    // Durée moyenne de la session (en minutes)
    sessionLength: session.sessionLength,
  }));

  return {
    userId: data.userId,
    sessions,
  };
}
