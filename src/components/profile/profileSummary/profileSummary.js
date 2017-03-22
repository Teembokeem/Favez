import React from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

function ProfileSummary({user}) {
  const {auth0, favez} = user;
  const {nickname, picture, caption} = auth0;
  const {id, followers, following} = favez;
  return (
  <View style={styles.ProfileSummaryContainer}>
      <View
        style={styles.ProfileSummaryRow1}
      >
        <TouchableOpacity
            style={styles.ProfileSummaryRow1LeftContent}
        >
          <Text style={styles.ProfileSummaryRow1LeftNum}>{followers ? followers.length.toString() : 0}</Text>
          <Text style={styles.ProfileSummaryRow1LeftText}>{'followers'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.ProfileSummaryRow1CenterContent}
        >
          <Image style={styles.ProfileSummaryRow1Avatar} source={{uri: picture}}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.ProfileSummaryRow1RightContent}
        >
          <Text style={styles.ProfileSummaryRow1RightNum}>{following ? following.length.toString() : 00}</Text>
          <Text style={styles.ProfileSummaryRow1RightText}>{'following'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ProfileSummaryRow2}>
        <Text style={styles.ProfileSummaryRow2Username}>{'@' + nickname}</Text>
        {/*<Text style={styles.ProfileSummaryRow2Name}>{name.first + ' ' + name.last + '.'}</Text>*/}
        <View style={styles.ProfileSummaryRow2Bar}></View>
        <Text style={styles.ProfileSummaryRow2Caption}>{caption}</Text>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  ProfileSummaryContainer: {
    // alignItems: 'center',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    // elevation: 4,
    // // flex: 1,
    // width: 375,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  ProfileSummaryRow1: {
    flex: 1,
    width: 375,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ProfileSummaryRow1LeftContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ProfileSummaryRow1LeftNum: {
    fontFamily: 'Hind-Bold',
    fontSize: 15,
    height: 17
  },
  ProfileSummaryRow1LeftText: {
    fontFamily: 'Hind-Medium',
    fontSize: 15
  },
  ProfileSummaryRow1CenterContent: {
    flex: 1,
    padding: 15,
    alignItems: 'center'
  },
  ProfileSummaryRow1Avatar: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  ProfileSummaryRow1RightContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ProfileSummaryRow1RightNum: {
    fontFamily: 'Hind-Bold',
    fontSize: 15,
    height: 17
  },
  ProfileSummaryRow1RightText: {
    fontFamily: 'Hind-Medium',
    fontSize: 15
  },
  ProfileSummaryRow2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  ProfileSummaryRow2Username: {
    fontSize: 20,
    fontFamily: 'Hind-Bold',
    height: 25
  },
  ProfileSummaryRow2Name: {
    fontSize: 14,
    fontFamily: 'Hind-Bold'
  },
  ProfileSummaryRow2Bar: {
    width: 50,
    marginTop: 10,
    height: 7,
    backgroundColor: '#f1f1f1'
  },
  ProfileSummaryRow2Caption: {
    marginTop: 10,
    fontFamily: 'Hind-Regular',
    fontSize: 14,
    color: '#b8b8b8'
  }

});

export default ProfileSummary;
