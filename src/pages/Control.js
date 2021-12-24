import React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import AppDevices from '../components/control/AppDevices';

export default function Control() {
  return (
    <Page title="Control">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            기기 조종
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} sx={{ minWidth: '250px' }}>
            <AppDevices />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ minWidth: '250px' }} />
        </Grid>
      </Container>
    </Page>
  );
}
