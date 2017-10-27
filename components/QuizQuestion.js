import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class QuizQuestion extends Component {

  state = {
    showAnswer: false
  }

  toggleShowAnswer = () => {
    this.setState((prevState) => ({ showAnswer: !prevState.showAnswer }))
  }

  render() {
    const { title, question, answer, questionNum, numQuestions, handleCorrect, handleIncorrect } = this.props
    const { showAnswer } = this.state

    return (
      <View>
        <Text>{title}, Question {questionNum}/{numQuestions}</Text>
        {
          !showAnswer && (
            <View>
              <Text>{question}</Text>
              <TouchableOpacity onPress={this.toggleShowAnswer}>
                <Text>Answer</Text>
              </TouchableOpacity>
            </View>
          )}
          {  showAnswer && (
            <View>
              <Text>{answer}</Text>
              <TouchableOpacity onPress={this.toggleShowAnswer}>
                <Text>Question</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={handleCorrect}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleIncorrect}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
