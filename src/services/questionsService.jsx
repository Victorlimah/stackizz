import api from "./api";

export async function getQuestionsWithAnswers(id) {
  const response = await api.get(`/questions/${id}`);
  return response.data;
}

export async function checkAnswer(id){
  console.log(`id: ${id}`);
  const response = await api.post(`/questions/check/${id}`);
  return response.data;
}