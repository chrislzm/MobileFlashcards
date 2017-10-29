/*
  Mobile Flashcards: components/QuizComplete.js
  By Chris Leung

  Description:

  React Native functional component used in the Quiz component that displays a
  "Quiz Complete" screen with the score and controls to restart the quiz or go
  back to the deck.

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    restartQuiz: <Function> Required. Callback that will relaunch the quiz.
    numCorrect: <Integer> Required. The number rof questions answered correctly.
    numQuestions: <Integer> Required. The number of questions in the deck/quiz.
*/

import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { CONTAINER, MEDIUM_FONT, LARGE_FONT } from '../utils/styles'
import PropTypes from 'prop-types'

export default function QuizComplete (props) {
  const { navigation, restartQuiz, numCorrect, numQuestions } = props
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

const styles = StyleSheet.create({
  container: CONTAINER,
  largeFont: LARGE_FONT,
  mediumFont: MEDIUM_FONT
})

QuizComplete.propTypes = {
  navigation: PropTypes.object.isRequired,
  restartQuiz: PropTypes.func.isRequired,
  numCorrect: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired
}
