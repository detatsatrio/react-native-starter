import React, { Component } from 'react';
import { ScrollView as RNScroll } from 'react-native';

export default class Column extends Component {
  render() {
    return (
      <RNScroll
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {this.props.children}
      </RNScroll>
    );
  }
}
