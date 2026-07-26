import React from "react";
import styles from "./TablePagination.module.css";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const TablePagination = ({
  currentPage = 1,
  totalPages = 10,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 20, 50, 100],
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <div className={styles.paginationContainer}>
      {/* Left */}

      <div className={styles.leftSection}>
        <div className={styles.pageInfo}>
          <span>Page</span>

          <span className={styles.currentPage}>
            {currentPage}
          </span>

          <span>of {totalPages}</span>
        </div>

        <div className={styles.rowsSection}>
          <span>Rows per page</span>

          <select
            value={rowsPerPage}
            onChange={(e) =>
              onRowsPerPageChange?.(
                Number(e.target.value)
              )
            }
          >
            {rowsPerPageOptions.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right */}

      <div className={styles.rightSection}>
        <button
          onClick={() => onPageChange?.(1)}
          disabled={currentPage === 1}
        >
          <ChevronsLeft size={16} />
        </button>

        <button
          onClick={() =>
            onPageChange?.(currentPage - 1)
          }
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </button>

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((page) => {
          if (
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1
          ) {
            return (
              <button
                key={page}
                className={
                  currentPage === page
                    ? styles.active
                    : ""
                }
                onClick={() =>
                  onPageChange?.(page)
                }
              >
                {page}
              </button>
            );
          }

          if (
            page === currentPage - 2 ||
            page === currentPage + 2
          ) {
            return (
              <span
                key={page}
                className={styles.dots}
              >
                ...
              </span>
            );
          }

          return null;
        })}

        <button
          onClick={() =>
            onPageChange?.(currentPage + 1)
          }
          disabled={
            currentPage === totalPages
          }
        >
          <ChevronRight size={16} />
        </button>

        <button
          onClick={() =>
            onPageChange?.(totalPages)
          }
          disabled={
            currentPage === totalPages
          }
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;