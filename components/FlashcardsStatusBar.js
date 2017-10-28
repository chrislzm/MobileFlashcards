import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { Constants } from 'expo'

export default function FlashcardsStatusBar ({ backgroundColor, ...props}) {
  // Expo doesn't correctly set height for iOS; setting manually to 0
  let height = Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  return (
    <View style={{ backgroundColor, height }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
