import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { submitNewQuestion } from '../actions'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { validateTextInput, removeHeaderIfAndroid } from '../utils/helpers'
import { styles } from '../utils/styles'
import { gray } from '../utils/colors'

/**
 * Allows user to create a new card (question+answer pair) in a deck
 * @author Chris Leung
 */
class NewQuestion extends Component {

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
        <Text style={[styles.mediumFont, {color:gray}]}>
          Question
        </Text>
        <TextInput
          style={styles.textInput}
          value={question}
          onChangeText={(input) => this.handleTextChange('question',input)}
        />
        <Text style={[styles.mediumFont, {color:gray}]}>Answer</Text>
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

export default connect()(NewQuestion)
