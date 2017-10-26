import React,  { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'
import { Alert } from 'react-native'
import { validateTextInput } from '../utils/helpers'

class NewDeck extends Component {
  state = {
    title: ''
  }

  handleTextChange = (title) => {
    this.setState(() => ({
      title
    }))
  }

  handleSubmit = (title) => {
    const { dispatch, navigation } = this.props
    if(validateTextInput(title,'New deck name')) {
      dispatch(submitNewDeckTitle(title))
      this.setState({ title: ''})
      Alert.alert('Success!','Your deck has been created.')
      navigation.navigate('IndividualDeck',{title})
    }
  }

  render() {
    const { title } = this.state
    const { navigation } = this.props

    return (
      <KeyboardAvoidingView behavior='padding'>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          value={title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity onPress={() => this.handleSubmit(title)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewDeck)
