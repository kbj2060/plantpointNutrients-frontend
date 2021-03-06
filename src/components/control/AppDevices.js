import React, { useEffect, useState } from 'react';
import { Stack, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getSwitch, createSwitch } from '../../api/switch';
import { getMachine } from '../../api/machine';
import { createReport } from '../../api/report';
import PowerToggleButton from '../PowerToggleButton';
import { store } from '../../redux/store';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

export default function AppDevices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function updateDevices() {
      const machines = await getMachine();
      const switches = await getSwitch({ eachLast: true });
      const result = machines.map((dm) => {
        const foundMachine = switches.find((s) => dm.id === s.machine_id);
        if (foundMachine === undefined) {
          createReport({
            problem:
              'AppDevices 컴포넌트에서 Switch에 맞는 Machine을 찾을 수 없습니다. 위 두 테이블 검사바랍니다.',
            level: 1
          }).then(() => {
            const req = {
              name: dm.name,
              status: 0,
              machine_id: dm.id,
              controlledBy: store.getState().authentication.status.currentUser
            };
            createSwitch(req);
          });
        }
        return {
          name: dm.name,
          status: foundMachine === undefined ? 0 : Number(foundMachine.status),
          machine_id: dm.id
        };
      });
      setDevices(result);
    }
    updateDevices();
  }, []);

  return (
    <RootStyle>
      <Stack
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          height: '100%',
          p: 2
        }}
      >
        {devices.map((device, index) => (
          <Box
            key={index}
            sx={{
              paddingLeft: '6px',
              paddingRight: '10px',
              py: 1,
              flex: '1 1 50%',
              maxWidth: '50%'
            }}
          >
            <PowerToggleButton device={device} />
          </Box>
        ))}
      </Stack>
    </RootStyle>
  );
}
