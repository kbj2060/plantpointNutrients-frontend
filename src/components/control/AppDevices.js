import { Stack, Box, Card } from '@mui/material';
import faker from 'faker';
import { styled } from '@mui/material/styles';
import PowerToggleButton from '../PowerToggleButton';

const LABELS = [...Array(6)].map(() => ({ label: faker.name.lastName() }));
const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  color: theme.palette.warning.darker,
  backgroundColor: theme.palette.warning.lighter
}));

export default function AppDevices() {
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
        {LABELS.map((label) => (
          <Box
            key={label}
            sx={{
              px: 2,
              py: 1,
              flex: '1 1 50%',
              maxWidth: '50%'
            }}
          >
            <PowerToggleButton label={label.label} />
          </Box>
        ))}
      </Stack>
    </RootStyle>
  );
}
