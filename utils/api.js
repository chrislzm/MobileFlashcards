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
 * @param {String} deckName  Title of deck to add card to
 * @param {Object} card   Contains questionText and answerText properties
 * @return {Promise}
 */
export const addCardToDeck = (deckName,card) => (
  getDecks().then((data) => {
    const decks = JSON.parse(data)
    let { cards } = decks[deckName]
    if(!cards) {
      cards = []
    }
    cards.push(card)
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
      [deckName]: { cards }
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
 * @return {Promise}  Contains stringifyed JSON
 */
export const getDecks = () => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY)
)

/**
 * Save new (empty) deck
 * @param  {String} deckName Deck title
 * @return {Promise}
 */
export const saveDeckName = (deckName) => (
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY,JSON.stringify({
    [deckName]: { deckName, cards: [] }
  }))
)

/* Notifications functions: We store 'true' when OS notification has been set */

/**
 * Clears set notification (but not actual notification in the OS)
 * @return {Promise}
 */
export const clearNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_STORAGE_KEY)
)

/**
 * Gets notification set status
 * @return {Promise} Contains stringifyed JSON
 */
export const getNotification = () => (
  AsyncStorage.getItem(NOTIFICATION_STORAGE_KEY)
)

/**
 * Sets notification status
 * @return {Promise}
 */
export const setNotification = () => (
  AsyncStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(true))
)
