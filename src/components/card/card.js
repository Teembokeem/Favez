import React from 'react';
import CardHeader from './cardHeader.js';
import CardUser from './cardUser.js';
import CardBody from './cardBody.js';
import CardActions from './cardActions.js';
// import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  Text,
  View
} from 'react-native';

function Card({card, increment, track, moving}) {
    const {header, body, value,  user, timeAgo} = card;
    return (
      <View style={[styles.card]}>
          <CardHeader
            header={header}
            increment={increment}
           track={track}
          >
          </CardHeader>
          <CardUser
           user={user}
           time={timeAgo}
          >
          </CardUser>
          <CardBody
           body={body}
           value={value}
           moving={moving}
          >
          </CardBody>
          <CardActions>

          </CardActions>
      </View>
    );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    width: 360,
    marginBottom: 50
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
