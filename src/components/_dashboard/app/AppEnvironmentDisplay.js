import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import EN2KR from '../../../utils/EN2KR';
import formatUnit from '../../../utils/formatUnit';
import { getEnvironment } from '../../../api/environment';
import { store } from '../../../redux/store/index';
import { updateDashboardEnvironment } from '../../../redux/modules/DashboardEnvironment';
import useSubscribeEnvironmentStatus from '../../../hooks/useSubscribeEnvironmentStatus';
import { ENVIRONMENTS_STATUS_UPDATE_TIME } from '../../../config/time';

const RootStyle = styled(Card)(({ theme, bg }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: bg.darker,
  backgroundColor: bg.lighter
}));

const IconWrapperStyle = styled('div')(({ theme, bg }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: bg.darker,
  backgroundImage: `linear-gradient(135deg, ${alpha(bg.darker, 0)} 0%, ${alpha(
    bg.darker,
    0.24
  )} 100%)`
}));

AppEnvironmentDisplay.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  color: PropTypes.object
};

export default function AppEnvironmentDisplay({ label, icon, color }) {
  const value = useSubscribeEnvironmentStatus(label);

  useEffect(() => {
    const updateValue = () => {
      const filters = { limit: 1 };
      getEnvironment(label, filters).then((res) => {
        const result = res === null ? 0 : res[0].value;
        store.dispatch(updateDashboardEnvironment(label, result));
      });
    };

    updateValue();
    const eInterval = setInterval(() => {
      updateValue();
    }, ENVIRONMENTS_STATUS_UPDATE_TIME);

    return () => {
      clearInterval(eInterval);
    };
  }, []);

  return (
    <RootStyle bg={color}>
      <IconWrapperStyle bg={color}>
        <Icon icon={icon} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">
        {value} {formatUnit[label]}
      </Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {EN2KR[label]}
      </Typography>
    </RootStyle>
  );
}
