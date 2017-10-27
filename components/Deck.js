import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { gray } from '../utils/colors'

export default function Deck (props) {
  const { navigation, title, numCards } = props
  return (
    <TouchableOpacity key={title} style={styles.deck} onPress={() => navigation.navigate('IndividualDeck',{ title })}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cards}>{numCards} cards</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deck: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:1,
    borderRadius:10,
    borderColor:gray,
    margin:20,
    marginBottom:5,
    padding:20
  },
  title: {
    flex:1,
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:10
  },
  cards: {
    flex:1,
    fontSize:15,
    color: gray,
    fontWeight:'bold'
  }
})
