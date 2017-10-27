import React,  { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'
import Deck from './Deck'

class Decks extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDecks())
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props
    const { title, questions } = item
    return (
      <Deck
        title={title}
        numCards={questions.length}
        navigation={navigation}
      />
    )
  }

  render() {
    const { decks } = this.props
    const haveFlashcards = decks.length !== 0
    return (
      <View style={{flex: 1}}>
        { !haveFlashcards && (
          <Text>No flashcard decks. Please add a new deck!</Text>
        )}
        { haveFlashcards && (
          <FlatList
            data={decks}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}

function mapStateToProps(store) {
  return ({
    decks: convertObjectToArrayWithKey(store.decks)
  })
}

export default connect(mapStateToProps)(Decks)
