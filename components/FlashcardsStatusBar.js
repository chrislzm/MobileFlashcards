/*
  Flashcards: components/FlashcardsStatusBar.js
  By Chris Leung

  Description:

  React Native functional component that implements a custom status bar used
  throughtout this app.

  Props:
    backgroundColor: <String> Required. The color of the status bar on Android.
    StatusBar props: <Various> Optional. Props passed directly through to the stock
      StatusBar component. See https://facebook.github.io/react-native/docs/statusbar.html
*/

import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

export default function FlashcardsStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

FlashcardsStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired
}
