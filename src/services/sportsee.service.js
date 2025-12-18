import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mock";

import { formatUser } from "../models/user.model";
import { formatActivity } from "../models/activity.model";
import { formatAverageSessions } from "../models/averageSessions.model";
import { formatPerformance } from "../models/performance.model";

export async function getUserMainData(userId) {
  const user = USER_MAIN_DATA.find((u) => u.id === Number(userId));
  if (!user) throw new Error("User not found");
  return formatUser(user);
}

export async function getUserActivity(userId) {
  const data = USER_ACTIVITY.find((u) => u.userId === Number(userId));
  if (!data) throw new Error("Activity not found");
  return formatActivity(data);
}

export async function getUserAverageSessions(userId) {
  const data = USER_AVERAGE_SESSIONS.find((u) => u.userId === Number(userId));
  if (!data) throw new Error("Average sessions not found");
  return formatAverageSessions(data);
}

export async function getUserPerformance(userId) {
  const data = USER_PERFORMANCE.find((u) => u.userId === Number(userId));
  if (!data) throw new Error("Performance not found");
  return formatPerformance(data);
}
