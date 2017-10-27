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
    return (
      <Deck
        {...item}
        navigation={navigation}
      />
    )
  }

  render() {
    const { decks } = this.props
    return (
      <View style={{flex: 1}}>
        { decks.length === 0 && (
          <Text>No flashcard decks. Please add a new deck!</Text>
        )}
        { decks.length !== 0 && (
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
