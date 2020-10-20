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
  disappearingSvg: {
    margin: '15px',
    transform: 'scale(-1, 1)',
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      position: 'relative',
      display: 'none',
    },
  },
  appearingSvg: {
    margin: '15px',
    transform: 'scale(-1, 1)',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      position: 'relative',
      display: 'block',
    },
  },
  svgWidth: {
    margin: '15px',
    transform: 'scale(-1, 1)',
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      position: 'relative',
      display: 'none',
    },
  },
  typography: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

export default function WordLandingSection1(props) {
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
            {'Here\'s the issue...'}
          </Typography>
          <Box paddingTop="20px" display="flex">
            <Typography variant="h6" className={classes.typography}>
              {'In every election, long lines make it hard to vote. This year, \
              COVID-19 is making it even harder, especially for seniors with high COVID risk and essential workers who can\'t take time off work.'}
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
            {'Here\'s the issue...'}
          </Typography>
          <Box paddingTop="20px">
            <Typography variant="h6" className={classes.typography}>
              {'In every election, long lines make it hard to vote. This year, \
              COVID-19 is making it even harder, especially for seniors with high COVID risk and essential workers who can\'t take time off work.'}
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
