/*
  Mobile Flashcards: components/Quiz.js
  By Chris Leung

  Description:

  React Native component that launches and runs a quiz for a given deck of
  flashcards. Uses QuizQuestion component to display the questions, and
  QuizComplete component to display the result once the quiz is complete. If a
  quiz is completed, it clears the local notification (a reminder to take a
  quiz) for the current day.

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    title: <String> Required. Passed via navigation.state.params. Contains the
      title of the deck we are adding a new card to.
    questions: <Array> Required. The array of question objects for this deck.
*/

import React,  { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import QuizQuestion from './QuizQuestion'
import QuizComplete from './QuizComplete'
import { CONTAINER } from '../utils/styles'
import { removeHeaderIfAndroid } from '../utils/helpers'
import PropTypes from 'prop-types'

class Quiz extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired
  }

  static navigationOptions = ({navigation}) => (
    removeHeaderIfAndroid()
  )

  state = {
    questionIndex: 0,
    numCorrect: 0
  }

  handleSubmitAnswer = (isCorrect,questionIndex,numQuestions) => {
    let points = isCorrect ? 1 : 0
    this.setState((prevState) => ({
      questionIndex: prevState.questionIndex+1,
      numCorrect: prevState.numCorrect+points
    }))
  }

  restartQuiz = () => {
    this.setState({
      questionIndex: 0,
      numCorrect: 0
    })
  }

  render() {
    const { title, questions, navigation } = this.props
    const { questionIndex, numCorrect } = this.state

    const numQuestions = questions.length
    const quizComplete = questionIndex === numQuestions

    let questionText, answerText
    if(!quizComplete) {
      questionText = questions[questionIndex].question
      answerText = questions[questionIndex].answer
    }

    return (
      <View style={styles.container}>
        { quizComplete && (
          <QuizComplete
            numCorrect={ numCorrect }
            numQuestions={ numQuestions }
            restartQuiz={ this.restartQuiz }
            navigation={ navigation }
          />
        )}
        { !quizComplete && (
          <QuizQuestion
             title={title}
             questionText={questionText}
             answerText={answerText}
             questionNum={questionIndex+1}
             numQuestions={numQuestions}
             handleCorrect={() => this.handleSubmitAnswer(true,questionIndex,numQuestions)}
             handleIncorrect={() => this.handleSubmitAnswer(false,questionIndex,numQuestions)}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: CONTAINER
})

function mapStateToProps(state, props) {
  const { title }  = props.navigation.state.params
  return ({
    title,
    questions: state[title].questions
  })
}
export default connect(mapStateToProps)(Quiz)
