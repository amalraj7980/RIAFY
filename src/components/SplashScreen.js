import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontSize:28,fontWeight:"bold"}}>Kodsmith</Text>
      </View>
    )
  }
}