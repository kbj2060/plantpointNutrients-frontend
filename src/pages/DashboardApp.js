import React from 'react';
import { Grid, Container } from '@mui/material';
import { EnvironmentConfig } from '../config/environments';
import {
  AppEnvironmentDisplay,
  AppTimeline,
  AppEnvironmentsChart
} from '../components/_dashboard/app';
import Page from '../components/Page';

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {new EnvironmentConfig().config.map((c) => (
            <Grid key={c.label} item xs={6} sm={6} md={6}>
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
