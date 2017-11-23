/**
 * @fileOverview AsyncStorage persistent store API for the Mobile Flashcards app
 * @author Chris Leung
*/

import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "Flashcards:decks"
const NOTIFICATION_STORAGE_KEY = 'Flashcards:notifications'

/* Deck and flashcard functions */

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

/* Notifications functions */

export const clearNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
)

export const getNotification = () => (
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
)

export const setNotification = () => (
  AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
)
