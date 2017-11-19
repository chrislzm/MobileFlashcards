/**
 * @fileOverview Helper functions used throughout the Mobile Flashcards app
 * @author Chris Leung
*/

import { Alert, Platform } from 'react-native'

// Used with the Redux store. Coverts the store's key/value props to an array of
// objects, with the key being stored in a 'key' property in each object.
export function convertObjectToArrayWithKey(object) {
  return Object.keys(object).map((key) => {
    let arrayObj = object[key]
    arrayObj.key = key
    return arrayObj
  })
}

/**
 * Used in a static navigationOptions method in a StackNavigator component.
 * Removes the header in Android since we don't need the back button.
 * @return {Object} header: null
 */
export function removeHeaderIfAndroid() {
  if(Platform.OS === 'android')
  return {
    header: null
  }
}

// Returns true if a deck name is unique given a set of existing decks. If
// not unique, displays a UI modal informing the user and returns false.
export function validateIsUnique(name,decks) {
  const deckNames = Object.keys(decks)
  if(deckNames.includes(name)) {
    Alert.alert(`\"${name}\" already exists`, "Please choose a different name")
    return false
  }
  return true
}

// Returns true if data is non-empty. If empty, displays a UI modal informing
// the user and returns false.
export function validateTextInput(data,name) {
  if(!data) {
    Alert.alert('Error',`${name} may not be empty`)
    return false
  }
  return true
}
