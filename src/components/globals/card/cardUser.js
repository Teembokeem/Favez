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

function CardUser({card, time, showProfile,onUserAction,userActionData}) {
  console.log("dcvf",userActionData);
  function renderUserActionIcon() {

    switch(userActionData.type) {
      case "follow_unfollow":
        return (

          <IoniconIcon style={styles.cardUserSubscribe} name={userActionData.data ? 'md-person' : 'md-person-add'}/>
      );

    }

  };
  const user = (card.user && card.user.length) ? card.user[0] : {f1: 'Unknown'}
  return (
      <View style={[styles.cardUserContainer]}>
          {/*<Image source={{uri: user.avatar}} style={[styles.cardUserImage]} />*/}
          <View
            style={styles.cardUserInfoColumn}>
            <Text style={[styles.cardUserName]} onPress={showProfile}>{'@' + user.f1}</Text>
            <Text style={styles.cardUserAgo}>{time}</Text>
          </View>

              <TouchableOpacity      onPress={() => onUserAction() }>
                {renderIf(userActionData.type)(renderUserActionIcon())}
{/*}                <IoniconIcon style={styles.cardUserSubscribe} name={followed ? 'md-person' : 'md-person-add'}/> */}
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
    width: 345,
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
  ListSubscribeIcons:{
    height: 25,
    width: 25
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
