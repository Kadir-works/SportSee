const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

export function formatAverageSessions(data) {
  const sessions = (data.sessions ?? []).map((s) => ({
    day: DAYS[s.day - 1] ?? "",
    sessionLength: s.sessionLength,
  }));

  return { userId: data.userId, sessions };
}
