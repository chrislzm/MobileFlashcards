import { ADD_NEW_DECK, ADD_NEW_QUESTION } from '../actions'

// Keys in our state will be days, values will be the metrics for the specific day
function decks (state = { notifications: {}, decks: {} }, action) {
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
    default:
      return state
  }
}

export default decks
