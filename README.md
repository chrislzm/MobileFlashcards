Mobile Flashcards
=================
By Chris Leung

Overview
--------
Mobile Flashcards is a React Native application for Android and iOS that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

Installation
------------
1. Install [Expo](https://expo.io/) on your Android/iOS device or install an Android/iOS simulator on your computer
2. Install [Node.js](https://nodejs.org/en/) and [Create React Native App](https://github.com/react-community/create-react-native-app)
3. git clone or fork the [Flashcards project](https://github.com/chrislzm/Flashcards)
4. Run 'npm install' and then 'npm start' in the project directory
5. Follow the instructions to launch the app in the Expo app or in one of your simulators

Known Issues
------------
The status bar height may be too tall on iOS devices. For example, when tested on iOS 10.3.3 (device) and iOS 11 (simulator), it added too much extra height on both devices (see FlashcardsStatusBar component). When setting the status bar height to 0 for iOS 10.3.3, the height is correct, but then it becomes too short on iOS 11. This seems to be an issue with Expo.

Development Notes
-----------------

This app has been tested on the following platforms:
1. iPhone 6S (iOS 10.3.3)
2. iPhone X (iOS 11.0) on MacOS simulator
3. Samsung Galaxy S8 (Android 7.0 API 24) on Genymotion simulator

Credits
-------
* This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app)


Known issues: Expo iOS Height is not correctly
