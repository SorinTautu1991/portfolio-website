import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '../link/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

const StyledButton = styled(Button)({
  background: 'linear-gradient(to right, #1a2980, #26d0ce)',
  textTransform: 'none',
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Portfolio = () => {
  const [expanded, setExpanded] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const handleExpandClick = (type) => {
    setExpanded({ ...expanded, [type]: !expanded[type] });
  };
  return (
    <Grid container>
      <Grid item container justifyContent="center">
        <Typography variant="h4" align="center">
          Projects
        </Typography>
      </Grid>
      <Grid
        item
        container
        p={4}
        spacing={2}
        justifyContent={matchesSM ? 'center' : 'space-between'}
      >
        <Grid
          item
          sx={{
            '&:hover': {
              transform: 'scaleX(1.04) scaleY(1.04)',
              transition: '1s ease',
              opacity: 0.7,
            },
          }}
        >
          <Card sx={{ width: 300, minHeight: 450 }}>
            <CardMedia
              component="img"
              width="300"
              height="200"
              image="/images/tseriskconsulting.png"
              alt="TSE RISK CONSULTING WEBSITE"
            />
            <CardContent>
              <Typography variant="subtitle1">
                This website was built using Next.js, Material UI, Contentful
                CMS and deployed to Vercel.
              </Typography>
            </CardContent>
            <Collapse in={expanded.one} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="subtitle1">
                  I used Next.js for obvious performance benefits such as Static
                  generation of pages and Incremental Static Regeneration as
                  well as image optimizations. In terms of performance, it moves
                  fast. After deployment on the Vercel platform, my analytics
                  show a score between 90 and 100(which is great). I used
                  Material UI as the UI library because I consider it to be the
                  perfect fit in any situation where you need to build a UI
                  fast. Thanks to the Next.js Head component I managed to
                  optimize the website for SEO and performance. My lighthouse
                  score from the Google console shows a 100% for both
                  indicators.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions>
              <StyledButton
                component={Link}
                href="https://tseriskconsulting.ro"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{ left: '20%' }}
              >
                Go to project
              </StyledButton>
              <ExpandMore
                expand={expanded.one}
                onClick={() => handleExpandClick('one')}
                aria-expanded={expanded.one}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            '&:hover': {
              transform: 'scaleX(1.04) scaleY(1.04)',
              transition: '1s ease',
              opacity: 0.7,
            },
          }}
        >
          <Card sx={{ width: 300, minHeight: 450 }}>
            <CardMedia
              component="img"
              width="300"
              height="200"
              image="/images/foodwheel.png"
              alt="FOODWHEEL V2.0 APP"
            />
            <CardContent>
              <Typography variant="subtitle1">
                This is a web application that is still a work in progress. For
                now, I managed to complete a basic UI using Material UI, and of
                course, it is built-in Next.js.
              </Typography>
            </CardContent>
            <Collapse in={expanded.two} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="subtitle1">
                  Here, I also have authentication using the next-auth library.
                  It is functionally, anyone can log in using their Google
                  account. After login, the users can browse recipes, search for
                  certain recipes (ex: chicken, beef, etc). In terms of
                  performance, in this app, I have different situations where I
                  need to statically generate some of the pages and others need
                  to be generated dynamically on request. For the search
                  functionality, I use the SWR package backed by Vercel, which
                  is a perfect fit, because my search results are cached, and
                  only if users request something different do I make new
                  requests to the Edamam API responsible for sending the
                  recipes.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions>
              <StyledButton
                component={Link}
                href="https://foodwheel-v2-0.vercel.app/"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{ left: '20%' }}
              >
                Go to project
              </StyledButton>
              <ExpandMore
                expand={expanded.two}
                onClick={() => handleExpandClick('two')}
                aria-expanded={expanded.two}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            '&:hover': {
              transform: 'scaleX(1.04) scaleY(1.04)',
              transition: '1s ease',
              opacity: 0.7,
            },
          }}
        >
          <Card sx={{ width: 300, minHeight: 450 }}>
            <CardMedia
              component="img"
              width="300"
              height="200"
              image="/images/design.png"
              alt="DESIGN WEBSITE"
            />
            <CardContent>
              <Typography variant="subtitle1">
                This is a website that I am building for a friend of mine who is
                a designer. The website is built using Next.js, Material UI,
                Contentful CMS and deployed to Vercel.
              </Typography>
            </CardContent>
            <Collapse in={expanded.three} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="subtitle1">
                  Next.js is not meant to be a SPA(Single Page Application), but
                  regarding the fact that this is just a simple and small
                  website, I decided to go this way. In terms of performance
                  just like any other website built in Next.js, it moves
                  lightning-fast.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions>
              <StyledButton
                component={Link}
                href="https://design-website.vercel.app/"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{ left: '20%' }}
              >
                Go to project
              </StyledButton>
              <ExpandMore
                expand={expanded.three}
                onClick={() => handleExpandClick('three')}
                aria-expanded={expanded.three}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            '&:hover': {
              transform: 'scaleX(1.04) scaleY(1.04)',
              transition: '1s ease',
              opacity: 0.7,
            },
          }}
        >
          <Card sx={{ width: 300, minHeight: 450 }}>
            <CardMedia
              component="img"
              width="300"
              height="200"
              image="/images/foodwheel-v1.png"
              alt="FOODWHEEL V1.0"
            />
            <CardContent>
              <Typography variant="subtitle1">
                This is the first project I made. This was my graduation web
                application built using Java, Javascript, CSS, PostgreSQL and
                deployed to Heroku.
              </Typography>
            </CardContent>
            <Collapse in={expanded.four} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="subtitle1">
                  Unfortunately, it is not mobile responsive because I didn`t
                  have so much experience at that moment. But I was very proud
                  that after six months of hard work I managed to complete this
                  project on my own.
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions>
              <StyledButton
                component={Link}
                href="http://foodwheelapp.herokuapp.com/"
                underline="none"
                target="_blank"
                rel="noopener"
                sx={{ left: '20%' }}
              >
                Go to project
              </StyledButton>
              <ExpandMore
                expand={expanded.four}
                onClick={() => handleExpandClick('four')}
                aria-expanded={expanded.four}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
