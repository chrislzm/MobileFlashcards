import React,  { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { submitNewQuestion } from '../actions'
import { validateTextInput } from '../utils/helpers'

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
    }
  }

  render() {
    const { question, answer } = this.state

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>Add Card</Text>
        <Text>Question:</Text>
        <TextInput
          value={question}
          onChangeText={(input) => this.handleTextChange('question',input)}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answer}
          onChangeText={(input) => this.handleTextChange('answer',input)}
        />
        <TouchableOpacity onPress={this.handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewQuestion)
