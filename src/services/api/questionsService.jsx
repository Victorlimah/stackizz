import api from "./api";

import authorization from "./headerConfig";

export async function getQuestionsWithAnswers(id) {
  const response = await api.get(`/questions/${id}`, authorization);
  return response.data;
}

export async function checkAnswer(id){
  const response = await api.post(`/questions/check/${id}`, {}, authorization);
  return response.data;
}