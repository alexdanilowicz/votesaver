import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { flexbox } from '@material-ui/system';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import { withRouter, NavLink } from 'react-router-dom';
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
      marginTop: '30%',
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
    backgroundColor: '#FCE757', // TODO(Danilowicz): import this
    color: 'black',
    textTransform: 'none',
    marginBottom: '20px',
    minWidth: '200px',
    '&:hover': {
      backgroundColor: '#FCDD0B', // TODO(Danilowicz): import this
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
          Worried about long lines at the polls?
        </Typography>
      </Box>
      <Box style={{
        marginTop: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Typography variant="h5" className={classes.typography}>Skip the line or help a voter in need.</Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <NavLink className={classes.linkNoStyle} to="/contact">
          <Fab
            variant="extended"
            className={classes.myButton}
          > Sign up
          </Fab>
        </NavLink>
      </Box>
    </Box>
  );
}
