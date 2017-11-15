import React,  { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import QuizQuestion from './QuizQuestion'
import QuizComplete from './QuizComplete'
import { removeHeaderIfAndroid } from '../utils/helpers'
import PropTypes from 'prop-types'

/**
 * Launches and runs a quiz for a given deck of flashcards.
 * @author Chris Leung
 */
class Quiz extends Component {

  static propTypes = {
    /** Title of the deck we are adding a new card to */
    title: PropTypes.string.isRequired,
    /** React Navigation screen navigation prop */
    navigation: PropTypes.object.isRequired,
    /** Array of question objects for this deck */
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

    if(questionIndex < numQuestions) {
      let { question, answer } = questions[questionIndex]
      return (
        <QuizQuestion
           title={title}
           questionText={question}
           answerText={answer}
           questionNum={questionIndex+1}
           numQuestions={numQuestions}
           handleCorrect={() => this.handleSubmitAnswer(true,questionIndex,numQuestions)}
           handleIncorrect={() => this.handleSubmitAnswer(false,questionIndex,numQuestions)}
        />
      )
    }
    return (
      <QuizComplete
        numCorrect={ numCorrect }
        numQuestions={ numQuestions }
        restartQuiz={ this.restartQuiz }
        navigation={ navigation }
      />
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
