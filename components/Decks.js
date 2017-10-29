/*
  Flashcards: components/Decks.js
  By Chris Leung

  Description:

  React Native component that displays a list of decks.

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    decks: <Array> Required. An array of deck objects. Refer to README.md for
      the structure of these objects.
*/

import React,  { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'
import Deck from './Deck'
import { white } from '../utils/colors'
import { CONTAINER, MEDIUM_FONT } from '../utils/styles'

class Decks extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    decks: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.dispatch(fetchDecks())
  }

  // Callback for FlatList component
  renderItem = ({ item }) => {
    return (
      <Deck
        title={item.title}
        numCards={item.questions.length}
        navigation={this.props.navigation}
      />
    )
  }

  render() {
    const { decks } = this.props
    // If we have flashcard deck(s), dispay them
    if(decks.length !== 0) {
      return (
        <FlatList
          style={{flex: 1, backgroundColor: white}}
          data={decks}
          renderItem={this.renderItem}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.mediumFont}>No flashcards yet. Please add a new deck!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER,
  mediumFont: MEDIUM_FONT
})

const mapStateToProps = (store) => ({
  decks: convertObjectToArrayWithKey(store)
})

export default connect(mapStateToProps)(Decks)
