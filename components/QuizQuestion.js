import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { styles } from '../utils/styles'
import { red, green, gray } from '../utils/colors'
import PropTypes from 'prop-types'

/**
 * Displays a quiz question and controls to:
 * (1) toggle between showing the question and the answer
 * (2) submit a "correct" answer
 * (3) submit an "incorrect" answer
 * @author Chris Leung
 */
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
  /** Title of the deck the user is being quizzed on */
  title: PropTypes.string.isRequired,
  /** Quiz question */
  questionText: PropTypes.string.isRequired,
  /** Quiz answer */
  answerText: PropTypes.string.isRequired,
  /** Question number */
  questionNum: PropTypes.number.isRequired,
  /** Total number of questions */
  numQuestions: PropTypes.number.isRequired,
  /** Callback that handles user submission of a "correct" answer. */
  handleCorrect: PropTypes.func.isRequired,
  /** Callback that handles user submission of an "incorrect" answer. */
  handleIncorrect: PropTypes.func.isRequired
}
