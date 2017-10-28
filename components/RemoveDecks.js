import React,  { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { removeAllDecks } from '../actions'
import { Alert } from 'react-native'
import { white, purple } from '../utils/colors'
import { CONTAINER, MEDIUM_FONT } from '../utils/styles'
import FlashcardsButton from './FlashcardsButton'
import PropTypes from 'prop-types'

class RemoveDecks extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  handleSubmit = () => {
    this.props.dispatch(removeAllDecks())
    Alert.alert('Success!','All flashcards and decks have been removed')
  }

  render() {
    return (
      <View style={styles.container} behavior='padding'>
        <Text style={styles.mediumFont}>Delete all flashcards and decks? This cannot be undone.</Text>
        <FlashcardsButton
          onPress={this.handleSubmit}>
          Delete All Data
        </FlashcardsButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER,
  mediumFont: MEDIUM_FONT
})

export default connect()(RemoveDecks)
