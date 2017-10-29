/*
  Mobile Flashcards: actions/index.js
  By Chris Leung

  Description:

  Contains all Redux actions and action types used in the Mobile Flashcards app.

  Thunk actions are used to execute "API" calls to the persistent data store and
  then dispatch other actions only after the requests have completed. Only Thunk
  actions interact with the "API" in the Readable app.
*/

import * as DecksAPI from '../utils/api'

export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const RESET_DECKS_STORE = 'RESET_DECK_STORE'

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

export function resetDeckStore () {
  return {
    type: RESET_DECKS_STORE
  }
}
