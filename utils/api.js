import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "Flashcards:decks"

export const addCardToDeck = (title,question) => (
  getDecks().then((data) => {
    const decks = JSON.parse(data)
    let { questions } = decks[title]
    if(!questions) {
      questions = []
    }
    questions.push(question)
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
      [title]: { questions }
    }))
  })
)

export const clearData = () => (
  AsyncStorage.removeItem(DECKS_STORAGE_KEY)
)

export const getDecks = () => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
)

export const saveDeckTitle = (title) => (
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [title]: { title, questions: [] }
  }))
)
