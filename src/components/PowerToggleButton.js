import { useState } from 'react';
import powerIcon from '@iconify/icons-bi/power';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function PowerToggleButton({ device }) {
  const name = Object.keys(device)[0];
  const status = Object.values(device)[0];
  const [selected, setSelected] = useState(status);
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography>{name}</Typography>
      <IconButton
        value="check"
        selected={selected}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        <Icon
          icon={powerIcon}
          color={selected ? theme.palette.error.main : theme.palette.warning.darker}
          width={32}
          height={32}
        />
      </IconButton>
    </Stack>
  );
}
