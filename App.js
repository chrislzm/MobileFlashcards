import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import FlashcardsStatusBar from './components/FlashcardsStatusBar'
import MainNavigator from './Navigation'
import { blue } from './utils/colors'
import { setLocalNotification } from './utils/notification'

/**
 * Renders the Mobile Flashcards app
 * @author Chris Leung
 */
export default class App extends React.Component {
  componentDidMount() {
    // Sets a study reminder if one hasn't already been set
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={blue} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
