// material
import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import {
  AppNewUsers,
  AppWeeklySales,
  AppOrderTimeline,
  AppWebsiteVisits,
  AppDevices
} from '../components/_dashboard/app';

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Section 1 / Division 1</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4}>
            <AppDevices />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <AppWebsiteVisits />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
