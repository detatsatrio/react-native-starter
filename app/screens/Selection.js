import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native'
import {
  APPLICATION_NAME } from '../config/'

export default class Login extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
        }}>
        <Text>Login</Text>
      </View>
    );
  }
}
