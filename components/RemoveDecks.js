import React,  { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { removeAllDecks } from '../actions'
import { Alert } from 'react-native'
import { white, purple } from '../utils/colors'

class RemoveDecks extends Component {
  handleSubmit = () => {
    this.props.dispatch(removeAllDecks())
    Alert.alert('Success!','All flashcards and decks have been removed')
  }

  render() {
    return (
      <View style={styles.container} behavior='padding'>
        <Text style={styles.statusMessage}>Delete all flashcards and decks? This cannot be undone.</Text>
        <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit}>
          <Text style={styles.submitBtnText}>Delete All Data</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    backgroundColor: white
  },
  statusMessage: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  submitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  }
})

export default connect()(RemoveDecks)
