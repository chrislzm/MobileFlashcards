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
  ADD_NEW_CARD,
  REMOVE_ALL_DECKS
} from '../actions/types'

const DEFAULT_DECKS_STATE = {}

function decks (state = DEFAULT_DECKS_STATE, action) {
  const { deckName, card, cards } = action
  switch(action.type) {
    case ADD_NEW_DECK:
    return {
      ...state,
      [deckName]: { deckName, cards }
    }
    case ADD_NEW_CARD:
    return {
      ...state,
      [deckName]: {
        ...state[deckName],
        cards: [
          ...state[deckName].cards,
          card
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
