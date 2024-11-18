import TablePagination from "@mui/material/TablePagination";
import { ChangeEvent } from "react";

export interface PaginationProps {
  total: number;
  page: number;
  rowsPerPage: number;
  className?: string;
  onPageChange: (v: number) => void;
  onRowsPerPageChange: (v: number) => void;
}

export default function Pagination({
  total,
  page,
  rowsPerPage,
  className,
  onPageChange,
  onRowsPerPageChange,
}: PaginationProps) {
  const handleChangePage = (_: any | null, newPage: number) => {
    onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onRowsPerPageChange(parseInt(event.target.value, 10));
    onPageChange(0);
  };

  return (
    <TablePagination
      component="div"
      count={total}
      page={!total || total <= 0 ? 0 : page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      className={className}
      rowsPerPageOptions={[]}
      labelRowsPerPage=""
    />
  );
}
