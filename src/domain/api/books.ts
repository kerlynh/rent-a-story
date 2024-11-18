import { adaptBooksResponse } from "../adapters/booksAdapter";
import { api } from "./api";

export async function fetchAllBooks(
  page?: number,
  limit?: number,
  searchBy?: "title" | "author",
  searchTerm?: string | null,
  available?: boolean
) {
  const newPage = page ? page + 1 : 1;
  let url = `/books?_page=${newPage}&_limit=${limit}`;

  if (searchTerm)
    url +=
      searchBy === "title"
        ? `&title.portuguese_like=${searchTerm}`
        : `&author_like=${searchTerm}`;

  if (available) url += `&availability=${available}`;

  // if (sortBy) {
  //   url += `&_sort=${sortBy}&_order=asc`;
  // }

  const response = await api.get(url);

  return adaptBooksResponse(response);
}
