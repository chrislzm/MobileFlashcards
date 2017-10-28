import React,  { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Alert } from 'react-native'
import { white, purple, gray } from '../utils/colors'
import { CONTAINER, MEDIUM_FONT, LARGE_FONT } from '../utils/styles'
import Button from './Button'

class IndividualDeck extends Component {

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
        <Text style={styles.largeFont}>{title}</Text>
        <Text style={styles.mediumFont}>{numCards} Cards</Text>
        <Button
          color={white}
          backgroundColor={purple}
          onPress={() => navigation.navigate('NewQuestion', {title})}>
          Add Card
        </Button>
        <Button
          color={white}
          backgroundColor={purple}
          onPress={() => this.startQuiz(numCards,navigation,title)}>
          Start Quiz
        </Button>
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
    questions: state.decks[title] ? state.decks[title].questions : []
  })
}

export default connect(mapStateToProps)(IndividualDeck)
