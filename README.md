Mobile Flashcards
=================
By Chris Leung

Overview
--------
Mobile Flashcards is a React Native application for Android and iOS that allows users to study collections of flashcards. This app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

Installation
------------
1. Install [Expo](https://expo.io/) on your Android/iOS device or install an Android/iOS simulator on your computer
2. Install [Node.js](https://nodejs.org/en/) and [Create React Native App](https://github.com/react-community/create-react-native-app)
3. git clone or fork the [Mobile Flashcards project](https://github.com/chrislzm/Flashcards)
4. Run 'npm install' and then 'npm start' in the project directory
5. Follow the instructions to launch the app in the Expo app or in one of your simulators

Usage Notes
-----------
* Use the tabs on the main screen to view your decks, add new decks, and clear all decks
* After creating a new deck, it will also appear in the "Decks" tab where tapping on it will allow you to add cards to it or start a quiz
* Please note that a daily study reminder notification (at 8PM) is setup in two different situations:		
 1. The first time the app starts
 2. When a quiz is completed, any notifications for the current day will be cleared and a new one will be created for tomorrow

Development Notes
-----------------
This app has been tested on the following platforms:
1. iPhone 6S (iOS 10.3.3) device
2. iPhone X (iOS 11.0) Xcode simulator
3. Samsung Galaxy S8 (Android 7.0 API 24) Genymotion simulator (MacOS)

Decks and their title and cards are stored in both AsyncStorage and the Redux store with the following structure:
```
{
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
```

Known Issues
------------
* Status bar height may be too tall on some iOS devices. This is a style issue that does not affect functionality. For example, when tested on iOS 10.3.3 (device) and iOS 11 (simulator), it added too much extra height on both devices. When setting the status bar height to 0 for iOS 10.3.3, the height is correct, but then it becomes too short on iOS 11. This seems to be an issue with Expo, since the height is set with Expo.Constants.statusBarHeight (see FlashcardsStatusBar component).

Credits
-------
* This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)
