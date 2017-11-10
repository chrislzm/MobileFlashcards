import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { white } from '../utils/colors'
import { DEFAULT_BUTTON_COLOR } from '../utils/styles'

/**
 * Implements a button used throughtout this app.
 * @author Chris Leung
 */
export default function FlashcardsButton (props) {
  const { onPress, children, backgroundColor } = props

  return (
    <TouchableOpacity
      style={[styles.button,{backgroundColor}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

FlashcardsButton.defaultProps = {
  backgroundColor: DEFAULT_BUTTON_COLOR
}

FlashcardsButton.propTypes = {
  /**
   * Callback function for the onPress event.
   */
  onPress: PropTypes.func.isRequired,
  /**
   * The text wrapped by this component that will be used as the button text.
   */
  children: PropTypes.string.isRequired,
  /**
   * Button color. If not provided, default color will be used.
   */
  backgroundColor: PropTypes.string
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    height: 45,
    marginBottom: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: white
  }
})
