import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { gray } from '../utils/colors'

/**
 * Tappable component that displays brief information about a deck. Used in the
 * renderItem callback of a React Native FlatList component.
 * @author Chris Leung
 */
export default function Deck (props) {
  const { navigation, deckName, numCards } = props
  return (
    <TouchableOpacity
      key={deckName}
      style={styles.deck}
      onPress={() => navigation.navigate('IndividualDeck',{ deckName })}>
      <Text style={styles.deckName}>
        {deckName}
      </Text>
      <Text style={styles.cards}>
        {numCards} cards
      </Text>
    </TouchableOpacity>
  )
}

Deck.propTypes = {
  /** React Navigation screen navigation prop */
  navigation: PropTypes.object.isRequired,
  /** Title of the deck */
  deckName: PropTypes.string.isRequired,
  /** Number of cards in the deck. */
  numCards: PropTypes.number.isRequired
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
  deckName: {
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
