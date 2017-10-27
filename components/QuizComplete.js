import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function QuizComplete (props) {
  const { navigation, restartQuiz, numCorrect, numQuestions } = props
  return (
    <View>
      <Text>Quiz complete!</Text>
      <Text>Your Score:</Text>
      <Text>{Math.round(numCorrect*100.0/numQuestions)}%</Text>
      <TouchableOpacity onPress={restartQuiz}>
        <Text>Restart Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back to Deck</Text>
      </TouchableOpacity>
    </View>
  )
}
