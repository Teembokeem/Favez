import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function Header({title}) {
  return (
    <View style={[styles.header]}>
      <Text
        style={styles.headerText}
      >{title.toUpperCase()}</Text>
      <Text
        style={styles.headerSeparator}
      ></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 375,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 0,
    backgroundColor: 'transparent'
  },
  headerText: {
    fontFamily: 'Hind-Bold',
    lineHeight: 40,
    fontSize: 35,
    paddingTop: 10,
    paddingBottom: 5
  },
  headerSeparator: {
    textAlign: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    height: 8,
    width: 60
  }
});

export default Header;
