import React, { Component } from 'react';
import { View as RNView } from 'react-native';

export default class Card extends Component {
  render() {
    return (
      <RNView
        {...this.props}
        style={[
          this.props.style,
          {
            padding: 10,
            borderRadius: 3,
            backgroundColor: 'white',
            elevation: 5,
            flex: 1,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }
        ]}
      >
        {this.props.children}
      </RNView>
    );
  }
}
