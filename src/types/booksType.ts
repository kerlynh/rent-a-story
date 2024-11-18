export type BooksSearch = {
  page: number;
  limit: number;
  searchBy?: "title" | "author";
  searchTerm?: string | null;
  available?: boolean;
};
