import React,  { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'
import { Alert } from 'react-native'
import { validateTextInput } from '../utils/helpers'
import { white, purple } from '../utils/colors'
import Button from './Button'
import { CONTAINER, LARGE_FONT, TEXT_INPUT } from '../utils/styles'

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
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.largeFont}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={this.handleTextChange}
        />
        <Button
          color={white}
          backgroundColor={purple}
          onPress={() => this.handleSubmit(title)}>
          Submit
        </Button>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER,
  largeFont: LARGE_FONT,
  textInput: TEXT_INPUT
})

export default connect()(NewDeck)
