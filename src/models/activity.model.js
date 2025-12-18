export function formatActivity(data) {
  // On transforme day en numéro 1..7 pour simplifier les charts
  const sessions = (data.sessions ?? []).map((s, index) => ({
    day: index + 1,
    kilogram: s.kilogram,
    calories: s.calories,
  }));

  return { userId: data.userId, sessions };
}
