import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { reactGAEvent } from '../../Core/ReactGAEvent';

const useStyles = makeStyles(theme => ({
  linkNoStyle: {
    textDecoration: 'none',
    marginTop: '15px',
  },
  rootContainer: {
    marginTop: '15%',
    marginBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20%',
    },
  },
  bigtitle: {
    marginBottom: '20px',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: '60px',
      fontWeight: '400',
    },
  },
  typography: {
    color: '#484848',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      color: '#484848',
    },
  },
  myButton: {
    backgroundColor: '#FFDE59', // votesaver primary
    color: 'black',
    textTransform: 'none',
    marginBottom: '20px',
    fontSize: '20px',
    minWidth: '200px',
    '&:hover': {
      backgroundColor: '#FFD119', // votesaver secondary
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      minWidth: '150px',
    },
  },
}));

export default function WelcomeSection(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rootContainer}>
      <Box style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      }}
      >
        <Typography className={classes.bigtitle} variant="h2">
          Save a Vote in the 2020 Election
        </Typography>
      </Box>
      <Box style={{
        marginTop: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Typography variant="h5" className={classes.typography}>Stand in line to stand up for democracy.</Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Box style={{ display: 'flex', justifyContent: 'center', margin: '20px' }} onClick={() => reactGAEvent('User', 'Voter Sign Up - Top Section')}>
          <a className={classes.linkNoStyle} rel="noreferrer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdglSmU9Aftz2uZrZAKz2ZzNVl9gfLxUwqki4KEN_K8gBtYEw/viewform?usp=sf_link">
            <Fab
              variant="extended"
              className={classes.myButton}
            > Vote Saver Sign Up
            </Fab>
          </a>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center', margin: '20px' }} onClick={() => reactGAEvent('User', 'Voter Saver Sign Up - Top Section')}>
          <a className={classes.linkNoStyle}
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSelNqO3KWgA5tPoHTNSKUvOGsSOtFfisaAyXVr_lwVMXXRnkg/viewform?usp=sf_link"
          >
            <Fab
              variant="extended"
              className={classes.myButton}
            > Voter Sign Up
            </Fab>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
