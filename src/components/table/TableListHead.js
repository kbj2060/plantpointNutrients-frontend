import PropTypes from 'prop-types';
import { TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';

TableListHead.propTypes = {
  headLabel: PropTypes.array
};

export default function TableListHead({ headLabel }) {
  return (
    <TableHead>
      <TableRow>
        {headLabel.map((headCell) => (
          <TableCell align="center" key={headCell.id}>
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
