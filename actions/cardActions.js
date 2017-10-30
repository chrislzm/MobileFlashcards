import * as DecksAPI from '../utils/api'
import { ADD_NEW_QUESTION } from './types'

/* Thunk Actions */

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
