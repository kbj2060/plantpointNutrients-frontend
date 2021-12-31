import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import AppDevices from '../components/control/AppDevices';

export default function Control() {
  return (
    <Page title="Control">
      <Container sx={{ alignItems: 'center' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            기기 조종
          </Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} sx={{ height: 'auto', minWidth: '250px' }}>
            <AppDevices />
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ minWidth: '250px' }}>
            <Box>
              <img
                style={{ borderRadius: '16px' }}
                alt="cctv"
                src="http://121.157.207.47:9999/?action=stream"
                width="100%"
                height="100%"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
