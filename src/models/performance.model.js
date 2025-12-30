/**
 * Traduction des types de performance en français
 * Les données API sont en anglais
 */
const LABELS_FR = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

/**
 * Transforme les données de performance
 * pour le graphique radar
 */
export function formatPerformance(data) {
  const formattedData = (data.data ?? []).map((item) => {
    // Récupère la clé de performance depuis l'objet kind
    // Exemple : 1 -> "cardio"
    const key = data.kind?.[item.kind];

    return {
      // On traduit la clé en français si possible
      kind: LABELS_FR[key] ?? key ?? "",

      // Valeur de la performance
      value: item.value,
    };
  });

  return {
    userId: data.userId,
    data: formattedData,
  };
}
