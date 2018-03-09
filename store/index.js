/**
 * @fileoverview Creates the Redux store for the Mobile Flashcards app.
 * @author Chris Leung
*/

import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

// Uses thunk to separate persistent store operations from the rest of the app
const store = createStore(reducer, applyMiddleware(thunk))

export default store
