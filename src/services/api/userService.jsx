import api from "./api";

import authorization from "./headerConfig";

export async function createHistory(topicId, score) {
  const response = await api.post(`/user/score`,
    { topicId, score }, authorization
  );
  return response.data;
}
