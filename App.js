import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Foundation, Entypo } from '@expo/vector-icons'
import { purple, white } from './utils/colors'
import { Constants } from 'expo'
import Decks from './components/Decks'
import IndividualDeck from './components/IndividualDeck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

function FlashcardsStatusBar ({ backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Foundation name='list' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'Add New Deck',
      tabBarIcon: ({ tintColor }) => <Entypo name='add-to-list' size={30} color={tintColor} />
    }
  }
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ?  purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height:3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      headerBackTitle: 'Back to Decks'
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      headerBackTitle: 'Back'
    }
  },
  NewDeck: {
    screen: NewDeck
  },
  NewQuestion: {
    screen: NewQuestion
  },
  Quiz: {
    screen: Quiz
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <FlashcardsStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}