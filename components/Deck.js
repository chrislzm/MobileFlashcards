import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function Deck (props) {
  const { navigation, title, numCards } = props
  return (
    <View key={title}>
      <TouchableOpacity onPress={() => navigation.navigate('IndividualDeck',{ title })}>
        <Text>{title}</Text>
        <Text>{numCards} cards</Text>
      </TouchableOpacity>
    </View>
  )
}
