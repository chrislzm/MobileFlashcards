import React,  { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Alert } from 'react-native'

class IndividualDeck extends Component {

  startQuiz = (numCards,navigation) => {
    if(numCards === 0) {
      Alert.alert('Can\'t Start Quiz','Please add cards to this deck first')
    } else {
      navigation.navigate('Quiz', {title})
    }
  }

  render() {
    const { title, questions, navigation } = this.props
    const numCards = questions ? questions.length : 0
    return (
      <View>
        <Text>{title}</Text>
        <Text>{numCards} Cards</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NewQuestion', {title})}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.startQuiz(numCards,navigation)}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps)(IndividualDeck)
