import api from "./api";

import authorization from "./headerConfig";

export async function getTopics(id) {
  const response = await api.get(`/topic/${id}`, authorization);
  return response.data;
}
