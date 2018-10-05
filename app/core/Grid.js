import React, { Component } from 'react';
import { View as RNView } from 'react-native';

export default class Grid extends Component {
  render() {
    console.warn(this.props.children);
    return (
      <RNView>
        {this.props.children}
      </RNView>
    );
  }
}
