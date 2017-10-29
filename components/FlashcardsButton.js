/*
  Mobile Flashcards: components/FlashcardsButton.js
  By Chris Leung

  Description:

  React Native functional component that implements a button used throughtout
  this app.

  Props:
    onPress: <Function> Required. Callback function for the onPress event.
    children: <String> Required. Contains the text wrapped by this component
      that will be used as the button text.
    backgroundColor: <String> Optional. We can pass a different color for the
      button besides its default.
*/

import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { white } from '../utils/colors'
import { DEFAULT_BUTTON_COLOR } from '../utils/styles'

export default function FlashcardsButton (props) {
  const { onPress, children } = props
  let { backgroundColor } = props

    // Set default button color if none was passed in via props
  if(!backgroundColor) {
    backgroundColor = DEFAULT_BUTTON_COLOR
  }

  return (
    <TouchableOpacity
      style={[styles.button,{backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    height: 45,
    marginBottom: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: white
  }
})

FlashcardsButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}
