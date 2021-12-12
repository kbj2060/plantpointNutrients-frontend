import { useState, useEffect } from 'react';
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
import USERLIST from '../_mocks_/user';
import { getMachine } from '../api/machine';
import { getSwitch } from '../api/switch';

const TABLE_HEAD = [
  { id: 'createdAt', label: '날짜', alignRight: false },
  { id: 'name', label: '기기', alignRight: false },
  { id: 'controledBy', label: '제어', alignRight: false },
  { id: 'status', label: '상태', alignRight: false }
];

export default function History() {
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

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  useEffect(() => {
    async function updateStates() {
      const switches = await getSwitch({ limit: 20 });
      const machines = await getMachine();
      console.log(switches, machines);
      const result = switches.map((_switch) => {
        const mFound = machines.find((machine) => machine.id === _switch[0].machine_id);
        return {
          name: mFound.name,
          controlledBy: _switch[1],
          status: _switch[0].status,
          createdAt: _switch[0].createdAt
        };
      });
      setStates(result);
    }
    updateStates();
  }, []);
  return (
    <Page title="History">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            스위치 기록
          </Typography>
        </Stack>

        <Card>
          <Scrollbar>
            <TableContainer sx={{ minWidth: 300 }}>
              <Table>
                <TableListHead headLabel={TABLE_HEAD} rowCount={USERLIST.length} />
                <TableBody>
                  {states
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const { name, createdAt, controlledBy, status } = row;
                      return (
                        <TableRow key={index} tabIndex={-1}>
                          <TableCell align="left">{createdAt}</TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              {name}
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{controlledBy}</TableCell>
                          <TableCell align="left">
                            <Label variant="ghost" color={(status === 0 && 'error') || 'success'}>
                              {(status === 0 && '꺼짐') || '켜짐'}
                            </Label>
                          </TableCell>
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
            count={USERLIST.length}
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
