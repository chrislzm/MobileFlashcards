import React,  { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { removeAllDecks } from '../actions'
import { Alert } from 'react-native'
import { white, purple } from '../utils/colors'
import { styles } from '../utils/styles'
import FlashcardsButton from './FlashcardsButton'
import PropTypes from 'prop-types'

/**
 * Allows user to delete all deck and flashcard data (from both AsyncStorage and
 * the Redux store).
 * @author Chris Leung
 */
class RemoveDecks extends Component {

  static propTypes = {
    /** Dispatch function from the Redux store */
    dispatch: PropTypes.func.isRequired,
  }

  handleSubmit = () => {
    this.props.dispatch(removeAllDecks())
    Alert.alert('Success!','All flashcards and decks have been removed')
  }

  render() {
    return (
      <View
        style={styles.container}
        behavior='padding'>
        <Text style={styles.mediumFont}>
          Delete all flashcards and decks? This cannot be undone.
        </Text>
        <FlashcardsButton
          onPress={this.handleSubmit}>
          Delete All Data
        </FlashcardsButton>
      </View>
    )
  }
}

export default connect()(RemoveDecks)
