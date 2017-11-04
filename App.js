/*
  Mobile Flashcards: App.js
  By Chris Leung

  Description:

  Renders the Mobile Flashcards app. Uses a TabNavigator contained within a
  StackNavigator to display and route views. Uses a Redux store for convenience
  so that components can directly access data when needed. Note that the Redux
  store uses thunk to completely abstract-away persistent data access from the
  app's React Native components.
*/

import React from 'react'
import { View } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import FlashcardsStatusBar from './components/FlashcardsStatusBar'
import MainNavigator from './Navigation'
import { blue } from './utils/colors'
import { setLocalNotification } from './utils/notification'

export default class App extends React.Component {
  componentDidMount() {
    // Sets a study reminder if one hasn't already been set
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={blue} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
