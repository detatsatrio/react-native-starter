import React, {Component} from 'react';
import {
  View,
  StatusBar
} from 'react-native'
import {
  Text,
  Divider,
  Body,
  Button,
  Card,
  InputText
} from '../core/'
import { Toolbar } from 'react-native-material-ui';
import {
  FONT_FAMILY_ITALIC,
  PRIMARY_COLOR_TWO,
  PRIMARY_COLOR_THIRD,
  FONT_FAMILY_MEDIUM,
  APPLICATION_NAME } from '../config/'

export default class Navbar extends Component {
  render() {
    return (
      <View style={{
          backgroundColor: PRIMARY_COLOR_TWO,
          padding: 15,
          elevation: 10
        }}>
        <StatusBar
          backgroundColor={PRIMARY_COLOR_THIRD}
          barStyle="light-content"
        />
        <Text
          fontFamily={FONT_FAMILY_MEDIUM}
          style={{color: 'white'}}>
          {APPLICATION_NAME}
        </Text>
      </View>
    );
  }
}
