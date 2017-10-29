/*
  Readable: reducers/index.js
  By Chris Leung

  Description:

  Contains the Redux root reducer used in the Flashcards app.
*/

import {
  ADD_NEW_DECK,
  ADD_NEW_QUESTION,
  RESET_DECKS_STORE
} from '../actions'

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
    case RESET_DECKS_STORE:
    return DEFAULT_DECKS_STATE
    default:
    return state
  }
}

export default decks
