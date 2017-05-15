import React from 'react'
import {TextInput, View, Text, StyleSheet} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class SearchTextInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showPlaceholderText: props.value ? false : true
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }
  onFocus() {
    this.setState({
      showPlaceholderText: false
    })
  }
  onBlur() {
    this.setState({
      showPlaceholderText: this.props.value ? false : true
    })
  }
  renderIf = condition => element => condition ? element : null;
  render() {

    const {onChangeText, value} = this.props
    const {showPlaceholderText} = this.state

    return <View style={styles.searchWrapper}>
      <View style={styles.searchPlaceholder}>
        {this.renderIf(showPlaceholderText)(<FontAwesomeIcon
          style={styles.searchBarIcon}
          name='search'
        />)}
        {this.renderIf(showPlaceholderText)(<Text style={styles.t1}>SEARCH</Text>)}
      </View>
      <TextInput
        underlineColorAndroid="transparent"
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        style={styles.searchTextInput}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  }
}
export default SearchTextInput

const styles = StyleSheet.create({
  searchWrapper: {
    //borderWidth: 1
  },
  searchPlaceholder: {
    backgroundColor: '#f8f8f6',
    position: 'absolute',
    top: 15, left: 15, bottom: 15, right: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  searchBarIcon: {
    height: 20,
    fontSize: 20,
    color: '#a9a9a9',
    marginRight: 10
  },
  t1: {
    fontFamily: 'OpenSans-Semibold',
    color: '#a4a4a4',
    fontSize: 17
  },
  searchTextInput: {
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
    paddingLeft: 10
  }
})
