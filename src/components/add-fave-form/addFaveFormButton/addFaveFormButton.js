import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function AddFaveFormButton() {
  return (
    <View style={styles.createListButtonContainer}>
      <TouchableOpacity
        style={styles.createListButton}
      >
        <Text
          style={styles.createListButtonText}
        >CREATE LIST</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  createListButtonContainer: {
    width: 375,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    height: 70
  },
  createListButton: {
    flex: 1,
    maxHeight: 40,
    width: 300,
    borderRadius: 7,
    backgroundColor: '#0076ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  createListButtonText: {
    color: 'white',
    fontFamily: 'Hind-Bold',
    fontSize: 16
  }

});

export default AddFaveFormButton;
