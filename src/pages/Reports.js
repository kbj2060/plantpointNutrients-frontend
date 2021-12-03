import { useState } from 'react';
import {
  Card,
  Table,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination
} from '@mui/material';
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { TableListHead } from '../components/table';
import REPORTLIST from '../_mocks_/report';

const TABLE_HEAD = [
  { id: 'level', label: '단계', alignRight: false },
  { id: 'name', label: '기기', alignRight: false },
  { id: 'process', label: '처리', alignRight: false },
  { id: 'date', label: '날짜', alignRight: false }
];

export default function Reports() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - REPORTLIST.length) : 0;
  const filteredUsers = REPORTLIST;
  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="History">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            에러 보고서
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 300 }}>
              <Table>
                <TableListHead headLabel={TABLE_HEAD} rowCount={REPORTLIST.length} />
                <TableBody>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, level, date, process, name } = row;
                      return (
                        <TableRow hover key={id} tabIndex={-1} role="checkbox">
                          <TableCell align="left">
                            <Label
                              variant="filled"
                              color={
                                (level === 3 && 'error') || (level === 2 && 'warning') || 'info'
                              }
                              sx={{
                                textTransform: 'uppercase'
                              }}
                            >
                              {level}
                            </Label>
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              {name}
                            </Stack>
                          </TableCell>
                          <TableCell align="left"> {process} </TableCell>
                          <TableCell align="left"> {date} </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={REPORTLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
