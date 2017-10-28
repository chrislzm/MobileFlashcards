import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DEFAULT_BUTTON_COLOR } from '../utils/styles'
import { white } from '../utils/colors'

export default function FlashcardsButton (props) {
  const { onPress, children } = props

  // Update button color if one was passed into props
  let { backgroundColor } = props
  if(!backgroundColor) {
    backgroundColor = DEFAULT_BUTTON_COLOR
  }

  return (
    <TouchableOpacity style={[styles.submitButtton,{backgroundColor}]} onPress={onPress}>
      <Text style={styles.submitFlashcardsButtonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitButtton: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginBottom: 40
  },
  submitFlashcardsButtonText: {
    fontSize: 22,
    textAlign: 'center',
    color: white
  }
})
