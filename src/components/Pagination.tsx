import React from 'react';
import styles from '@/components/Pagination.module.css';

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPage, onPageChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles.pageButton}>
        &lt;
      </button>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.pageButton} ${currentPage === page ? styles.activePageButton : ''}`}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage} disabled={currentPage === totalPage} className={styles.pageButton}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
