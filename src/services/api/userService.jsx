import api from "./api";

import authorization from "./headerConfig";

export async function createHistory(topicId, score) {
  const response = await api.post(`/user/score`,
    { topicId, score }, authorization
  );
  return response.data;
}

export async function getHistory() {
  const response = await api.get(`/history`, authorization);
  return response.data;
}

export async function getRanking() {
  const response = await api.get(`/ranking`, authorization);
  return response.data;
}
