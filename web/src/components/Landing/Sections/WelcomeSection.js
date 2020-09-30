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
        <a className={classes.linkNoStyle} href="https://forms.gle/mbQ9fVVo4BdfGQqLA">
          <Fab
            variant="extended"
            className={classes.myButton}
          > Sign up
          </Fab>
        </a>
      </Box>
    </Box>
  );
}
