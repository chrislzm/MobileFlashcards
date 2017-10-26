import { Alert } from 'react-native'
export function convertObjectToArrayWithKey(object) {
  return Object.keys(object).map((key) => {
    let arrayObj = object[key]
    arrayObj.key = key
    return arrayObj
  })
}


export function validateTextInput(data,name) {
  if(!data) {
    Alert.alert('Error',`${name} may not be empty`)
    return false
  }
  return true
}
