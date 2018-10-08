import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FONT_FAMILY_BOLD, PRIMARY_COLOR, SECOND_COLOR } from '../config/';
import { Text } from '../core/';
import { Bubbles } from 'react-native-loader';

export default class Button extends Component {

  constructor(props){
    super(props)

    this.state = {
      disabled: (this.props.disabled) ? this.props.disabled : (this.props.loading) ? this.props.loading : false,
    }

  }

  renderTitle(){
    if (this.props.loading) {
      return(
        <View style={{marginTop: 10, marginBottom: 10}}>
          <Bubbles size={5} color="#cccccc" />
        </View>
      )
    } else {
      return(
        <Text
          style={{
            fontFamily: FONT_FAMILY_BOLD,
            color: (this.props.titleStyle) ? this.props.titleStyle.color : 'white',
            opacity: 0.7
          }}
          >
          {this.props.title}
        </Text>
      )
    }
  }

  render(){
    console.warn(PRIMARY_COLOR);
    return(
      <TouchableOpacity
        {...this.props}
        onPress={()=>this.props.onPress}
        style={{
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 3,
          borderWidth: 0.5,
          borderColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          opacity: (this.state.disabled) ? 0.5 : 1,
          backgroundColor: PRIMARY_COLOR,
        }}
        disabled={(this.props.disabled) ? this.props.disabled : this.state.disabled}
      >
        {this.renderTitle()}
      </TouchableOpacity>
    )
  }
}
