import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Page from '../components/Page';
import { AutomationControlComponent } from '../components/automation';
import { AutomationConfig } from '../config/automation';

export default function Automation() {
  return (
    <Page title="Automation">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          자동화
        </Typography>
        <Grid container spacing={3}>
          {new AutomationConfig().config.map((c) => (
            <Grid key={c.label} item xs={6} sm={6} md={6}>
              <AutomationControlComponent {...c} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
