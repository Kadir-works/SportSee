export function formatUser(data) {
  const score = data.todayScore ?? data.score ?? 0;

  return {
    id: data.id,
    firstName: data.userInfos?.firstName ?? "",
    lastName: data.userInfos?.lastName ?? "",
    age: data.userInfos?.age ?? null,
    score,
    keyData: data.keyData ?? {},
  };
}
