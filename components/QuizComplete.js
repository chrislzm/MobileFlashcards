import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Button from './Button'
import { CONTAINER, MEDIUM_FONT, LARGE_FONT } from '../utils/styles'

export default function QuizComplete (props) {
  const { navigation, restartQuiz, numCorrect, numQuestions } = props
  return (
    <View style={styles.container}>
      <Text style={styles.largeFont}>Quiz complete!</Text>
      <Text style={styles.mediumFont}>Your Score:</Text>
      <Text style={styles.largeFont}>{Math.round(numCorrect*100.0/numQuestions)}%</Text>
      <Button
        onPress={restartQuiz}>
        Restart Quiz
      </Button>
      <Button
        onPress={() => navigation.goBack()}>
        Back to Deck
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: CONTAINER,
  largeFont: LARGE_FONT,
  mediumFont: MEDIUM_FONT
})
