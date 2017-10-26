import React,  { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'
import { Alert } from 'react-native'
import { validateTextInput } from '../utils/helpers'

class NewDeck extends Component {
  state = {
    input: ''
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  handlePress = () => {
    const { input } = this.state
    if(validateTextInput(input,'New deck name')) {
      this.props.dispatch(submitNewDeckTitle(input))
      this.setState({ input: ''})
      Alert.alert('Success!','Your deck has been created.')
    }
  }

  render() {
    const { input } = this.state

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={input}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)
