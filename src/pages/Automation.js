import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
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
            <Grid item xs={6} sm={6} md={6}>
              <AutomationControlComponent label={c.label} icon={c.icon} color={c.color} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
