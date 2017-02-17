import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

function HeaderTabs({selected, tabs, setFilter}) {
  console.log("yoooooo vars", selected)
  return (
    <View style={[styles.HeaderTabs]}>
      {tabs.map((tab, index) => {
        return (
          <View
            style={styles.container}
            key={'tab ' + index}
          >
            <TouchableOpacity
                onPress={() => setFilter(tab)}
            >
              <Text
                style={[styles.HeaderTabsTab, {color: tab === selected ? 'black' : '#d8d8d8'}]}
              >
              {tab.toUpperCase()}
              </ Text>
            </TouchableOpacity>
          </ View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderTabs: {
    width: 375,
    padding: 6,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: '#efefef'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  HeaderTabsTab: {
    fontFamily: 'Hind-Bold',
    fontSize: 18,
    // paddingBottom: 5
  },
  HeaderTabsSeparator: {
    textAlign: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    height: 8,
    width: 60
  }
});

export default HeaderTabs;
