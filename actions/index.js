export const ADD_NEW_DECK = 'ADD_NEW_DECK'
import * as DecksAPI from '../utils/api'

/* Thunk Actions */

export const fetchDecks = () => dispatch => (
    DecksAPI.getDecks().then((decks) => {
      Objects.keys(decks).forEach(key => {
        const { title, questions } = decks[key]
        dispatch(addNewDeck(title,questions))
      })
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
