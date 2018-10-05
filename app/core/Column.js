import React, { Component } from 'react';
import { View as RNView } from 'react-native';

export default class Column extends Component {
  render() {
    return (
      <RNView style={{
          flexDirection: 'column'
        }}>
        {this.props.children}
      </RNView>
    );
  }
}
