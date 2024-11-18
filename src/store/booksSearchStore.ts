import { create } from "zustand";

interface BooksSearchState {
  page: number;
  limit: number;
  searchBy: "title" | "author";
  searchTerm: string | null;
  available: boolean;
  setPage: (v: number) => void;
  setLimit: (v: number) => void;
  setSearchBy: (v: "title" | "author") => void;
  setSearchTerm: (v: string | null) => void;
  setAvailable: (v: boolean) => void;
}

export const useBookSearchStore = create<BooksSearchState>((set) => ({
  page: 0,
  limit: 8,
  searchBy: "title",
  searchTerm: "",
  available: false,
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
  setSearchBy: (searchBy) => set({ searchBy }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setAvailable: (available) => set({ available }),
}));
