import React,  { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { getDecks } from '../utils/api.js'

function Deck ({ title, questions }) {
  return (
    <View key={title}>
      <Text>{title}</Text>
      <Text>{questions.length} cards</Text>
    </View>
  )
}

export default class Decks extends Component {
  renderItem = ({ item }) => {
    return <Deck {...item}/>
  }

  render() {

    const decks = convertDecksToArrayWithKey(getDecks())

    return (
      <View>
        { !decks && (
          <Text>No flashcard decks. Please add a new deck!</Text>
        )}
        { decks && (
          <FlatList
            data={decks}
            renderItem={this.renderItem}
          />
        )}
      </View>
    )
  }
}

function convertDecksToArrayWithKey(object) {
  return Object.keys(object).map((key) => {
    let arrayObj = object[key]
    arrayObj.key = key
    return arrayObj
  })
}
