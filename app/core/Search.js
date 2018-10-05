import React, { Component } from 'react';
import {
  View,
  TextInput
 } from 'react-native';

export default class Search extends Component {
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
    );
  }
}
