import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SUBMIT_BUTTON, SUBMIT_BUTTON_TEXT } from '../utils/styles'

export default function Button (props) {
  const { color, backgroundColor, onPress, children } = props
  return (
    <TouchableOpacity style={[styles.submitButtton, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.submitButtonText, { color }]}>{children}</Text>
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
  submitButtonText: {
    fontSize: 22,
    textAlign: 'center'
  }
})
