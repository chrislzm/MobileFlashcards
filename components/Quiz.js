import React,  { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import QuizComplete from './QuizComplete'
import QuizQuestion from './QuizQuestion'
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
    index: 0,
    correct: 0
  }

  submitAnswer = (correct,index,numQuestions) => {
    let delta = correct ? 1 : 0
    this.setState((prevState) => ({
      index: prevState.index+1,
      correct: prevState.correct+delta
    }))
    if(index+1 === numQuestions) {
      clearLocalNotification()
      .then(setLocalNotification)
    }
  }

  restartQuiz = () => {
    this.setState({
      index: 0,
      correct: 0
    })
  }

  render() {
    const { title, questions, navigation } = this.props
    const { index, correct, showAnswer } = this.state
    const numQuestions = questions.length

    const quizComplete = index === numQuestions

    let question, answer
    if(!quizComplete) {
      question = questions[index].question
      answer = questions[index].answer
    }

    return (
      <View style={styles.container}>
        { quizComplete && (
          <QuizComplete
            numCorrect={ correct }
            numQuestions={ numQuestions }
            restartQuiz={ this.restartQuiz }
            navigation={ navigation }
          />
        )}
        { !quizComplete && (
          <QuizQuestion
             title={title}
             question={question}
             answer={answer}
             questionNum={index+1}
             numQuestions={numQuestions}
             handleCorrect={() => this.submitAnswer(true,index,numQuestions)}
             handleIncorrect={() => this.submitAnswer(false,index,numQuestions)}
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
    questions: state.decks[title].questions
  })
}
export default connect(mapStateToProps)(Quiz)
