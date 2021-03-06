import React, { useState } from 'react';
import powerIcon from '@iconify/icons-bi/power';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EN2KR from '../utils/EN2KR';
import { createSwitch } from '../api/switch';
import { store } from '../redux/store/index';
import { createReport } from '../api/report';

PowerToggleButton.propTypes = {
  device: PropTypes.object
};

export default function PowerToggleButton({ device }) {
  const { name, status, machine_id: machineId } = device;
  const [selected, setSelected] = useState(status);
  const theme = useTheme();

  function toggleSwitch(status) {
    const req = {
      name,
      status,
      machine_id: machineId,
      controlledBy: store.getState().authentication.status.currentUser
    };
    createSwitch(req).then((res) => {
      if (res.data === null) {
        createReport({
          problem:
            'PowerToggleButton 컴포넌트에서 해당 유저를 찾을 수 없습니다. User 테이블 검사바랍니다.',
          level: 3
        });
      }
    });
  }
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography sx={{ fontSize: '0.8em', fontWeight: '900' }}>{EN2KR[name]}</Typography>
      <IconButton
        value="check"
        selected={selected}
        onClick={() => {
          toggleSwitch(!selected);
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
