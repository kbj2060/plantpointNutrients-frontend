import bxWater from '@iconify/icons-bx/bx-water';
import cycleIcon from '@iconify/icons-entypo/cycle';
import sprayIcon from '@iconify/icons-mdi/spray';
import bottleIcon from '@iconify/icons-tabler/bottle';

import { Container, Grid, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Page from '../components/Page';
import { AutomationControlComponent } from '../components/_dashboard/automation';

export default function Automation() {
  const theme = useTheme();

  return (
    <Page title="Automation">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          자동화
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="waterSupply"
              icon={bxWater}
              color={theme.palette.info}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="waterCycle"
              icon={cycleIcon}
              color={theme.palette.warning}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="waterSpray"
              icon={sprayIcon}
              color={theme.palette.primary}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="nutrientSupply"
              icon={bottleIcon}
              color={theme.palette.error}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
