import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Text, Divider } from '../core/';

export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>
          Components
        </Text>
        <Divider />
      </View>
    );
  }
}
