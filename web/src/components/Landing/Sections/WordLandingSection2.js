import React from 'react';
import {
  Button, Box, Link, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const useStyles = makeStyles(theme => ({
  textContainer: {
    margin: '15px',
    maxWidth: '700px',
    padding: '40px',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  wrapper: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  svgWidth: {
    margin: '15px',
    transform: 'scale(1, 1)',
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      position: 'relative',
    },
  },
  disappearingSvg: {
    margin: '15px',
    transform: 'scale(1, 1)',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      position: 'relative',
      display: 'none',
    },
  },
  appearingSvg: {
    margin: '15px',
    transform: 'scale(1, 1)',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      position: 'relative',
      display: 'block',
    },
  },
  typography: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

export default function WordLandingSection2(props) {
  const classes = useStyles();
  const theSVG = props.children;
  const { left } = props;
  if (left) {
    return (
      <Box display="flex" justifyContent="center" className={classes.wrapper}>
        <Box className={classes.svgWidth}>
          {theSVG}
        </Box>
        <Box display="flex" flexDirection="column" className={classes.textContainer}>
          <Typography variant="h3" className={classes.typography}>
            We created Vote-Saver to ensure those votes are cast.
          </Typography>
          <Box paddingTop="20px" display="flex">
            <Typography variant="h6" className={classes.typography}>
              {'We\'re bringing together an army to stand for democracy and protect people\'s right to vote, especially those who want to vote but can\'t wait in line.'}
            </Typography>
          </Box>
          {
          // <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" paddingTop="20px">
          // <Link href={props.link} variant="subtitle1" className={classes.link} verticalAlign="middle">
          // Learn More
          // </Link>
          // <Box alignContent="center" paddingLeft="30px" paddingTop="5px" paddingRight="4px">
          //   <Link href={props.link} variant="body2" className={classes.link} verticalAlign="middle">
          //     <TrendingFlatIcon fontSize="large" />
          //   </Link>
          // </Box>
          // </Box>
          }
        </Box>
      </Box>
    );
  } else {
    return (
      <Box display="flex" justifyContent="center" className={classes.wrapper}>
        <Box className={classes.appearingSvg}>
          {theSVG}
        </Box>
        <Box display="flex" flexDirection="column" className={classes.textContainer}>
          <Typography variant="h3" className={classes.typography}>
            We created Vote-Saver to ensure those votes are cast.
          </Typography>
          <Box paddingTop="20px">
            <Typography variant="h6" className={classes.typography}>
              {'We\'re bringing together an army to stand for democracy and protect people\'s right to vote, especially those who want to vote but can\'t wait in line.'}
            </Typography>
          </Box>
          {
          // <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end" paddingTop="20px">
          // <Link href={props.link} variant="subtitle1" className={classes.link} verticalAlign="middle">
          // Learn More
          // </Link>
          // <Box alignContent="center" paddingLeft="30px" paddingTop="5px" paddingRight="4px">
          //   <Link href={props.link} variant="body2" className={classes.link} verticalAlign="middle">
          //     <TrendingFlatIcon fontSize="large" />
          //   </Link>
          // </Box>
          // </Box>
          }
        </Box>
        <Box className={classes.disappearingSvg}>
          {theSVG}
        </Box>
      </Box>
    );
  }
}
