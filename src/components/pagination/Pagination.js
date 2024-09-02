// Pagination.js
import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'; // Make sure to create and import your CSS file

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={'Prevs'}
      nextLabel={'Next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakLinkClassName={'page-link'}
    />
  );
};

export default Pagination;
