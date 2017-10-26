import React,  { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    index: 0,
    correct: 0,
    showAnswer: false
  }

  toggleShowAnswer = () => {
    this.setState((prevState) => ({ showAnswer: !prevState.showAnswer }))
  }

  submitCorrect = () => {
    this.setState((prevState) => ({ index: prevState.index+1, correct: prevState.correct+1 }))
  }

  submitIncorrect = () => {
    this.setState((prevState) => ({ index: prevState.index+1 }))
  }

  render() {
    const { title, questions } = this.props
    const { index, correct, showAnswer } = this.state
    const numQuestions = questions.length
    const quizComplete = index === numQuestions
    let question, answer
    if(!quizComplete) {
      question = questions[index].question
      answer = questions[index].answer
    }
    return (
      <View>
        { quizComplete && (
          <View>
            <Text>Quiz complete!</Text>
            <Text>Your Score:</Text>
            <Text>{correct*100.0/numQuestions}%</Text>
          </View>
        )}
        { !quizComplete && (
          <View>
            <Text>{title}, Question {index+1}/{numQuestions}</Text>
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
              <TouchableOpacity onPress={this.submitCorrect}>
                <Text>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.submitIncorrect}>
                <Text>Incorrect</Text>
              </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  const { title }  = props.navigation.state.params
  return ({
    title,
    questions: state[title].questions
  })
}
export default connect(mapStateToProps)(Quiz)
