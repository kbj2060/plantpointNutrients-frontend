import React, { useState, useEffect } from 'react';
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
import { TableListHead } from '../components/table';
import { getReport } from '../api/report';
import { fDateTime } from '../utils/formatTime';

const TABLE_HEAD = [
  { id: 'level', label: '단계', alignRight: false },
  { id: 'problem', label: '문제', alignRight: false },
  { id: 'isFixed', label: '해결', alignRight: false },
  { id: 'createdAt', label: '날짜', alignRight: false }
];

export default function Reports() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [states, setStates] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - states.length) : 0;

  useEffect(() => {
    async function updateStates() {
      const reports = await getReport({ limit: 20 });
      const result = reports.map((report) => ({
        problem: report.problem,
        level: report.level,
        isFixed: Number(report.isFixed),
        createdAt: report.createdAt
      }));
      setStates(result);
    }
    updateStates();
  }, []);

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
                <TableListHead headLabel={TABLE_HEAD} />
                <TableBody>
                  {states
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const { level, createdAt, isFixed, problem } = row;
                      return (
                        <TableRow hover key={index} tabIndex={-1} role="checkbox">
                          <TableCell align="center">
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
                            <Stack justifyContent="center" alignItems="center" direction="row">
                              {problem}
                            </Stack>
                          </TableCell>
                          <TableCell align="center">
                            <Label variant="ghost" color={(isFixed === 0 && 'error') || 'success'}>
                              {(isFixed === 0 && '아니오') || '예'}
                            </Label>
                          </TableCell>
                          <TableCell align="center"> {fDateTime(createdAt)} </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={states.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage=""
          />
        </Card>
      </Container>
    </Page>
  );
}
