/*
  Mobile Flashcards: reducers/index.js
  By Chris Leung

  Description:

  Contains the Redux root reducer used in the Mobile Flashcards app.

  As this application grows in the future, deck and card data should be
  refactored into separate reducers.
*/

import {
  ADD_NEW_DECK,
  ADD_NEW_QUESTION,
  REMOVE_ALL_DECKS
} from '../actions/types'

const DEFAULT_DECKS_STATE = {}

function decks (state = DEFAULT_DECKS_STATE, action) {
  const { title, question, questions } = action
  switch(action.type) {
    case ADD_NEW_DECK:
    return {
      ...state,
      [title]: { title, questions }
    }
    case ADD_NEW_QUESTION:
    return {
      ...state,
      [title]: {
        ...state[title],
        questions: [
          ...state[title].questions,
          question
        ]
      }
    }
    case REMOVE_ALL_DECKS:
    return DEFAULT_DECKS_STATE
    default:
    return state
  }
}

export default decks
