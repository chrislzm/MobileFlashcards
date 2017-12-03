/**
 * @fileOverview Card-related Redux actions used in the Mobile Flashcards app
 * @author Chris Leung
*/

import * as DecksAPI from '../utils/api'
import { ADD_NEW_CARD } from './types'

/* Thunk Actions - Used to execute API calls to the persistent data store */

export const submitNewCard = (deckName, card) => dispatch => (
  DecksAPI.addCardToDeck(deckName, card).then(() => {
    dispatch(addNewCard(deckName, card))
  })
)

/* Redux Actions */

export function addNewCard (deckName, card) {
  return {
    type: ADD_NEW_CARD,
    deckName,
    card
  }
}
