/*
  Mobile Flashcards: components/Deck.js
  By Chris Leung

  Description:

  React Native functional component used in the renderItem callback of a React
  Native FlatList component. Displays deck information (title and number of
  cards) that when tapped, navigates the user to the deck's individual deck view
  (IndividualDeck component).

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    title: <String> Required. The title of the deck.
    numCards: <Integer> Required. The number of cards in the deck.
*/

import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { gray } from '../utils/colors'

export default function Deck (props) {
  const { navigation, title, numCards } = props
  return (
    <TouchableOpacity
      key={title}
      style={styles.deck}
      onPress={() => navigation.navigate('IndividualDeck',{ title })}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.cards}>
        {numCards} cards
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deck: {
    flex:1,
    alignItems: 'center',
    borderWidth:1,
    borderRadius:10,
    borderColor:gray,
    margin:20,
    marginBottom:5,
    padding:20
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:10
  },
  cards: {
    fontSize:15,
    color: gray,
    fontWeight:'bold'
  }
})

Deck.propTypes = {
  navigation: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  numCards: PropTypes.number.isRequired
}
