import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DEFAULT_BUTTON_COLOR } from '../utils/styles'
import { white } from '../utils/colors'
import PropTypes from 'prop-types'

export default function FlashcardsButton (props) {
  const { onPress, children } = props

  // Update button color if one was passed into props
  let { backgroundColor } = props
  if(!backgroundColor) {
    backgroundColor = DEFAULT_BUTTON_COLOR
  }

  return (
    <TouchableOpacity style={[styles.button,{backgroundColor}]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
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
