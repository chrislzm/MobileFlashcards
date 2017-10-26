import React,  { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'

function Deck (props) {
  const { navigation, title, questions } = props
  let numCards = 0
  if(questions) {
    numCards = questions.length
  }
  return (
    <View key={title}>
      <TouchableOpacity onPress={() => navigation.navigate('IndividualDeck',{ title })}>
        <Text>{title}</Text>
        <Text>{numCards} cards</Text>
      </TouchableOpacity>
    </View>
  )
}

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
      <View>
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
    decks: convertObjectToArrayWithKey(store)
  })
}

export default connect(mapStateToProps)(Decks)
