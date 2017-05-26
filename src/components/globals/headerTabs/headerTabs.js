import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
const window = Dimensions.get('window');
function HeaderTabs({view, selected, tabs, setFilter}) {

  return (
    <View style={styles.parentScroll}>

    <ScrollView
      contentContainerStyle={[styles.HeaderTabs]}
      directionalLockEnabled={false}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
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
  </View>

  );
}

const styles = StyleSheet.create({
  HeaderTabs: {
    backgroundColor: 'white',
    padding: 6,
    minWidth: window.width
  },
  parentScroll:{
    flex:1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: '#efefef'

  },
  container: {

    alignItems: 'center',
    flex: 1

  },
  flexOneContainer: {
    flex: 1,
    alignItems: 'center'
  },
  HeaderTabsTab: {
    fontFamily: 'Hind-Bold',
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10
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
