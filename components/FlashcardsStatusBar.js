import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'
import PropTypes from 'prop-types'

/**
 * Implements a custom status bar used throughtout this app.
 * @author Chris Leung
 */
export default function FlashcardsStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

/**
 * React Native StatusBar props are acceptable and passed through to StatusBar
 * List of props: https://facebook.github.io/react-native/docs/statusbar.html
 */
FlashcardsStatusBar.propTypes = {
  /**
   *  The color of the status bar on Android.
   */
  backgroundColor: PropTypes.string.isRequired
}
