import React, {Component} from 'react';
import {View, Text, StatusBar, Dimensions} from 'react-native'

import {
  APPLICATION_NAME } from '../config/'
import Navbar from './Navbar'
import Menu from './Menu'

class Body extends Component {
  render(){
    return(
      <View>
        <Text>Body</Text>
      </View>
    );
  }
}

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Navbar />
        <Body />
        <Menu />
      </View>
    );
  }
}
