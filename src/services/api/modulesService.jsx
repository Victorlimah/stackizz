import api from "./api";

import authorization from "./headerConfig";

export async function getModules() {
  const response = await api.get("/modules", authorization);
  return response.data;
}