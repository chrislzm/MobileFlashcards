/**
 * @fileoverview The Redux root reducer used in the Mobile Flashcards app.
 * @todo Refactor deck and card data into separate reducers.
 * @author Chris Leung
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
