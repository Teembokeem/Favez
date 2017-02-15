import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  Switch,
  View
} from 'react-native';

function LocationSpecifier() {
  const location = 'Romania';
  let switchOn = false;
  return (
    <View style={[styles.LocationSpecifier]}>
      <View>
        <Text
        style={styles.LocationSpecifierAction}
        >{'Location specific only'}</Text>
        <Text
        style={styles.LocationSpecifierActionText}
        >{'Only ' + location + ' marked lists will be shown when search or in topics'}</Text>
      </View>
      <View
        style={styles.LocationSpecifierSwitchContainer}
      >
        <Switch
            onValueChange={() => {switchOn = !switchOn;console.log(switchOn)}}
            style={styles.LocationSpecifierSwitch}
            value={switchOn}
        />
      </ View>
    </View>
  );
}

const styles = StyleSheet.create({
  LocationSpecifier: {
    width: 375,
    justifyContent: 'flex-start',
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    flexDirection: 'row'
  },
  LocationSpecifierAction: {
    fontFamily: 'Hind-Medium',
    fontSize: 17,
    marginBottom: -5
  },
  LocationSpecifierActionText: {
    textAlign: 'left',
    lineHeight: 15,
    paddingTop: 10,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'Hind-Medium',
    color: '#b2b2b2',
    maxWidth: 280,
    minWidth: 260
  },
  LocationSpecifierSwitchContainer: {
    maxWidth: 95,
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LocationSpecifierSwitch: {
    alignSelf: 'center'
  }
});

export default LocationSpecifier;
