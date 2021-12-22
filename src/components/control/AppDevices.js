import { useEffect, useState } from 'react';
import { Stack, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
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
      const switches = await getSwitch({ eachLast: true });
      const result = machines.map((dm) => {
        const foundMachine = switches.find((s) => dm.id === s.machine_id);
        if (foundMachine === undefined) {
          // lv3 Report created thr axios post
          // turn off the device ( axios post off )
          console.warn('Switch data fit into machine is not existed!');
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
