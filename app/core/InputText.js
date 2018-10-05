import React, { Component } from 'react';
import { TextInput as RNInputText } from 'react-native';
import { FONT_FAMILY_BOLD, SECOND_COLOR_TWO, SECOND_COLOR_THIRD, GRAY, RED } from '../config/';
import { Text } from '../core/';
import { Bubbles } from 'react-native-loader';

export default class Button extends Component {

  constructor(props){
    super(props)

    this.state = {
      borderActive: false
    }
  }

  changeText(){
    this.setState({borderActive: true})
  }

  render(){
    console.warn(this.props.error);
    return(
      <RNInputText
        {...this.props}
        style={{
          borderColor: (this.state.borderActive == true) ?
            SECOND_COLOR_THIRD : (this.state.borderActive) ?
            this.state.borderActive : (this.props.error) ? RED : GRAY,
          borderWidth: 1,
          backgroundColor: GRAY,
          borderRadius: 3,
          padding: 12,
          opacity: (this.props.disabled) ? 0.5 : 1
        }}
        onFocus={()=>this.setState({borderActive: true})}
        onEndEditing={()=>this.setState({borderActive: !this.state.borderActive})}
        value={this.props.value}
        placeholder="We Use it for..."
        editable={!this.props.disabled}
      />
    )
  }
}
