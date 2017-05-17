import React from 'react';
import {Actions} from 'react-native-router-flux';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
} from 'react-native';
// import HeaderBack from '../../headerBack/headerBack';


const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 10 : 0;

const LoginHeader = React.createClass({

  openFavoriteModal() {
    Actions.FavoriteModal();
  },

  render() {
    return (
    <View style={[styles.feedNavHeader]}>
        <View
          style={styles.flex1}
        >
          <TouchableOpacity onPress={this.props.back} style={styles.headerBackButton} >
            <IoniconIcon style={styles.backButtonIcon} name='md-arrow-round-back'/>
          </TouchableOpacity>
        </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  feedNavHeader: {
    // alignItems: 'center',
    backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    elevation: 4,
    // flex: 1,
    width: 375,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT
  },
  flex1: {
    height: 35,
    flex: 1,
    paddingLeft: 20
  },
  headerBackButton: {
    
  },
  backButtonIcon: {
    width: 35,
    height: 35,
    fontSize: 30
  }

});

export default LoginHeader;
