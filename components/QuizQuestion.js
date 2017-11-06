/*
  Mobile Flashcards: components/QuizQuestion.js
  By Chris Leung

  Description:

  React Native component that displays a quiz question along with controls to
  (1) toggle between showing the question and the answer, (2) submit a "correct"
  answer and (3) submit an  "incorrect" answer.

  Props:
    title: <String> Required. Contains the title of the deck the user is being
      quizzed on.
    questionText: <String> Required. The text of the quiz question.
    answerText: <String> Required. The text of the quiz question.
    questionNum: <Integer> Required. The question number (of total questions).
    numQuestions: <Integer> Required. The total number of questions.
    handleCorrect: <Function> Required. Callback that handles user submission
      of a "correct" answer.
    handleIncorrect: <Function> Required. Callback that handles user submission
      of an "incorrect" answer.
*/

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { styles } from '../utils/styles'
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
    const { title, questionText, answerText, questionNum, numQuestions, handleCorrect, handleIncorrect } = this.props
    const { showAnswer } = this.state

    let textContent, toggleFlashcardsButtonText

    if(showAnswer) {
      textContent = answerText
      toggleFlashcardsButtonText = 'Show Question'
    } else {
      textContent = questionText
      toggleFlashcardsButtonText = 'Show Answer'
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.mediumFont,{color: gray}]}>
            {questionNum}/{numQuestions}
          </Text>
          <Text style={styles.mediumFont}>
            {textContent}
          </Text>
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
        <Text style={styles.smallFont}>
          Currently studying "{title}"
        </Text>
      </View>
    )
  }
}

QuizQuestion.propTypes = {
  title: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  answerText: PropTypes.string.isRequired,
  questionNum: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
  handleCorrect: PropTypes.func.isRequired,
  handleIncorrect: PropTypes.func.isRequired
}
