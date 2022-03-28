import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';
import classes from '../../styles/introduction.module.css';
import Avatar from '@mui/material/Avatar';
import rocket from '../../public/images/rocket.svg';
import Stack from '@mui/material/Stack';
import code from '../../public/images/code.svg';

const Introduction = () => {
  return (
    <Grid item container p={4} alignItems="center">
      <Grid item container direction="row" justifyContent="space-between">
        <Grid item xs={6}>
          <Avatar
            alt="cv picture"
            src="/images/cv_pic.JPG"
            variant="square"
            sx={{
              width: 200,
              height: 270,
              borderRadius: 2,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid
            item
            container
            direction="column"
            justifyContent="left"
            spacing={4}
          >
            <Grid item>
              <Stack
                direction="row"
                sx={{ alignItems: 'center', justifyContent: 'space-around' }}
              >
                <Image
                  src={rocket}
                  alt="rocket"
                  width={100}
                  height={100}
                  className={classes.img}
                />
                <Typography variant="h6" align="center">
                  Goal: On my way to becoming a full stack developer.
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack
                direction="row"
                sx={{ alignItems: 'center', justifyContent: 'space-around' }}
              >
                <Image src={code} alt="code" width={100} height={100} />
                <Typography variant="h6" align="center">
                  Currently: Trying to land a junior developer job.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item mt={4}>
        <Card>
          <CardContent>
            <Typography variant="h4" align="center" mb={4}>
              Short Intro
            </Typography>
            <Typography variant="paragraph">
              Hello, and welcome to my portfolio page, my name is Tautu Sorin. I
              have always had a passion for technology and everything that
              relates to it. I am intrigued by the things we can accomplish as
              humans by manipulating technology to work in our favor. My first
              encounter with software development was in high school, where I
              studied C++. After graduation, I decided to pursue a business
              school and afterward ended up working in a different sector. After
              being involved in a business located in the security sector, in
              2019, I decided It is time to do something else. I always
              regretted not pursuing a career as a software developer so I
              decided to take action. I started learning Phyton from online
              courses and books. Meanwhile, I discovered Java and decided to
              enroll in a Java Bootcamp at Informal School of IT Cluj. For six
              months I studied Java and I developed a passion for programming. I
              trained my mind in the right direction and besides the Java
              course, I enrolled and completed several other courses from Udemy
              and other learning platforms. Working on my graduation project for
              Informal School of IT where I had to build a complete web
              application, I also studied HTML, Javascript, CSS. I quickly
              developed an interest regarding the frontend part so I learned
              more. After grasping Javascript I started to learn React and I was
              amazed by the problems it solves in terms of performance, code
              splitting, the idea of components and rerenders, etc. After
              building some projects and familiarizing myself with the React
              library I came across Next.js the production framework built on
              top of React and I was amazed again by the performance
              improvements, image optimizations, and all the good stuff you get
              out of the box. Now I can build any web application or website I
              desire and I have used tools and technologies like React, Next.js,
              Redux, Redux-toolkit, Firebase, MongoDB, PostgreSQL, Vercel,
              Framer-motion, React-native, Java, Bootstrap, Heroku, etc.
            </Typography>
            <Typography variant="h5"></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Introduction;
