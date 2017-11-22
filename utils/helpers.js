/**
 * @fileOverview Helper functions used throughout the Mobile Flashcards app
 * @author Chris Leung
*/

import { Alert, Platform } from 'react-native'

/**
 * Extracts values from an object's key:value pairs and puts them in an array.
 * Assigns the key to a 'key' property on the value object.
 * @param  {object} object
 * @return {array}
 */
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
 * @return {object} header: null
 */
export function removeHeaderIfAndroid() {
  if(Platform.OS === 'android')
  return {
    header: null
  }
}
/**
 * Checks if deck name is unique. Displays a modal when false.
 * @param  {string} name  Deck name
 * @param  {object} decks Object containing decks as title:data properties
 * @return {boolean}      True when unique, false otherwise
 */
export function validateIsUnique(name,decks) {
  const deckNames = Object.keys(decks)
  if(deckNames.includes(name)) {
    Alert.alert(`\"${name}\" already exists`, "Please choose a different name")
    return false
  }
  return true
}

/**
 * Checks if data is falsey (e.g. undefined or empty). When falsey, displays a
 * modal informing the user.
 * @param  {String} data Data to check
 * @param  {String} inputFieldName
 * @return {Boolean} True if data is non-empty, false otherwise.
 */
export function validateTextInput(data,inputFieldName) {
  if(!data) {
    Alert.alert('Error',`${inputFieldName} may not be empty`)
    return false
  }
  return true
}
