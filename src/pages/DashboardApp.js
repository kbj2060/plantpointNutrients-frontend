// material
import { useTheme } from '@emotion/react';
import { Grid, Container } from '@mui/material';
import temperature16Regular from '@iconify/icons-fluent/temperature-16-regular';
import humidityIcon from '@iconify/icons-iwwa/humidity';
import Page from '../components/Page';
import {
  AppEnvironmentDisplay,
  AppTimeline,
  AppEnvironmentsChart
} from '../components/_dashboard/app';

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={12} md={4} sx={{ minWidth: '250px' }}>
            <AppDevices />
          </Grid> */}
          <Grid item xs={6} sm={6} md={6}>
            <AppEnvironmentDisplay
              label="temperature"
              icon={temperature16Regular}
              color={theme.palette.primary}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AppEnvironmentDisplay
              label="humidity"
              icon={humidityIcon}
              color={theme.palette.info}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AppTimeline />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AppEnvironmentsChart label="temperature" />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AppEnvironmentsChart label="humidity" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
