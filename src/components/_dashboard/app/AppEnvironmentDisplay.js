import { Icon } from '@iconify/react';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import EN2KR from '../../../utils/EN2KR';
import formatUnit from '../../../utils/formatUnit';

const RootStyle = styled(Card)(({ theme, backgroundColor }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: backgroundColor.darker,
  backgroundColor: backgroundColor.lighter
}));

const IconWrapperStyle = styled('div')(({ theme, backgroundColor }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: backgroundColor.darker,
  backgroundImage: `linear-gradient(135deg, ${alpha(backgroundColor.darker, 0)} 0%, ${alpha(
    backgroundColor.darker,
    0.24
  )} 100%)`
}));

AppEnvironmentDisplay.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.object
};

export default function AppEnvironmentDisplay({ label, icon, color }) {
  return (
    <RootStyle backgroundColor={color}>
      <IconWrapperStyle backgroundColor={color}>
        <Icon icon={icon} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">24 {formatUnit[label]}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {EN2KR[label]}
      </Typography>
    </RootStyle>
  );
}
