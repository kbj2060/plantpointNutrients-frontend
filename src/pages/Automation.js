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
              label="물공급량"
              icon={bxWater}
              color={theme.palette.info}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="물교체주기"
              icon={cycleIcon}
              color={theme.palette.warning}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="분무주기"
              icon={sprayIcon}
              color={theme.palette.primary}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <AutomationControlComponent
              label="양액공급량"
              icon={bottleIcon}
              color={theme.palette.error}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
