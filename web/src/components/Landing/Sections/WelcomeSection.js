import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  linkNoStyle: {
    textDecoration: 'none',
    marginTop: '15px',
  },
  rootContainer: {
    marginTop: '15%',
    marginBottom: '5%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10%',
    },
  },
  bigtitle: {
    marginBottom: '20px',
    fontWeight: '400',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: '20px',
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
      fontSize: '14px',
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
          Cast a Vote, Save a Vote
        </Typography>
      </Box>
      <Box style={{
        marginTop: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Typography variant="h5" className={classes.typography}>Make a difference for voters who otherwise may not vote on Election Day.</Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Box style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <a className={classes.linkNoStyle} href="https://docs.google.com/forms/d/e/1FAIpQLSdglSmU9Aftz2uZrZAKz2ZzNVl9gfLxUwqki4KEN_K8gBtYEw/viewform?usp=sf_link">
            <Fab
              variant="extended"
              className={classes.myButton}
            > Sign up to be a Vote-Saver
            </Fab>
          </a>
        </Box>
        <Box style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <a className={classes.linkNoStyle} href=" https://docs.google.com/forms/d/e/1FAIpQLSelNqO3KWgA5tPoHTNSKUvOGsSOtFfisaAyXVr_lwVMXXRnkg/viewform?usp=sf_link">
            <Fab
              variant="extended"
              className={classes.myButton}
            > Sign up to get your Vote Saved
            </Fab>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
