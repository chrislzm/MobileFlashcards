import * as DecksAPI from '../utils/api'
import { ADD_NEW_DECK, RESET_DECKS_STORE } from './types'

/* Thunk Actions */

export const fetchDecks = () => dispatch => (
    DecksAPI.getDecks().then((data) => {
      if(data) {
        const decks = JSON.parse(data)
        Object.keys(decks).forEach(key => {
          const { title, questions } = decks[key]
          dispatch(addNewDeck(title,questions))
        })
      }
    })
)

export const removeAllDecks = () => dispatch => (
  DecksAPI.clearData().then(() => {
    dispatch(resetDeckStore())
  })
)

export const submitNewDeckTitle = (title) => dispatch => (
  DecksAPI.saveDeckTitle(title).then(() => {
    dispatch(addNewDeck(title,[]))
  })
)

/* Redux Actions */

export function addNewDeck (title, questions) {
  return {
    type: ADD_NEW_DECK,
    title,
    questions
  }
}

export function resetDeckStore () {
  return {
    type: RESET_DECKS_STORE
  }
}
