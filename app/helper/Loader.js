import React from 'react';
import {StyleSheet,Text,Image,View,Platform, Dimensions, ActivityIndicator} from 'react-native';
const { width, height } = Dimensions.get('window');

export default class Loader extends React.PureComponent {

	render() {
		return (
			<View style={{
				flex: 1,
				position: 'absolute',
				opacity: 1,
				width: width,
				height: height,
				backgroundColor: 'black',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 99,
			}}>

				<View style={{
					backgroundColor: 'white',
					alignSelf: 'center',
					borderRadius: 10,
					padding: 15
				}}>
					<Image source={require('../../assets/loader.gif')} style={{width: 40, height: 40, zIndex:99, alignSelf: 'center', borderRadius: 50}}/>
					{/*<ActivityIndicator size="large" color="black"/>*/}

					<Text style={{fontSize: 10}}>{"\n"}Mohon Tunggu...</Text>
				</View>

			</View>
    )
  }

}
