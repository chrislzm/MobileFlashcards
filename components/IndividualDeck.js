import React,  { Component } from 'react'
import { View, Text } from 'react-native'

export default class IndividualDeck extends Component {

  static navigationOptions = ({navigation}) => {
    console.log(navigation)
    const { title } = navigation.state.params
    return {
      title
    }
  }

  render() {
    return (
      <View>
        <Text>IndividualDeck component</Text>
      </View>
    )
  }
}
