import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell, TableHead, styled, Box } from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

TableListHead.propTypes = {
  headLabel: PropTypes.array
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}));

export default function TableListHead({ headLabel }) {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <StyledTableCell sx={{ padding: '10px' }} align="right" key={headCell.id}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>{headCell.label}</Box>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
