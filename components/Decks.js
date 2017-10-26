import React,  { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'

function Deck ({ title, questions }) {
  let numCards = 0
  if(questions) {
    numCards = questions.length
  }
  return (
    <View key={title}>
      <Text>{title}</Text>
      <Text>{numCards} cards</Text>
    </View>
  )
}

class Decks extends Component {

  componentDidMount() {
    this.props.dispatch(fetchDecks())
  }

  renderItem = ({ item }) => {
    return <Deck {...item}/>
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
