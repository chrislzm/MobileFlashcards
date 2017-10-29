/*
  Flashcards: components/NewDeck.js
  By Chris Leung

  Description:

  React Native component that allows user to create a new deck. Accomplishes
  this by displaying a form, validating input and routing to the individual deck
  view after the deck creation action has been dispatched to the Redux store.

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    title: <String> Required. Passed via navigation.state.params. Contains the
      title of the deck we are adding a new card to.
    dispatch: <Function> Required. Dispatch function from the Redux store.
*/

import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { submitNewQuestion } from '../actions'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { validateTextInput, removeHeaderIfAndroid } from '../utils/helpers'
import { CONTAINER, LARGE_FONT, MEDIUM_FONT, TEXT_INPUT } from '../utils/styles'
import { gray } from '../utils/colors'

class NewQuestion extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = ({navigation}) => (
    removeHeaderIfAndroid()
  )

  state = {
    question: '',
    answer: ''
  }

  handleTextChange = (field,input) => {
    this.setState(() => ({
      [field]: input
    }))
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    if(validateTextInput(question,'\"Question\"') && validateTextInput(answer,'\"Answer\"')) {
      const { title } = this.props.navigation.state.params
      const questionObject = { question, answer }
      this.props.dispatch(submitNewQuestion(title,questionObject))
      this.setState({ question: '', answer: ''})
      Alert.alert('Success!','Your card has been added.')
    }
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
        <Text style={styles.largeFont}>
          Add a New Card
        </Text>
        <Text style={styles.mediumFont}>
          Question
        </Text>
        <TextInput
          style={styles.textInput}
          value={question}
          onChangeText={(input) => this.handleTextChange('question',input)}
        />
        <Text style={styles.mediumFont}>Answer</Text>
        <TextInput
          style={styles.textInput}
          value={answer}
          onChangeText={(input) => this.handleTextChange('answer',input)}
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
  mediumFont: {
    ...MEDIUM_FONT,
    color: gray
  },
  textInput: TEXT_INPUT
})

export default connect()(NewQuestion)
