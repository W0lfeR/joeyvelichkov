import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Pagination = ({ length, callBackResult }) => {
  const [page, setPage] = useState(0);

  const handleClick = (index) => {
    if (callBackResult) {
      callBackResult(index);
    }
    setPage(index);
  };

  const PaginationItem = ({ isSelected, onClick, children }) => (
    <button
      onClick={onClick}
      className={`pagination-item${isSelected ? ' pagination-item-selected' : ''}`}>
      {children}
    </button>
  );

  return (
    <div className="pagination-placement" aria-label="Page navigation">
      <PaginationItem
        isSelected={0 === page}
        onClick={() => handleClick(page - 1)}
      >
        ⇦
      </PaginationItem>

      <PaginationItem
        isSelected={length <= 1}
        onClick={() => handleClick(page + 1)}
      >
        ⇨
      </PaginationItem>
    </div>
  );
};

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
  callBackResult: PropTypes.func.isRequired,
};

export default Pagination;
