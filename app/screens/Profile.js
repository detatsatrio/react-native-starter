import React, {Component} from 'react';
import {View, Text, StatusBar, Dimensions} from 'react-native'

import {
  APPLICATION_NAME } from '../config/'
import Navbar from './Navbar'
import Menu from './Menu'

export default class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>
        Menu
        </Text>
      </View>
    );
  }
}
