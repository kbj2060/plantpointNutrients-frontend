// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppSprayCycle,
  AppCurrentSubject,
  AppWaterSupply
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Section 1 / Plant 1</Typography>
        </Box> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppSprayCycle />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <AppWaterSupply />
          </Grid>
          {/* <Grid item xs={12} sm={6} md={3}>
            <AppWater />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTasks />
          </Grid> */}
          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid> */}
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
