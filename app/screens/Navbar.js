import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Platform
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
  PRIMARY_COLOR,
  FONT_FAMILY_MEDIUM,
  APPLICATION_NAME } from '../config/Variable'
import Icon from 'react-native-vector-icons/Ionicons';
import { Row } from '../core/'
import LinearGradient from 'react-native-linear-gradient'

export default class Navbar extends Component {
  render() {
    return (
      <View
        style={{
          height: (Platform.OS === 'ios') ? 64 : 54,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          elevation: 5
        }}
        >
        <View>
          <Icon name="ios-arrow-back" size={24} style={{backgroundColor: 'transparent',color: PRIMARY_COLOR}} />
        </View>

        <View>
          <Text>
            Tengah
          </Text>
        </View>

        <View>
          <Icon name="md-funnel" size={24} style={{backgroundColor: 'transparent',color: PRIMARY_COLOR}} />
        </View>
      </View>
    );
  }
}
