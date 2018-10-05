import React, { Component } from 'react';
import { View as RNView } from 'react-native';

export default class Row extends Component {
  render() {
    return (
      <RNView style={{
          flexDirection: 'row',
        }}>
        {this.props.children}
      </RNView>
    );
  }
}
