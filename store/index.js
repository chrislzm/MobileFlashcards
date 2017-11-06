/*
  Mobile Flashcards: store/index.js
  By Chris Leung

  Description:

  Creates the Redux store for the Mobile Flashcards app. Note that the Redux
  store uses thunk to completely abstract-away persistent data access from the
  app's React Native components.
*/

import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

export default store
