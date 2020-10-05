import React from 'react';
import {
  Box, Card, CardContent, Link, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { withRouter, NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  background: {
    backgroundColor: '#FFD119', // TODO(alex): figure out how to access MUI theme here and in button below
    margin: '0px 0px 70px 0px',
    minHeight: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  linkNoStyle: {
    textDecoration: 'none',
  },
});

export default function CTASection(props) {
  const classes = useStyles();

  return (
    <Box className={classes.background}>
      <Typography
        variant="h2"
        style={{
          color: '#323232', marginTop: '5%', textAlign: 'center', fontWeight: '400', marginLeft: '10%', marginRight: '10%',
        }}
      > Make a difference today.
      </Typography>
      <Typography
        variant="h4"
        style={{
          color: '#323232', textAlign: 'center', fontWeight: '400', marginLeft: '10%', marginRight: '10%',
        }}
      > Signing up takes 30 seconds.
      </Typography>
      <Box style={{ display: 'flex' }}>
        <a className={classes.linkNoStyle} href="https://docs.google.com/forms/d/e/1FAIpQLSdglSmU9Aftz2uZrZAKz2ZzNVl9gfLxUwqki4KEN_K8gBtYEw/viewform?usp=sf_link">
          <Fab
            variant="extended"
            style={{
              backgroundColor: '#ffffff', margin: '50px', minWidth: '200px',
            }}
          > Help a voter in need.
          </Fab>
        </a>
        <a className={classes.linkNoStyle} href="https://docs.google.com/forms/d/e/1FAIpQLSelNqO3KWgA5tPoHTNSKUvOGsSOtFfisaAyXVr_lwVMXXRnkg/viewform?usp=sf_link">
          <Fab
            variant="extended"
            style={{
              backgroundColor: '#ffffff', margin: '50px', minWidth: '200px',
            }}
          > Skip the line.
          </Fab>
        </a>
      </Box>
    </Box>
  );
}
