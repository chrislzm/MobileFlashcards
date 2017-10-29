/*
  Flashcards: components/NewDeck.js
  By Chris Leung

  Description:

  React Native component that allows user to create a new deck. Accomplishes
  this by displaying a form, validating input and routing to the individual deck
  view after the deck creation action has been dispatched to the Redux store.

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    dispatch: <Function> Required. Dispatch function from the Redux store.
    decks: <Object> Required. The decks object from the Redux store.
*/

import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { validateTextInput, validateIsUnique } from '../utils/helpers'
import { CONTAINER, LARGE_FONT, TEXT_INPUT } from '../utils/styles'

class NewDeck extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    decks: PropTypes.object.isRequired
  }

  state = {
    title: ''
  }

  handleTextChange = (title) => {
    this.setState(() => ({
      title
    }))
  }

  handleSubmit = () => {
    const { title } = this.state
    const { navigation, dispatch, decks } = this.props
    if(validateTextInput(title,'New deck name') && validateIsUnique(title,decks)) {
      dispatch(submitNewDeckTitle(title))
      this.setState({ title: ''})
      navigation.navigate('IndividualDeck',{title})
    }
  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
        <Text style={styles.largeFont}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={this.handleTextChange}
        />
        <FlashcardsButton
          onPress={this.handleSubmit}>
          Submit
        </FlashcardsButton>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER,
  largeFont: LARGE_FONT,
  textInput: TEXT_INPUT
})

const mapStateToProps = (store) => ({
  decks: store
})

export default connect(mapStateToProps)(NewDeck)
