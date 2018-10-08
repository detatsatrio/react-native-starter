import React, { Component } from 'react';

import Splash from '../screens/Splash';
import Navbar from '../screens/Navbar';
import Login from '../screens/Login';
import Home from '../screens/Home';
console.disableYellowBox = true;

import {
  Router,
  Stack,
  Scene
} from './Export';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splash" component={Splash} hideNavBar />
          <Scene key="navbar" component={Navbar} hideNavBar />
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="home" component={Home} hideNavBar initial/>
      </Stack>
      </Router>
    );
  }
}

export default Routes;
