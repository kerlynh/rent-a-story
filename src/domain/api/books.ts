import { api } from "./api";

export async function fetchAllBooks(page = 1, limit = 10) {
  const response = await api.get(`/books?_page=${page}&_per_page=${limit}`);

  return response.data;
}
