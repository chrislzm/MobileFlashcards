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
    /** Deck name */
    deckName: PropTypes.string.isRequired,
    /** Array of card objects for this deck */
    cards: PropTypes.array.isRequired,
    /** React Navigation screen navigation prop */
    navigation: PropTypes.object.isRequired
  }

  static navigationOptions = ({navigation}) => (
    removeHeaderIfAndroid()
  )

  startQuiz = (numCards,navigation,deckName) => {
    if(numCards === 0) {
      Alert.alert('Can\'t Start Quiz','Please add cards to this deck first')
    } else {
      navigation.navigate('Quiz', {deckName})
    }
  }

  render() {
    const { deckName, cards, navigation } = this.props
    const numCards = cards.length
    return (
      <View style={styles.container}>
        <Text style={styles.largeFont}>
          {deckName}
        </Text>
        <Text style={[styles.mediumFont, {color:gray}]}>
          {numCards} Cards
        </Text>
        <FlashcardsButton
          onPress={() => navigation.navigate('NewQuestion', { deckName })}>
          Add Card
        </FlashcardsButton>
        <FlashcardsButton
          onPress={() => this.startQuiz(numCards,navigation,deckName)}>
          Start Quiz
        </FlashcardsButton>
      </View>
    )
  }
}

function mapStateToProps(state, props) {
  const { deckName }  = props.navigation.state.params
  return ({
    deckName,
    // The deck may not exist yet since it's created asynchronously
    cards: state[deckName] ? state[deckName].cards : []
  })
}

export default connect(mapStateToProps)(IndividualDeck)
