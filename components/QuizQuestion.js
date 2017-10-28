import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from './Button'
import { CONTAINER, MEDIUM_FONT, SMALL_FONT } from '../utils/styles'
import { red, green, gray } from '../utils/colors'

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

    let questionText, toggleButtonText

    if(showAnswer) {
      questionText = answer
      toggleButtonText = 'Show Question'
    } else {
      questionText = question
      toggleButtonText = 'Show Answer'
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={[styles.mediumFont,{color: gray}]}>{questionNum}/{numQuestions}</Text>
          <Text style={styles.mediumFont}>{questionText}</Text>
          <Button
            onPress={this.toggleShowAnswer}>
            {toggleButtonText}
          </Button>
        </View>
        <Button
          backgroundColor={green}
          onPress={() => this.submitAnswer(handleCorrect)}>
          Correct
        </Button>
        <Button
          backgroundColor={red}
          onPress={() => this.submitAnswer(handleIncorrect)}>
          Incorrect
        </Button>
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
