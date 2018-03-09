import React,  { Component } from 'react'
import { Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { submitNewDeckName } from '../actions'
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
    /** Dispatch function from the Redux store */
    dispatch: PropTypes.func.isRequired,
    /** React Navigation screen navigation prop */
    navigation: PropTypes.object.isRequired,
    /** Decks state object from the Redux store */
    decks: PropTypes.object.isRequired
  }

  state = {
    deckName: ''
  }

  handleTextChange = (deckName) => {
    this.setState(() => ({
      deckName
    }))
  }

  handleSubmit = () => {
    const { deckName } = this.state
    const { navigation, dispatch, decks } = this.props
    if(validateTextInput(deckName,'New deck name') && validateIsUnique(deckName,decks)) {
      dispatch(submitNewDeckName(deckName))
      this.setState({ deckName: ''})
      navigation.navigate('IndividualDeck',{deckName})
    }
  }

  render() {
    const { deckName } = this.state

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'>
        <Text style={styles.largeFont}>
          What is the name of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          value={deckName}
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
