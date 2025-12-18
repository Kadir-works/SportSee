const LABELS_FR = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

export function formatPerformance(data) {
  // kind: {1:"cardio"...} + data: [{value, kind}]
  const perf = (data.data ?? []).map((item) => {
    const key = data.kind?.[item.kind]; // ex "cardio"
    return {
      kind: LABELS_FR[key] ?? key ?? "",
      value: item.value,
    };
  });

  return { userId: data.userId, data: perf };
}
