import { Pagination } from "@mui/material";

interface Props {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalProducts: number;
  productsPerPage: number;
}

export default function PaginationControls({
  currentPage,
  setCurrentPage,
  totalProducts,
  productsPerPage,
}: Props) {
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-lg p-4 flex justify-center items-center">
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={(_, page) => setCurrentPage(page)}
        color="primary"
        variant="outlined"
        shape="rounded"
        size="medium"
      />
    </div>
  );
}
