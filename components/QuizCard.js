import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { styles } from '../utils/styles'
import { red, green, gray } from '../utils/colors'
import PropTypes from 'prop-types'

/**
 * Displays a card and controls to:
 * (1) toggle between showing the question and the answer
 * (2) submit a "correct" answer
 * (3) submit an "incorrect" answer
 * @author Chris Leung
 */
export default class QuizCard extends Component {

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
    const { deckName, card, cardNum, numCards, handleCorrect, handleIncorrect } = this.props
    const { questionText, answerText } = card
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
            {cardNum}/{numCards}
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
          Currently studying "{deckName}"
        </Text>
      </View>
    )
  }
}

QuizCard.propTypes = {
  /** Title of the deck the user is being quizzed on */
  deckName: PropTypes.string.isRequired,
  /** Card to quiz */
  card: PropTypes.object.isRequired,
  /** Card number */
  cardNum: PropTypes.number.isRequired,
  /** Total number of cards */
  numCards: PropTypes.number.isRequired,
  /** Callback that handles user submission of a "correct" answer. */
  handleCorrect: PropTypes.func.isRequired,
  /** Callback that handles user submission of an "incorrect" answer. */
  handleIncorrect: PropTypes.func.isRequired
}
