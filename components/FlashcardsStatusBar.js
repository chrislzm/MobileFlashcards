import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
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
