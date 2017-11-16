import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { clearLocalNotification, setLocalNotification } from '../utils/notification'
import { styles } from '../utils/styles'
import PropTypes from 'prop-types'

/**
 * "Quiz Complete" screen with controls to restart quiz or go back to the deck.
 * Clears notifications (reminder to take a quiz) and sets new one for tomorrow.
 * @author Chris Leung
 */
class QuizComplete extends Component {

  componentDidMount() {
    clearLocalNotification()
    .then(setLocalNotification)
  }

  render() {
    const { navigation, restartQuiz, numCorrect, numQuestions } = this.props
    const score = Math.round(numCorrect*100.0/numQuestions)
    return (
      <View style={styles.container}>
        <Text style={styles.largeFont}>
          Quiz complete!
        </Text>
        <Text style={styles.mediumFont}>
          Your Score:
        </Text>
        <Text style={styles.largeFont}>
          {score}%
        </Text>
        <FlashcardsButton
          onPress={restartQuiz}>
          Restart Quiz
        </FlashcardsButton>
        <FlashcardsButton
          onPress={() => navigation.goBack()}>
          Back to Deck
        </FlashcardsButton>
      </View>
    )
  }
}

QuizComplete.propTypes = {
  /** React Navigation screen navigation prop */
  navigation: PropTypes.object.isRequired,
  /** Callback that will relaunch the quiz */
  restartQuiz: PropTypes.func.isRequired,
  /** Number of questions answered correctly */
  numCorrect: PropTypes.number.isRequired,
  /** Total number of questions in the deck */
  numQuestions: PropTypes.number.isRequired
}

export default QuizComplete
