import React,  { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { convertObjectToArrayWithKey } from '../utils/helpers'

function Deck ({ title, questions }) {
  return (
    <View key={title}>
      <Text>{title}</Text>
      <Text>{questions.length} cards</Text>
    </View>
  )
}

class Decks extends Component {
  renderItem = ({ item }) => {
    return <Deck {...item}/>
  }

  render() {
    const { decks } = this.props
    console.log(decks)
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
