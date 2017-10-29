/*
  Mobile Flashcards: utils/api.js
  By Chris Leung

  Description:

  Persistent storage API for the Mobile Flashcards app. Provides convenience
  functions to store, retrieve, and clear data in AsyncStorage.

  Contains API functions for:
  (1) Decks and flashcards
  (2) Notifications
*/

import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "Flashcards:decks"
const NOTIFICATION_STORAGE_KEY = 'Flashcards:notifications'

// (1) API functions for decks and flashcards

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

// (2) API functions for notifications

export const clearNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
)

export const getNotification = () => (
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
)

export const setNotification = () => (
  AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
)
