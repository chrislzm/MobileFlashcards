import React,  { Component } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'
import { Alert } from 'react-native'
import { validateTextInput } from '../utils/helpers'
import { white, purple } from '../utils/colors'

class NewDeck extends Component {
  state = {
    title: ''
  }

  handleTextChange = (title) => {
    this.setState(() => ({
      title
    }))
  }

  handleSubmit = (title) => {
    const { dispatch, navigation } = this.props
    if(validateTextInput(title,'New deck name')) {
      dispatch(submitNewDeckTitle(title))
      this.setState({ title: ''})
      Alert.alert('Success!','Your deck has been created.')
      navigation.navigate('IndividualDeck',{title})
    }
  }

  render() {
    const { title } = this.state
    const { navigation } = this.props

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={styles.statusMessage}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={this.handleTextChange}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={() => this.handleSubmit(title)}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    backgroundColor: white
  },
  statusMessage: {
    fontSize: 40,
    textAlign: 'center'
  },
  submitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  textInput: {
    borderWidth:1,
    borderRadius: 7,
    fontSize:20,
    padding:10,
    marginTop:40,
    marginBottom:40
  }
})

export default connect()(NewDeck)
