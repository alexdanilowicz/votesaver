/* eslint-disable import/no-absolute-path */
/* eslint-disable global-require */
import React from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  textContainer: {
    margin: '15px',
    padding: '40px',
  },
  imgBox: {
    paddingLeft: '10px',
    paddingRight: '20px',
    paddingBottom: '20px',
    margin: '0px',
  },
  link: {
    marginTop: '5px',
    textDecoration: 'none',
    fontSize: '20px',
    color: '#111111',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
}));

export default function SponsorsSection(props) {
  const classes = useStyles();
  let w = 750;
  const h = 450;
  const SCALE = 425;

  const mq = window.matchMedia('(max-width: 600px)');
  if (mq.matches) {
    w -= SCALE;
  }

  return (
    <Box paddingTop="30px">
      <Box paddingBottom="70px" paddingLeft="10px" paddingRight="10px">
        <Typography style={{
          fontWeight: '400', display: 'flex', justifyContent: 'center', textAlign: 'center',
        }}
          variant="h2"
        >
          Voter Saver in the Media
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-evenly" alignContent="center" flexWrap="wrap" paddingBottom="20px">
        <Box display="flex" flexDirection="column">
          <iframe
            width={w}
            height={h}
            src="https://www.youtube.com/embed/mlKZSV-Em6Q"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="ABC News"
          />
          <Link
            variant="subtitle1"
            className={classes.link}
            href="https://abc7.com/7088001/"
            target="_blank"
          > Read about Voter Saver on ABC News
          </Link>
        </Box>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Vote Saver helps elderly voters with high COVID risk and essential workers avoid long wait times at the polls. Go to
            <a href="https://t.co/Vc1w9kcPpW">https://t.co/Vc1w9kcPpW</a> to make a difference on Election Day.
            <a href="https://t.co/ogxYYUmCxj">https://t.co/ogxYYUmCxj</a>
          </p>&mdash; Thomas L. Friedman (@tomfriedman)
          <a href="https://twitter.com/tomfriedman/status/1317844076109176845?ref_src=twsrc%5Etfw">October 18, 2020</a>
        </blockquote>
      </Box>
    </Box>

  );
}
