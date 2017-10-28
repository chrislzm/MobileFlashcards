import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { submitNewQuestion } from '../actions'
import { validateTextInput } from '../utils/helpers'
import { CONTAINER, LARGE_FONT, MEDIUM_FONT, TEXT_INPUT } from '../utils/styles'
import { white, purple, gray } from '../utils/colors'
import Button from './Button'

class NewQuestion extends Component {
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
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.largeFont}>Add a New Card</Text>
        <Text style={styles.mediumFont}>Question</Text>
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
        <Button
          color={white}
          backgroundColor={purple}
          onPress={this.handleSubmit}>
          Submit
        </Button>
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
