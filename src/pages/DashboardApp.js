// material
import { useTheme } from '@emotion/react';
import { Grid, Container } from '@mui/material';
import { EnvironmentConfig } from '../config/environments';
import Page from '../components/Page';
import {
  AppEnvironmentDisplay,
  AppTimeline,
  AppEnvironmentsChart
} from '../components/_dashboard/app';

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={2}>
          {new EnvironmentConfig().config.map((c) => (
            <Grid item xs={6} sm={6} md={6}>
              <AppEnvironmentDisplay label={c.label} icon={c.icon} color={c.color} />
            </Grid>
          ))}
          <Grid item xs={12} md={4} lg={4}>
            <AppTimeline />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <AppEnvironmentsChart />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
