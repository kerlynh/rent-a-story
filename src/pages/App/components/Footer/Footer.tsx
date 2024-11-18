import Pagination from "../../../../components/Pagination/Pagination";

interface Footer {
  total: number;
  page: number;
  limit: number;
  setPage: (v: number) => void;
  setLimit: (v: number) => void;
}

export function Footer({ total, page, limit, setPage, setLimit }: Footer) {
  return (
    <footer
      className={`flex flex-col fixed bottom-0 w-full backdrop-blur-xl bg-gray-400/3 border-t`}
    >
      <div className="w-full flex items-center justify-end 0">
        <Pagination
          total={total}
          page={page}
          rowsPerPage={limit}
          onPageChange={(v) => setPage(v)}
          onRowsPerPageChange={(v) => setLimit(v)}
        />
      </div>
      <div className="w-full flex items-center justify-center py-3 bg-gray-500/30">
        <p className="text-xs">© 2024 Rent A Story</p>
      </div>
    </footer>
  );
}
