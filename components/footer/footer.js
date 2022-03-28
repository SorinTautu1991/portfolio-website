import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <AppBar
        sx={{
          position: 'static',
          bottom: 0,
          background: 'linear-gradient(to right, #1a2980, #26d0ce)',
        }}
      >
        <Toolbar>
          <Grid container direction="row" p={4} gap={2}>
            <Grid item container>
              <Typography variant="h5" align="center" fontWeight="bold">
                Let`s talk!
              </Typography>
            </Grid>
            <Grid item container direction="column" gap={2}>
              <Grid item>
                <Stack direction="row" gap={1}>
                  <CallIcon width={25} height={25} />
                  <Typography fontWeight="bold">0742.409.403</Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Stack direction="row" gap={1}>
                  <EmailIcon width={25} height={25} />
                  <Typography fontWeight="bold">
                    sorin.tautu@gmail.com
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
