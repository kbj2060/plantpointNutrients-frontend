import { styled } from '@mui/material/styles';
import { Card, Container, Grid } from '@mui/material';
import Page from '../components/Page';
import AppDevices from '../components/control/AppDevices';

export default function Control() {
  return (
    <Page title="Control">
      <Container>
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
