import React, { Component } from 'react';
import Components from '../screens/Components';
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
          <Scene key="components" component={Components} hideNavBar initial/>
        </Stack>
      </Router>
    );
  }
}

export default Routes;
