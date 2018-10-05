import React, { Component } from 'react';
import { View as RNView } from 'react-native';

export default class Divider extends Component {
  render() {
    return(
      <RNView
        style={{
          borderBottomColor: '#cccccc',
          borderBottomWidth: 0.8,
          marginTop: 15,
          marginBottom: 15
        }}
      />
    )
  }
}
