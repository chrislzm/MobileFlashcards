import React,  { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
class Quiz extends Component {
  state = {
    index: 0,
    correct: 0,
    showAnswer: false
  }

  toggleShowAnswer = () => {
    this.setState((prevState) => ({ showAnswer: !prevState.showAnswer }))
  }

  submitAnswer = (correct,index,numQuestions) => {
    let delta = correct ? 1 : 0
    this.setState((prevState) => ({ index: prevState.index+1, correct: prevState.correct+delta }))
    if(index+1 === numQuestions) {
      clearLocalNotification()
      .then(setLocalNotification)
    }
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
            <Text>{Math.round(correct*100.0/numQuestions)}%</Text>
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
              <TouchableOpacity onPress={() => this.submitAnswer(true,index,numQuestions)}>
                <Text>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.submitAnswer(false,index,numQuestions)}>
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
    questions: state.decks[title].questions
  })
}
export default connect(mapStateToProps)(Quiz)
