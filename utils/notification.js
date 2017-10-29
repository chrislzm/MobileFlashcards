/*
Readable: utils/notification.js
By Chris Leung

Description:

Contains helper functions to clear and set notification reminders to study
flashcards. Uses the storage API to hold state and determine whether a
notification has already been set or not. At most, one notification will exist
at any given time.

Notifcations are set in two different situations:
1) When the app starts and if no notifications have been set yet
2) When a quiz is completed, any notifications will be cleared and a new one
will be created

Credit: Source code from UdaciFitness, with modifications
Reference: https://github.com/udacity/reactnd-UdaciFitness-complete/blob/setLocalNotification/utils/helpers.js
*/

// Time that notification will appear, in 24-hour format (20 = 8PM)
const NOTIFICATION_HOUR = 20
const NOTIFICATION_MINUTE = 0

import { Notifications, Permissions } from 'expo'
import {
  clearNotification,
  getNotification,
  setNotification }
  from './api'

  export function clearLocalNotification() {
    clearNotification()
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
            // Clear to make sure we don't set two
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
