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
import {toDuration} from '../../../utils/timeUtils.js'

function CardUser({card, time,follow,followed, showProfile}) {
  function FollowMe() {
      follow("follow");
  };
  function UnFollowMe() {
      follow("unfollow");
  };
  const user = (card.user && card.user.length) ? card.user[0] : {f1: 'Unknown'}
  return (
      <View style={[styles.cardUserContainer]}>
          <Image source={{uri: user.f3 ? user.f3 : 'https://www.google.com'}} style={[styles.cardUserImage]} />
          <View
            style={styles.cardUserInfoColumn}>
            <Text style={[styles.cardUserName]} onPress={showProfile}>{'@' + user.f1}</Text>
            <Text style={styles.cardUserAgo}>{toDuration(card.created) + ' ago'} </Text>
          </View>

              <TouchableOpacity onPress={() => followed ? UnFollowMe() : FollowMe()}>
                <IoniconIcon style={styles.cardUserSubscribe} name={followed ? 'md-person' : 'md-person-add'}/>
              </TouchableOpacity>

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
