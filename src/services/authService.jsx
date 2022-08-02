import api from './api';

export async function signin(email, password) {
  const response = await api.post("/auth/signin", { email, password });
  return response.data;
}

export async function signup(name, email, password) {
  const response = await api.post('/auth/signup', { name, email, password });
  return response.data;
}
