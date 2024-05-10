import React from "react";
import s from "./styles.module.scss";

interface PaginationProps {
  setPrevPage: () => void;
  setNextPage: () => void;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setPrevPage,
  setNextPage,
  setCurrentPage,
  totalPages,
  currentPage,
}) => {
  return (
    <div className={s.pagination}>
      <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        1
      </button>
      <button onClick={setPrevPage} disabled={currentPage === 1}>
        &lt;
      </button>
      <button disabled>{currentPage}</button>
      <button onClick={setNextPage} disabled={currentPage === totalPages}>
        &gt;
      </button>
      <button
        onClick={() => setCurrentPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        {totalPages}
      </button>
    </div>
  );
};

export default Pagination;
