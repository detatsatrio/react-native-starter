import React, {Component} from 'react';
import {View, Text, StatusBar, ImageBackground} from 'react-native'
import {
  APPLICATION_NAME } from '../config/'
import { Actions } from 'react-native-router-flux'

export default class Splash extends Component {

  componentWillMount(){
      setTimeout(()=>{
        Actions.login()
      }, 1500)
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white'
        }}>
        <StatusBar
          hidden
        />
        <ImageBackground
          style={{width: 50, height: 50, elevation: 5}}
          source={require('../../assets/images/logo.png')}
        />
      </View>
    );
  }
}
