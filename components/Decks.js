import React,  { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'
import Deck from './Deck'
import { white } from '../utils/colors'
import { CONTAINER, MEDIUM_FONT } from '../utils/styles'
import PropTypes from 'prop-types'

class Decks extends Component {

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    decks: PropTypes.array.isRequired
  }

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
        <Text style={styles.mediumFont}>No flashcards yet. Please add a new deck!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER,
  mediumFont: MEDIUM_FONT
})

function mapStateToProps(store) {
  return ({
    decks: convertObjectToArrayWithKey(store.decks)
  })
}

export default connect(mapStateToProps)(Decks)
