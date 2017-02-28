import React from 'react';
import {Actions} from 'react-native-router-flux';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import IoniconIcon from 'react-native-vector-icons/Ionicons';
import TabIcon from '../../TabIcon';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;

function openFavoriteModal() {
  Actions.FavoriteModal();
}
function back() {
  Actions.pop();
}

function delegatePress(action) {
  switch (action) {
    case 'menu':
      console.log('showing context menu');
      // Actions.FavoriteModal();
      break;
    case 'bool':
      console.log('GETTING RID OF THIS BOOKMARk');
      Actions.pop();
      break;
    case 'outbound':
      console.log('traveling to message');
      Actions.favorite();
      break;
    default :
      return null;
  }
}

function FooterTabs({TabProps}) {
  console.log(TabProps)
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
            {/*<Text>{tab.name}</Text>*/}
          </TouchableOpacity>
        </View>
      );
    })}
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
    backgroundColor: 'transparent',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    // elevation: 4,
    // flex: 1,
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // paddingTop: STATUSBAR_HEIGHT,
    // height: APPBAR_HEIGHT + 10,
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
  // tabIcon: {
  //   width: 50,
  //   fontSize: 22
  // },
  flex2: {
    flex: 1,
    paddingRight: 20
  },
  headerRightButtonIcon: {
    height: 35,
    width: 35,
    fontSize: 35,
    // top: 30,
    // margin: 10,
    color: '#000000',
    alignSelf: 'flex-end'
  },
  placeHolder: {
    marginLeft: 20
  }

});

export default FooterTabs;
