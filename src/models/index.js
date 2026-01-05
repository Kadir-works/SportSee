/**
 * Centralise tous les formatters de données dans une seule classe.
 * On expose à la fois la classe (`default`) et des fonctions nommées
 * pour garder la compatibilité avec l'existant.
 */

const DAYS = ["L", "M", "M", "J", "V", "S", "D"];

const LABELS_FR = {
  cardio: "Cardio",
  energy: "Énergie",
  endurance: "Endurance",
  strength: "Force",
  speed: "Vitesse",
  intensity: "Intensité",
};

class Models {
  // User
  static formatUser(data) {
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

  // Activity
  static formatActivity(data) {
    const sessions = (data.sessions ?? []).map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories,
    }));

    return {
      userId: data.userId,
      sessions,
    };
  }

  // Average sessions
  static formatAverageSessions(data) {
    const sessions = (data.sessions ?? []).map((session) => ({
      day: DAYS[session.day - 1] ?? "",
      sessionLength: session.sessionLength,
    }));

    return {
      userId: data.userId,
      sessions,
    };
  }

  // Performance
  static formatPerformance(data) {
    const formattedData = (data.data ?? []).map((item) => {
      const key = data.kind?.[item.kind];
      return {
        kind: LABELS_FR[key] ?? key ?? "",
        value: item.value,
      };
    });

    return {
      userId: data.userId,
      data: formattedData,
    };
  }
}

export const formatUser = Models.formatUser;
export const formatActivity = Models.formatActivity;
export const formatAverageSessions = Models.formatAverageSessions;
export const formatPerformance = Models.formatPerformance;

export default Models;

