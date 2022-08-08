import api from "./api";

export async function getTopics(id) {
  const response = await api.get(`/topic/${id}`);
  return response.data;
}
