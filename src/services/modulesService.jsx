import api from "./api";

export async function getModules() {
  const response = await api.get("/modules");
  return response.data;
}