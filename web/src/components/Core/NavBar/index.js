import * as React from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

import MenuIcon from '@material-ui/icons/Menu';
import TextAndCircleLogo from '../Logo/TextAndCircleLogo';

// TODO(Danilowicz): clean this up

const styles = theme => ({
  rootContainer: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  relative: {
    position: 'relative',
  },
  logo: {
    color: 'black',
    marginRight: '40px',
  },
  linkContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  linkDrawerContainer: {
    padding: '30px 40px',
    fontSize: '16px',
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'initial',
      marginLeft: 'auto',
    },
  },
  drawer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'initial',
    },
  },
  link: {
    margin: '0 24px',
    color: 'initial',
    textDecoration: 'none',
    fontSize: '16px',
  },
  drawerLink: {
    margin: '12px 0',
    color: 'initial',
    textDecoration: 'none',
    fontSize: '16px',
  },
  drawerLogo: {
    margin: '24px 0',
  },
  signin: {
    marginLeft: 'auto',
  },
  rightItems: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  avatar: () => {
    return {
      color: 'white',
      backgroundColor: '#5E5885',
      marginLeft: '12px',
      marginRight: '12px',
      '&:hover': {
        cursor: 'pointer',
      },
    };
  },
});

function HideOnScroll(props) {
  const { hide, children } = props;
  if (!hide) {
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }

  return (
    <Slide appear={false} direction="down" in={!useScrollTrigger()}>
      {children}
    </Slide>
  );
}

function NavBar(props) {
  const [isDrawerOpen, setDrawer] = React.useState(false);

  const { classes, fixed, hide } = props;
  const appBarClassName = fixed ? classes.navbar : `${classes.navbar} ${classes.relative}`;


  const links = (className) => {
    return (
      <React.Fragment>
        {/* <NavLink className={className} to="/contact">
          <Typography variant="h6"> Contact </Typography>
        </NavLink> */}
        <Link
          variant="caption"
          href="mailto:vote.saver@gmail.com"
          className={className}
        >Email Us
        </Link>
      </React.Fragment>
    );
  };


  return (
    <HideOnScroll hide={hide}>
      <AppBar className={appBarClassName} color="default">
        <Toolbar>
          <TextAndCircleLogo width="200px" height="80px" />
          <Box className={classes.linkContainer} display="flex" alignItems="center">
            {links(classes.link)}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setDrawer(true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.drawer}>
            <SwipeableDrawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setDrawer(false)}
              onOpen={() => setDrawer(true)}
            >
              <Box className={classes.linkDrawerContainer} display="flex" flexDirection="column" alignItems="center">
                <TextAndCircleLogo width="200px" height="120px" />
                {links(classes.drawerLink)}
              </Box>
            </SwipeableDrawer>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default (withRouter(withStyles(styles)(NavBar)));
