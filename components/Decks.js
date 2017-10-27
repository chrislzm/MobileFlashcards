import React,  { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'
import Deck from './Deck'
import { white } from '../utils/colors'

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
    // If we have flashcard deck(s)
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
        <Text style={styles.statusMessage}>No flashcards yet. Please add a new deck!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
    backgroundColor:white
  },
  statusMessage: {
    fontSize: 30,
    textAlign: 'center'
  }
})

function mapStateToProps(store) {
  return ({
    decks: convertObjectToArrayWithKey(store.decks)
  })
}

export default connect(mapStateToProps)(Decks)
