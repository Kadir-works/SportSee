/**
 * Transforme les données d'activité quotidienne
 * pour qu'elles soient directement exploitables par Recharts
 */
export function formatActivity(data) {
  // On sécurise l'accès aux sessions :
  // si data.sessions est undefined, on utilise un tableau vide
  const sessions = (data.sessions ?? []).map((session, index) => ({
    // On transforme le jour en index numérique (1 à 7)
    // Recharts préfère des valeurs simples pour l'axe X
    day: index + 1,

    // Poids du jour (kg)
    kilogram: session.kilogram,

    // Calories brûlées du jour
    calories: session.calories,
  }));

  // On retourne un objet propre, prêt à être utilisé par le front
  return {
    userId: data.userId,
    sessions,
  };
}
