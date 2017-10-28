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
  submitButtton: SUBMIT_BUTTON,
  submitButtonText: SUBMIT_BUTTON_TEXT
})
