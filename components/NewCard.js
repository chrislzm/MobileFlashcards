import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { submitNewCard } from '../actions'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { validateTextInput, removeHeaderIfAndroid } from '../utils/helpers'
import { styles } from '../utils/styles'
import { gray } from '../utils/colors'

/**
 * Allows user to create a new card (question+answer pair) in a deck
 * @author Chris Leung
 */
class NewCard extends Component {

  static propTypes = {
    /** Redux dispatch function. */
    dispatch: PropTypes.func.isRequired,
    /** React Navigation screen navigation prop */
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = ({navigation}) => (
    removeHeaderIfAndroid()
  )

  state = {
    questionText: '',
    answerText: ''
  }

  handleTextChange = (field,input) => {
    this.setState(() => ({
      [field]: input
    }))
  }

  handleSubmit = () => {
    const { questionText, answerText } = this.state
    if(validateTextInput(questionText,'\"Question\"') && validateTextInput(answerText,'\"Answer\"')) {
      const { deckName } = this.props.navigation.state.params
      const card = { questionText, answerText }
      this.props.dispatch(submitNewCard(deckName,card))
      this.setState({ questionText: '', answerText: ''})
      Alert.alert('Success!','Your card has been added.')
    }
  }

  render() {
    const { questionText, answerText } = this.state

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
        <Text style={styles.largeFont}>
          Add a New Card
        </Text>
        <Text style={[styles.mediumFont, {color:gray}]}>
          Question
        </Text>
        <TextInput
          style={styles.textInput}
          value={questionText}
          onChangeText={(input) => this.handleTextChange('questionText',input)}
        />
        <Text style={[styles.mediumFont, {color:gray}]}>Answer</Text>
        <TextInput
          style={styles.textInput}
          value={answerText}
          onChangeText={(input) => this.handleTextChange('answerText',input)}
        />
        <FlashcardsButton
          onPress={this.handleSubmit}>
          Submit
        </FlashcardsButton>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(NewCard)
