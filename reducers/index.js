import { ADD_NEW_DECK } from '../actions'

// Keys in our state will be days, values will be the metrics for the specific day
function decks (state = {}, action) {
  switch(action.type) {
    case ADD_NEW_DECK:
      const { title, questions } = action
      return {
        ...state,
        [title]: { title, questions }
      }
    default:
      return state
  }
}

export default decks
