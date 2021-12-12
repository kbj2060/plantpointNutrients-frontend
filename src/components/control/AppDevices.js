import { useEffect, useState } from 'react';
import { Stack, Box, Card } from '@mui/material';
import _ from 'lodash';
import { styled } from '@mui/material/styles';
import faker from 'faker';
import { getSwitch } from '../../api/switch';
import { getMachine } from '../../api/machine';
import PowerToggleButton from '../PowerToggleButton';

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
      getSwitch({ eachLast: true }).then((res) => {
        const result = res.map((r) => {
          const machine = machines.find((machine) => machine.id === r.machine_id);
          if (machine === undefined) {
            throw Error('Cannot find machine!!');
          }
          // controlledBy_id redux에 찾아서 바로 넣기
          return {
            name: machine.name,
            status: r.status,
            controlledBy_id: 1,
            machine_id: machine.id,
            section_id: machine.section_id
          };
        });
        setDevices(result);
      });
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
          p: 2
        }}
      >
        {devices.map((device, index) => (
          <Box
            key={index}
            sx={{
              px: 2,
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
