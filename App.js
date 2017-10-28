import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Foundation, Entypo, MaterialIcons } from '@expo/vector-icons'
import { blue, white } from './utils/colors'
import Decks from './components/Decks'
import FlashcardsStatusBar from './components/FlashcardsStatusBar'
import IndividualDeck from './components/IndividualDeck'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import Quiz from './components/Quiz'
import RemoveDecks from './components/RemoveDecks'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { setLocalNotification } from './utils/helpers'
import { IOS_HEADER_BACK } from './utils/styles'

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
  },
  RemoveDecks: {
    screen: RemoveDecks,
    navigationOptions: {
      tabBarLabel: 'Remove Decks',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='delete-sweep' size={30} color={tintColor} />
    }
  }
}, {
    navigationOptions: {
      title: 'Flashcards',
      headerTitleStyle: { color: white },
      headerStyle: {
          backgroundColor: blue
      }
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ?  blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
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
      headerBackTitle: 'Back'
    }
  },
  IndividualDeck: {
    screen: IndividualDeck,
    navigationOptions: {
      ...IOS_HEADER_BACK,
      headerBackTitle: 'Back to Deck'
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      ...IOS_HEADER_BACK
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      ...IOS_HEADER_BACK
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
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
