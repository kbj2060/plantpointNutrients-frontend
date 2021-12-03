import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import { Box, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';

// ----------------------------------------------------------------------

TableListHead.propTypes = {
  headLabel: PropTypes.array
};

export default function TableListHead({ headLabel }) {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell key={headCell.id}>
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
