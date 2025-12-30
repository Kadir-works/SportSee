import axios from "axios";
import { USE_MOCK, API_BASE_URL } from "./config";

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

// ------- Helpers API -------
async function fetchApi(path) {
  const url = `${API_BASE_URL}${path}`;
  const res = await axios.get(url);
  // Le backend OC renvoie souvent { data: { ... } }
  return res.data?.data ?? res.data;
}

// ------- MAIN -------
export async function getUserMainData(userId) {
  console.log("USE_MOCK =", USE_MOCK);
  if (USE_MOCK) {
    const user = USER_MAIN_DATA.find((u) => u.id === Number(userId));
    if (!user) throw new Error("User not found (mock)");
    return formatUser(user);
  }

  const apiData = await fetchApi(`/user/${userId}`);
  return formatUser(apiData);
}

// ------- ACTIVITY -------
export async function getUserActivity(userId) {
  if (USE_MOCK) {
    const data = USER_ACTIVITY.find((u) => u.userId === Number(userId));
    if (!data) throw new Error("Activity not found (mock)");
    return formatActivity(data);
  }

  const apiData = await fetchApi(`/user/${userId}/activity`);
  return formatActivity(apiData);
}

// ------- AVERAGE SESSIONS -------
export async function getUserAverageSessions(userId) {
  if (USE_MOCK) {
    const data = USER_AVERAGE_SESSIONS.find((u) => u.userId === Number(userId));
    if (!data) throw new Error("Average sessions not found (mock)");
    return formatAverageSessions(data);
  }

  const apiData = await fetchApi(`/user/${userId}/average-sessions`);
  return formatAverageSessions(apiData);
}

// ------- PERFORMANCE -------
export async function getUserPerformance(userId) {
  if (USE_MOCK) {
    const data = USER_PERFORMANCE.find((u) => u.userId === Number(userId));
    if (!data) throw new Error("Performance not found (mock)");
    return formatPerformance(data);
  }

  const apiData = await fetchApi(`/user/${userId}/performance`);
  return formatPerformance(apiData);
}
