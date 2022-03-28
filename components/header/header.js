import React from 'react';
import { useAppContext } from '../../context/context';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import BackToTop from '../back-to-top/back-to-top';
import Fab from '@mui/material/Fab';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

const Offset = styled('div')({});

function Header() {
  const { mode, toggleTheme } = useAppContext();
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
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h3" align="center">
                Portfolio ~ Tautu Sorin
              </Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={toggleTheme} sx={{ height: 40 }}>
                {mode === 'light' ? (
                  <LightModeIcon
                    width={35}
                    height={35}
                    sx={{ fill: '#ff8566' }}
                  />
                ) : (
                  <DarkModeIcon
                    width={35}
                    height={35}
                    sx={{ fill: '#0000cc' }}
                  />
                )}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="primary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
}

export default Header;
