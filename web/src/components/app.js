import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, withRouter,
} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './theme';
import Landing from './Landing';


// TODO(Danilowicz)
// import TempSignUp from './User/TempSignUp';
// import Contact from './Contact';
// import TOS from './Core/TOS';
// import PP from './Core/PrivacyPolicy';
// import FAQ from './Core/FAQ';
// import Internal from './Internal';
// import Module from './Module';
// import 'react-toastify/dist/ReactToastify.css';
// import '../styles/index.scss';
// import { axiosInstance } from '../util/axiosConfig';
// import ReactGA from 'react-ga';


// TODO(Danilowicz)
// ReactGA.initialize('UA-145255393-1');


function Root(props) {
  return (
    <div>
      <MuiThemeProvider theme={Theme}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Landing} />
        </Switch>
      </MuiThemeProvider>
    </div>
  );
}

const App = withRouter(Root);

const AppWithRouter = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default (AppWithRouter);
