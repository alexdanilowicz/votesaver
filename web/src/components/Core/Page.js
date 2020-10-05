import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/styles';

import Footer from './Footer';
import NavBar from './NavBar';

const styles = theme => ({
  rootContainer: {
    // padding: '10px 0',
    // width: '100vw',
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  fixedRootContainer: {
    padding: '0',
    // width: '100vw',
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  loadContainer: {
    padding: 0,
    // width: '100%',
    // height: '100%',
    // flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/*
  Props:
    * requireAuth (optional): Require authentication
    * requireAdmin (optional): Require admin authentication
    * requireIntern (optional): Require intern authentication
    * fixed (optional) default true: Make the navigation fixed (i.e. follows you when you scroll)
    * hide (optional): Make the navigation hide when you scroll down
*/
function Page(props) {
  const { classes } = props;
  const content = props.children;

  return (
    <Box className={props.fixed ? classes.rootContainer : classes.fixedRootContainer}>
      <NavBar fixed={props.fixed} hide={props.hide} />
      <Fade>
        {content}
        <Footer />
      </Fade>
    </Box>
  );
}

export default (withRouter(withStyles(styles)(Page)));
