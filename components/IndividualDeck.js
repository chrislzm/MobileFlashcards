import React,  { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class IndividualDeck extends Component {

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
        <TouchableOpacity onPress={() => navigation.navigate('Quiz', {title})}>
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
