import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Introduction from '../components/introduction/introduction';
import Portfolio from '../components/portfolio/portfolio';

function HomeScreen() {
  return (
    <Grid container>
      <Grid item container>
        <Introduction />
      </Grid>
      <Grid item container>
        <Portfolio />
      </Grid>
    </Grid>
  );
}

export default HomeScreen;
