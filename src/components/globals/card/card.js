import React from 'react';
import CardHeader from './cardHeader';
import CardUser from './cardUser';
import CardBody from './cardBody';
import CardActions from './cardActions';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  View
} from 'react-native';

function Card({card, increment, track, moving}) {
  const {header, body, value, user, timeAgo} = card;
  return (
    <View style={styles.card}>
        <CardHeader
          header={header}
          moving={moving}
          track={track}
        />
        <CardUser
          user={user}
          time={timeAgo}
        />
        <CardBody
          body={body}
          value={value}
        />
        <CardActions />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // height: 1000,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: 360,
    marginBottom: 30
  },
  hello: {
    textAlign: 'center'
  },
  buttonWrapper: {
    flex: 1,
    position: 'relative'
  }
});

export default Card;
