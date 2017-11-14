import React,  { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { convertObjectToArrayWithKey } from '../utils/helpers'
import { fetchDecks } from '../actions'
import Deck from './Deck'
import { white } from '../utils/colors'
import { styles } from '../utils/styles'

/**
 * Displays a list of decks.
 * @author Chris Leung
 */
class Decks extends Component {

  static propTypes = {
    /** React Navigation screen navigation prop  */
    navigation: PropTypes.object.isRequired,
    /** Array of deck objects. See README.md for deck object structure. */
    decks: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.dispatch(fetchDecks())
  }

  // Callback for FlatList component
  renderItem = ({ item }) => {
    return (
      <Deck
        title={item.title}
        numCards={item.questions.length}
        navigation={this.props.navigation}
      />
    )
  }

  render() {
    const { decks } = this.props
    // If we have flashcard deck(s), dispay them
    if(decks.length !== 0) {
      return (
        <FlatList
          style={{flex: 1, backgroundColor: white}}
          data={decks}
          renderItem={this.renderItem}
        />
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.mediumFont}>No flashcards yet. Please add a new deck!</Text>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  decks: convertObjectToArrayWithKey(store)
})

export default connect(mapStateToProps)(Decks)
