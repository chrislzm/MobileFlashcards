import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { CONTAINER, MEDIUM_FONT, SMALL_FONT } from '../utils/styles'
import { red, green, gray } from '../utils/colors'
import PropTypes from 'prop-types'

export default class QuizQuestion extends Component {

  state = {
    showAnswer: false
  }

  toggleShowAnswer = () => {
    this.setState((prevState) => ({ showAnswer: !prevState.showAnswer }))
  }

  submitAnswer = (submitHandler) => {
    this.setState({ showAnswer: false})
    submitHandler()
  }

  render() {
    const { title, question, answer, questionNum, numQuestions, handleCorrect, handleIncorrect } = this.props
    const { showAnswer } = this.state

    let questionText, toggleFlashcardsButtonText

    if(showAnswer) {
      questionText = answer
      toggleFlashcardsButtonText = 'Show Question'
    } else {
      questionText = question
      toggleFlashcardsButtonText = 'Show Answer'
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.mediumFont,{color: gray}]}>{questionNum}/{numQuestions}</Text>
          <Text style={styles.mediumFont}>{questionText}</Text>
          <FlashcardsButton
            onPress={this.toggleShowAnswer}>
            {toggleFlashcardsButtonText}
          </FlashcardsButton>
        </View>
        <FlashcardsButton
          backgroundColor={green}
          onPress={() => this.submitAnswer(handleCorrect)}>
          Correct
        </FlashcardsButton>
        <FlashcardsButton
          backgroundColor={red}
          onPress={() => this.submitAnswer(handleIncorrect)}>
          Incorrect
        </FlashcardsButton>
        <Text style={styles.smallFont}>Currently studying "{title}"</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER,
  mediumFont: MEDIUM_FONT,
  smallFont: SMALL_FONT
})

QuizQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  questionNum: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
  handleCorrect: PropTypes.func.isRequired,
  handleIncorrect: PropTypes.func.isRequired
}
