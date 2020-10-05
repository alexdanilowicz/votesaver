import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { reactGAEvent } from '../../Core/ReactGAEvent';

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
          color: '#2d2d2d', marginTop: '5%', textAlign: 'center', fontWeight: '400', marginLeft: '20px', marginRight: '20px',
        }}
      > Make a difference today.
      </Typography>
      <Typography
        variant="h4"
        style={{
          color: '#323232', textAlign: 'center', fontWeight: '400', marginLeft: '20px', marginRight: '20px',
        }}
      > Signing up takes 30 seconds.
      </Typography>
      <Box style={{ display: 'flex' }}>
        <Box onClick={() => reactGAEvent('User', 'Voter Saver Up - Bottom Section')}>
          <a
            className={classes.linkNoStyle}
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdglSmU9Aftz2uZrZAKz2ZzNVl9gfLxUwqki4KEN_K8gBtYEw/viewform?usp=sf_link"
          >
            <Fab
              variant="extended"
              style={{
                backgroundColor: '#ffffff', margin: '20px',
              }}
            > Help a voter in need
            </Fab>
          </a>
        </Box>
        <Box onClick={() => reactGAEvent('User', 'Voter Sign Up - Bottom Section')}>
          <a
            className={classes.linkNoStyle}
            rel="noreferrer"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSelNqO3KWgA5tPoHTNSKUvOGsSOtFfisaAyXVr_lwVMXXRnkg/viewform?usp=sf_link"
          >
            <Fab
              variant="extended"
              style={{
                backgroundColor: '#ffffff', margin: '20px',
              }}
            > Skip the line
            </Fab>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
