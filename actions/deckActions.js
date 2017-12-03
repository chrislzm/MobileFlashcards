/**
 * @fileOverview Deck-related Redux actions used in the Mobile Flashcards app
 * @author Chris Leung
*/

import * as DecksAPI from '../utils/api'
import { ADD_NEW_DECK, REMOVE_ALL_DECKS } from './types'

/* Thunk Actions - Used to execute API calls to the persistent data store */

export const fetchDecks = () => dispatch => (
    DecksAPI.getDecks().then((data) => {
      if(data) {
        const decks = JSON.parse(data)
        Object.keys(decks).forEach(key => {
          const { deckName, cards } = decks[key]
          dispatch(addNewDeck(deckName,cards))
        })
      }
    })
)

export const removeAllDecks = () => dispatch => (
  DecksAPI.clearData().then(() => {
    dispatch(resetDeckStore())
  })
)

export const submitNewDeckName = (deckName) => dispatch => (
  DecksAPI.saveDeckName(deckName).then(() => {
    dispatch(addNewDeck(deckName,[]))
  })
)

/* Redux Actions */

export function addNewDeck (deckName, cards) {
  return {
    type: ADD_NEW_DECK,
    deckName,
    cards
  }
}

export function resetDeckStore () {
  return {
    type: REMOVE_ALL_DECKS
  }
}
