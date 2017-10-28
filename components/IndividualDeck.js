/*
  Flashcards: components/IndividualDeck.js
  By Chris Leung

  Description:

  React component that displays details of an individual deck along with options
  to add new cards and start a quiz.

  Props:
    navigation: <Object> Required. React Navigation screen navigation prop.
    title: <String> Required. The deck title.
    questions: <Array> Required. The array of question objects for this deck.
*/

import React,  { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { gray } from '../utils/colors'
import { CONTAINER, MEDIUM_FONT, LARGE_FONT } from '../utils/styles'
import { removeHeaderIfAndroid } from '../utils/helpers'

class IndividualDeck extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
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
        <Text style={styles.mediumFont}>
          {numCards} Cards
        </Text>
        <FlashcardsButton
          onPress={() => navigation.navigate('NewQuestion', {title})}>
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

const styles = StyleSheet.create({
  container: CONTAINER,
  largeFont: LARGE_FONT,
  mediumFont: {
    ...MEDIUM_FONT,
    color: gray
  }
})

function mapStateToProps(state, props) {
  const { title }  = props.navigation.state.params
  return ({
    title,
    // The deck may not exist yet since it's created asynchronously
    questions: state.decks[title] ? state.decks[title].questions : []
  })
}

export default connect(mapStateToProps)(IndividualDeck)
