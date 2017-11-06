/*
  Mobile Flashcards: utils/styles.js
  By Chris Leung

  Description:

  Contains shared React Native component styles used throughout the Mobile
  Flashcards app.

*/
import { StyleSheet } from 'react-native'
import { white, blue } from './colors'

export const DEFAULT_BUTTON_COLOR = blue

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    justifyContent: 'center',
    backgroundColor: white
  },
  smallFont: {
    fontSize: 15,
    textAlign: 'center'
  },
  mediumFont: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom:40
  },
  largeFont: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom:40
  },
  textInput: {
    borderWidth:1,
    borderRadius: 7,
    fontSize:20,
    padding:10,
    marginBottom:40
  }
})
