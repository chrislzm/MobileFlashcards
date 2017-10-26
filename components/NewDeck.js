import React,  { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'

class NewDeck extends Component {
  state = {
    input: "New Deck"
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input
    }))
  }

  handlePress = () => {
    this.props.dispatch(submitNewDeckTitle(this.state.input))
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
