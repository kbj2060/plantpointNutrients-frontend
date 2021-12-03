import { Icon } from '@iconify/react';
import bottleIcon from '@iconify/icons-tabler/bottle';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

export default function AppBugReports() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={bottleIcon} width={27} height={27} />
      </IconWrapperStyle>
      <Typography variant="h3">30ml</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        양액공급량
      </Typography>
    </RootStyle>
  );
}
