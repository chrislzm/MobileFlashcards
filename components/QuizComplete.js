import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import FlashcardsButton from './FlashcardsButton'
import { CONTAINER, MEDIUM_FONT, LARGE_FONT } from '../utils/styles'
import PropTypes from 'prop-types'

export default function QuizComplete (props) {
  const { navigation, restartQuiz, numCorrect, numQuestions } = props
  return (
    <View style={styles.container}>
      <Text style={styles.largeFont}>Quiz complete!</Text>
      <Text style={styles.mediumFont}>Your Score:</Text>
      <Text style={styles.largeFont}>{Math.round(numCorrect*100.0/numQuestions)}%</Text>
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
