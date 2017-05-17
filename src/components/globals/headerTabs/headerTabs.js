import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

function HeaderTabs({view, selected, tabs, setFilter}) {
  return (
    <ScrollView
      contentContainerStyle={[styles.HeaderTabs]}
      directionalLockEnabled={true}
    >
      {tabs.map((tab, index) => {
        return (
          <View
            style={styles.container}
            key={'tab ' + index}
          >
            <TouchableOpacity
                onPress={() => setFilter(view, tab)}
            >
              <Text
                style={[styles.HeaderTabsTab, {color: tab === selected ? 'black' : '#A4A4A4'}]}
              >
              {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  HeaderTabs: {
    backgroundColor: 'white',
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
    fontSize: 18
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
