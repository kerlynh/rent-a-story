import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks } from "../api/books";

export const useAllBooks = (page?: number, limit?: number) => {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => fetchAllBooks(page, limit),
  });
};
