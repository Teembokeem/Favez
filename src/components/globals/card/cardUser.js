import React, {PropTypes} from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

function CardUser({card, time,follow,followed}) {
  function FollowMe() {
      console.log("Follow  Me Called... ", follow);
      follow("follow");
  };
  function UnFollowMe() {
      console.log("UnFollow  Me Called... ", follow);
      follow("unfollow");
  };
  return (
      <View style={[styles.cardUserContainer]}>
          {/*<Image source={{uri: user.avatar}} style={[styles.cardUserImage]} />*/}
          <View
            style={styles.cardUserInfoColumn}>
            <Text style={[styles.cardUserName]}>{'@' + card.owner}</Text>
            <Text style={styles.cardUserAgo}>{time}</Text>
          </View>

          {followed
              ? (
                <TouchableOpacity onPress={() => UnFollowMe()}>
                  <IoniconIcon style={styles.cardUserSubscribe} name='md-person'/>
                </TouchableOpacity>
              )
              : (
                <TouchableOpacity onPress={() => FollowMe()}>
                  <IoniconIcon style={styles.cardUserSubscribe} name='md-person-add'/>
                </TouchableOpacity>

              )}

      </View>
  );
};

const styles = StyleSheet.create({
  cardUserContainer: {
    padding: 7,
    flex: 1,
    paddingRight: 14,
    flexDirection: 'row',
    borderBottomWidth: 2,
    width: 360,
    borderColor: '#f8f8f8',
    alignItems: 'center'
  },
  cardUserImage: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginRight: 6
  },
  cardUserInfoColumn: {
    flex: 1,
    paddingTop: 4
  },
  cardUserName: {
    fontFamily: 'Hind-Bold',
    fontSize: 13
  },
  cardUserAgo: {
    fontFamily: 'Hind-Light',
    fontSize: 13,
    position: 'relative',
    bottom: 4
  },
  cardUserSubscribe: {
    fontSize: 25
  }
});

export default CardUser;
