import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircleLogo from '../Logo/CircleLogo';

const useStyles = makeStyles({
  linkWithPadding: {
    paddingRight: '10px',
    textDecoration: 'none',
    color: '#111111',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#111111',
    cursor: 'pointer',
  },
  topBorder: {
    borderTop: '1px solid lightgrey',
  },
  marginTopForBorder: {
    marginTop: '15px',
  },
});

function Footer(props) {
  const classes = useStyles();
  return (
    <Box className={classes.topBorder}>
      <Box display="flex"
        flexDirection="row"
        justifyContent="space-around"
        className={classes.marginTopForBorder}
      >
        <Box>
          <CircleLogo width="80px" height="80px" />
        </Box>
        <Box>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item>
              <Typography
                className={classes.link}
                variant="body1"
              >
                About votesaver.org
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link className={classes.link} variant="caption" href="/" target="_top">About</Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box flexDirection="column">
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justify="flex-start"
          >
            <Grid item>
              <Typography
                variant="body1"
                className={classes.link}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                <Link
                  variant="caption"
                  href="mailto:vote.saver@gmail.com"
                  className={classes.link}
                >Email Us
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box flexDirection="column">
          <Link
            className={classes.link}
            variant="body1"
            href="/contact"
            target="_top"
          >
            Follow Us
          </Link>
          <Grid item xs={6}>
            <Link className={classes.link} href="https://www.facebook.com/"><FacebookIcon /></Link>
            <Link className={classes.link} href="https://twitter.com/home"><TwitterIcon /></Link>
            <Link className={classes.link} href="https://www.instagram.com/p/B5D4ULTgbM3/"><InstagramIcon /></Link>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
