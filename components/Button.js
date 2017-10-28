import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button (props) {
  const { color, backgroundColor, onPress, children } = props
  return (
    <TouchableOpacity style={[styles.submitBtn, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.submitBtnText, { color }]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45
  },
  submitBtnText: {
    fontSize: 22,
    textAlign: 'center'
  },
})
