import React from 'react';
// import TabBarButton from '../components/TabBarButton';

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
    paddingBottom: 30,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderColor: '#efefef'
  },
  headerText: {
    fontFamily: 'Hind-Bold',
    fontSize: 35,
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
