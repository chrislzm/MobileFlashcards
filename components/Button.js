import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DEFAULT_BUTTON_COLOR } from '../utils/styles'
import { white } from '../utils/colors'

export default function Button (props) {
  const { onPress, children } = props

  // Update button color if one was passed into props
  let { backgroundColor } = props
  if(!backgroundColor) {
    backgroundColor = DEFAULT_BUTTON_COLOR
  }

  return (
    <TouchableOpacity style={[styles.submitButtton,{backgroundColor}]} onPress={onPress}>
      <Text style={styles.submitButtonText}>{children}</Text>
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
    textAlign: 'center',
    color: white
  }
})
