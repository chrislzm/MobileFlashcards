import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { submitNewDeckTitle } from '../actions'
import PropTypes from 'prop-types'
import FlashcardsButton from './FlashcardsButton'
import { validateTextInput, validateIsUnique } from '../utils/helpers'
import { styles } from '../utils/styles'

/**
 * Allows user to create a new deck.
 * @author Chris Leung
 */
class NewDeck extends Component {

  static propTypes = {
    /** Dispatch function from the Redux store. */
    dispatch: PropTypes.func.isRequired,
    /** React Navigation screen navigation prop. */
    navigation: PropTypes.object.isRequired,
    /** The decks object from the Redux store. */
    decks: PropTypes.object.isRequired
  }

  state = {
    title: ''
  }

  handleTextChange = (title) => {
    this.setState(() => ({
      title
    }))
  }

  handleSubmit = () => {
    const { title } = this.state
    const { navigation, dispatch, decks } = this.props
    if(validateTextInput(title,'New deck name') && validateIsUnique(title,decks)) {
      dispatch(submitNewDeckTitle(title))
      this.setState({ title: ''})
      navigation.navigate('IndividualDeck',{title})
    }
  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
        <Text style={styles.largeFont}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={this.handleTextChange}
        />
        <FlashcardsButton
          onPress={this.handleSubmit}>
          Submit
        </FlashcardsButton>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (store) => ({
  decks: store
})

export default connect(mapStateToProps)(NewDeck)
