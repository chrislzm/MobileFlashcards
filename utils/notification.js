/**
 * @fileoverview Helper functions to set and clear notification reminders.
 * @author Tyler Mcginnis
 * @author Chris Leung
 *
 * Original source code from Udacity/Tyler Mcginnis, with modifications. Visit:
 * {@link https://github.com/udacity/reactnd-UdaciFitness-complete/blob/setLocalNotification/utils/helpers.js}
*/

import { Notifications, Permissions } from 'expo'
import {
  clearNotification,
  getNotification,
  setNotification
} from './api' // Uses persistent store API to hold state information

// Time that notification will appear, in 24-hour format (20 = 8PM)
const NOTIFICATION_HOUR = 20
const NOTIFICATION_MINUTE = 0

export function clearLocalNotification() {
  return clearNotification()
  .then(Notifications.cancelAllScheduledNotificationsAsync())
}

function createNotification() {
  return {
    title: 'Review your flashcards!',
    body: "👋 don't forget to take a flashcard quiz today!",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  }
}

export function setLocalNotification() {
  getNotification()
  .then(JSON.parse)
  .then((data) => {
    // If we have NOT already set up a local notification
    if(data === null) {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
      .then(({ status }) => {
        if(status === 'granted') {
          // At most, one notification will exist at any given time
          Notifications.cancelAllScheduledNotificationsAsync()

          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate() + 1)
          tomorrow.setHours(NOTIFICATION_HOUR)
          tomorrow.setMinutes(NOTIFICATION_MINUTE)

          Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            {
              time: tomorrow,
              repeat: 'day'
            }
          )

          setNotification()
        }
      })
    }
  })
}
