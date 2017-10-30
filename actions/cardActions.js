/*
  Mobile Flashcards: actions/cardActions.js
  By Chris Leung

  Description:

  Card-related Redux actions used in the Mobile Flashcards app.
*/

import * as DecksAPI from '../utils/api'
import { ADD_NEW_QUESTION } from './types'

/* Thunk Actions - Used to execute API calls to the persistent data store */

export const submitNewQuestion = (title, question) => dispatch => (
  DecksAPI.addCardToDeck(title, question).then(() => {
    dispatch(addNewQuestion(title,question))
  })
)

/* Redux Actions */

export function addNewQuestion (title, question) {
  return {
    type: ADD_NEW_QUESTION,
    title,
    question
  }
}
