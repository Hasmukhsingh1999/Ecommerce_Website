"use client"
import React from 'react';
import { TablePagination } from '@mui/material';
import styled from 'styled-components';

const CenteredPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  overflow-x: hidden; 

  @media (max-width: 768px) {
    height: 100px;
  }
`;


const Pagination = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CenteredPagination>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </CenteredPagination>
  );
};

export default Pagination;
