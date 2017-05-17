import React from 'react';
import {Actions} from 'react-native-router-flux';
import TabIcon from '../../TabIcon';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

function openFavoriteModal() {
  Actions.FavoriteModal();
}

function delegatePress(action) {
  switch (action) {
    case 'menu':
      // Actions.FavoriteModal();
      break;
    case 'bool':
      // Actions.pop();
      break;
    case 'outbound':
      // Actions.favorite();
      break;
    default :
      return null;
  }
}

function FooterTabs({TabProps}) {
  return (
  <View style={[styles.container]}>
    {TabProps.map((tab, index) => {
      return (
        <View
          key={'tab' + index}
          style={styles.tabSpace}
        >
          <TouchableOpacity
            onPress={() => delegatePress(tab.action)}
              style={styles.tabContainer}
          >
            <TabIcon
              style={styles.tabIcon}
              display={tab.icon}
            />
          </TouchableOpacity>
        </View>
      );
    })}
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // borderTopWidth: 0.3,
    borderColor: '#a8a8a8',
    width: 375,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 0
  },
  tabSpace: {
    height: 35,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20
  },
  flex2: {
    flex: 1,
    paddingRight: 20
  },
  headerRightButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 35,
    color: '#000000',
    alignSelf: 'flex-end'
  },
  placeHolder: {
    marginLeft: 20
  }

});

export default FooterTabs;
