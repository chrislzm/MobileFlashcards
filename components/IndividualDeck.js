import React,  { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { gray } from '../utils/colors'
import { styles } from '../utils/styles'
import { removeHeaderIfAndroid } from '../utils/helpers'

/**
 * Displays an individual deck's details along with controls to add new cards
 * to and start a quiz on the deck.
 * @author Chris Leung
 */
class IndividualDeck extends Component {

  static propTypes = {
    /** Deck title */
    title: PropTypes.string.isRequired,
    /** Array of question objects for this deck */
    questions: PropTypes.array.isRequired,
    /** React Navigation screen navigation prop */
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = ({navigation}) => (
    removeHeaderIfAndroid()
  )

  startQuiz = (numCards,navigation,title) => {
    if(numCards === 0) {
      Alert.alert('Can\'t Start Quiz','Please add cards to this deck first')
    } else {
      navigation.navigate('Quiz', {title})
    }
  }

  render() {
    const { title, questions, navigation } = this.props
    const numCards = questions.length
    return (
      <View style={styles.container}>
        <Text style={styles.largeFont}>
          {title}
        </Text>
        <Text style={[styles.mediumFont, {color:gray}]}>
          {numCards} Cards
        </Text>
        <FlashcardsButton
          onPress={() => navigation.navigate('NewQuestion', {deckTitle: title})}>
          Add Card
        </FlashcardsButton>
        <FlashcardsButton
          onPress={() => this.startQuiz(numCards,navigation,title)}>
          Start Quiz
        </FlashcardsButton>
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  const { title }  = props.navigation.state.params
  return ({
    title,
    // The deck may not exist yet since it's created asynchronously
    questions: state[title] ? state[title].questions : []
  })
}

export default connect(mapStateToProps)(IndividualDeck)
