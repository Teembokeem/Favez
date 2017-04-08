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

function Card({card, track, moving}) {
  return (
    <View style={styles.card}>
        <CardHeader
          card={card}
          moving={moving}
          track={track}
        />
        <CardUser
          card={card}
        />
        <CardBody
          card={card}
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
