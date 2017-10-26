import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "Flashcards:decks"

export const getDecks = (handler) => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
)

export const saveDeckTitle = (title) => (
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [title]: { title }
  }))
)
