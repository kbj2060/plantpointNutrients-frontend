// material
import { useTheme } from '@emotion/react';
import { Box, Grid, Container, Typography } from '@mui/material';
import temperature16Regular from '@iconify/icons-fluent/temperature-16-regular';
import humidityIcon from '@iconify/icons-iwwa/humidity';
import Page from '../components/Page';
import {
  AppEnvironmentDisplay,
  AppTimeline,
  AppEnvironmentsChart,
  AppDevices
} from '../components/_dashboard/app';

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth={false}>
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Section 1 / Division 1</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <AppDevices />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <AppEnvironmentDisplay
              label="온도"
              icon={temperature16Regular}
              color={theme.palette.primary}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <AppEnvironmentDisplay label="습도" icon={humidityIcon} color={theme.palette.info} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <AppEnvironmentsChart />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AppTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
