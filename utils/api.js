/**
 * @fileOverview AsyncStorage persistent store API for the Mobile Flashcards app
 * @author Chris Leung
*/

import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = "Flashcards:decks"
const NOTIFICATION_STORAGE_KEY = 'Flashcards:notifications'

/* Deck and flashcard functions */

/**
 * Adds a new card to an existing deck and saves to AsyncStorage
 * @param {String} title  Title of deck to add card to
 * @param {Object} card   Contains question:String answer:String properties
 * @return {Promise}
 */
export const addCardToDeck = (title,card) => (
  getDecks().then((data) => {
    const decks = JSON.parse(data)
    let { questions } = decks[title]
    if(!questions) {
      questions = []
    }
    questions.push(card)
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
      [title]: { questions }
    }))
  })
)

/**
 * Clears all deck (and card) data
 * @return {Promise}
 */
export const clearData = () => (
  AsyncStorage.removeItem(DECKS_STORAGE_KEY)
)

/**
 * Gets deck (and card) data
 * @return {Promise}  Contains stringifyed JSON string
 */
export const getDecks = () => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
)

/**
 * Save new (empty) deck
 * @param  {[type]} title Deck title
 * @return {Promise}
 */
export const saveDeckTitle = (title) => (
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [title]: { title, questions: [] }
  }))
)

/* Notifications functions */

/**
 * Clears notification data (but not actual notification in OS)
 * @return {Promise}
 */
export const clearNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
)

export const getNotification = () => (
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
)

export const setNotification = () => (
  AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
)
