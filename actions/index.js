export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
import * as DecksAPI from '../utils/api'

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

export const submitNewDeckTitle = (title) => dispatch => (
  DecksAPI.saveDeckTitle(title).then(() => {
    dispatch(addNewDeck(title,[]))
  })
)

export const submitNewQuestion = (title, question) => dispatch => (
  DecksAPI.addCardToDeck(title, question).then(() => {
    dispatch(addNewQuestion(title,question))
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

export function addNewQuestion (title, question) {
  return {
    type: ADD_NEW_QUESTION,
    title,
    question
  }
}
