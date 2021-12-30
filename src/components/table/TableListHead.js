import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, TableHead, styled } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

TableListHead.propTypes = {
  headLabel: PropTypes.array
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.darker,
    color: theme.palette.common.white
  }
}));

export default function TableListHead({ headLabel }) {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <StyledTableCell sx={{ padding: '10px' }} align="right" key={headCell.id}>
            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>{headCell.label}</TableRow>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
