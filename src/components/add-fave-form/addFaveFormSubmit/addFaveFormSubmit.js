import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
const window = Dimensions.get('window');

const addFaveFormSubmit = React.createClass({
  text: 'Type a message (optional)',
  render() {
    console.log(this.props);
    const {submit} = this.props;
    return (
    <View style={styles.addFaveFormSubmitContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder={this.text}
        placeholderTextColor={'#c8c8c8'}
        onChangeText={(text) => {this.text = text;}}
      />
      <TouchableOpacity
      onPress={() => submit(this.text)}
      style={styles.FormSubmitButton}
      >
        <Text
        style={styles.FormSubmitButtonText}
        >ADD TO FAVEZ</Text>
      </TouchableOpacity>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  addFaveFormSubmitContainer: {
    borderTopWidth: 0.5,
    borderTopColor: '#d8d8d8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    // position: 'absolute',
    // bottom: 0,
    flexDirection: 'column',
    width: window.width
  },
  TextInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Hind-Regular',
    fontSize: 13,
    color: 'black'
  },
  FormSubmitButton: {
    flex: 1,
    width: window.width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4caf4e'
  },
  FormSubmitButtonText: {
    color: 'white',
    fontFamily: 'Hind-Bold'
  }

});

export default addFaveFormSubmit;
