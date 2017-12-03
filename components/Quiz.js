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
    deckName: PropTypes.string.isRequired,
    /** React Navigation screen navigation prop */
    navigation: PropTypes.object.isRequired,
    /** Array of card objects for this deck */
    cards: PropTypes.array.isRequired
  }

  static navigationOptions = ({navigation}) => (
    removeHeaderIfAndroid()
  )

  state = {
    cardIndex: 0,
    numCorrect: 0
  }

  handleSubmitAnswer = (isCorrect,cardIndex,numCards) => {
    let points = isCorrect ? 1 : 0
    this.setState((prevState) => ({
      cardIndex: prevState.cardIndex+1,
      numCorrect: prevState.numCorrect+points
    }))
  }

  restartQuiz = () => {
    this.setState({
      cardIndex: 0,
      numCorrect: 0
    })
  }

  render() {
    const { deckName, cards, navigation } = this.props
    const { cardIndex, numCorrect } = this.state

    const numCards = cards.length

    if(cardIndex < numCards) {
      let { questionText, answerText } = cards[cardIndex]
      return (
        <QuizQuestion
           deckName={deckName}
           questionText={questionText}
           answerText={answerText}
           cardNum={cardIndex+1}
           numCards={numCards}
           handleCorrect={() => this.handleSubmitAnswer(true,cardIndex,numCards)}
           handleIncorrect={() => this.handleSubmitAnswer(false,cardIndex,numCards)}
        />
      )
    }
    return (
      <QuizComplete
        numCorrect={ numCorrect }
        numCards={ numCards }
        restartQuiz={ this.restartQuiz }
        navigation={ navigation }
      />
    )
  }
}

function mapStateToProps(state, props) {
  const { deckName }  = props.navigation.state.params
  return ({
    deckName,
    cards: state[deckName].cards
  })
}
export default connect(mapStateToProps)(Quiz)
