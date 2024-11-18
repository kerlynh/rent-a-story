import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks } from "../api/books";

export const useAllBooks = (
  page: number,
  limit?: number,
  searchBy?: "title" | "author",
  searchTerm?: string | null,
  available?: boolean
) => {
  return useQuery({
    queryKey: ["books", page, limit, searchBy, searchTerm, available],
    queryFn: () => fetchAllBooks(page, limit, searchBy, searchTerm, available),
  });
};
