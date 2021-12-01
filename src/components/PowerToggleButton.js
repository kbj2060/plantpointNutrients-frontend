import * as React from 'react';
import powerIcon from '@iconify/icons-bi/power';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

PowerToggleButton.propTypes = {
  label: PropTypes.string
};

export default function PowerToggleButton({ label }) {
  const [selected, setSelected] = React.useState(false);
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography>{label}</Typography>
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
