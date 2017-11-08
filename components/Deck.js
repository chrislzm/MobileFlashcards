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

Deck.propTypes = {
  /**
   * React Navigation screen navigation prop.
   */
  navigation: PropTypes.object.isRequired,
  /**
   * The title of the deck
   */
  title: PropTypes.string.isRequired,
  /**
   * The number of cards in the deck.
   */
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
