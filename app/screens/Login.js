import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native'
import { APPLICATION_NAME } from '../config/'
import {Button} from '../core'

export default class Login extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
        }}>
        <Text>Login</Text>
        <Button
          title="Button"
        />
      </View>
    );
  }
}
