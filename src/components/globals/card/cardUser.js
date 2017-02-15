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

function CardUser({user, time}) {
  console.log('tiume', time);
  return (
      <View style={[styles.cardUserContainer]}>
          <Image source={{uri: user.picture}} style={[styles.cardUserImage]} />
          <View
            style={styles.cardUserInfoColumn}>
            <Text style={[styles.cardUserName]}>{user.username}</Text>
            <Text style={styles.cardUserAgo}>{time}</Text>
          </View>
          <TouchableOpacity>
            <IoniconIcon style={styles.cardUserSubscribe} name='md-person-add'/>
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
