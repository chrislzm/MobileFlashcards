/*
  Mobile Flashcards: actions/index.js
  By Chris Leung

  Description:

  Contains all Redux actions and action types used in the Mobile Flashcards app.

  Thunk actions are used to execute "API" calls to the persistent data store and
  then dispatch other actions only after the requests have completed. Only Thunk
  actions interact with the "API" in the Readable app.
*/

export * from './deckActions'
export * from './cardActions'
