import React, { Component } from 'react';
import { View as RNView } from 'react-native';
import { FONT_FAMILY, GRAY } from '../config/';
import { Navbar } from '../core/'


export default class Body extends Component {
  render() {
    return (
      <RNView style={{flex: 1, backgroundColor: (this.props.backgroundColor) ? this.props.backgroundColor : GRAY}}>
        <RNView
          {...this.props}
          style={this.props.style}
        >
          <Navbar />

          <RNView style={{margin: 10}}>
            {this.props.children}
          </RNView>
        </RNView>
      </RNView>
    );
  }
}
