import {
  ADD_NEW_DECK,
  ADD_NEW_QUESTION,
  RESET_DECK_STORE
} from '../actions'

const DEFAULT_DECK_STATE = { notifications: {}, decks: {} }

// Keys in our state will be days, values will be the metrics for the specific day
function decks (state = DEFAULT_DECK_STATE, action) {
  const { title, question, questions } = action
  switch(action.type) {
    case ADD_NEW_DECK:
      return {
        ...state,
        ['decks']: {
          ...state['decks'],
          [title]: { title, questions }
        }
      }
    case ADD_NEW_QUESTION:
      return {
        ...state,
        ['decks']: {
          ...state['decks'],
          [title]: {
            ...state['decks'][title],
            questions: [
              ...state['decks'][title].questions,
              question
            ]
          }
        }
      }
    case RESET_DECK_STORE:
      return DEFAULT_DECK_STATE
    default:
      return state
  }
}

export default decks
