import React from 'react';
import CardHeader from './cardHeader';
import CardUser from './cardUser';
import CardBody from './cardBody';
import CardActions from './cardActions';
import {sendListLikeDislike} from './../../../redux/list/listActions';

// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  View,
  Alert
} from 'react-native';

//const card=this.state.card;



function Card({card, track, moving, userAction,userSubscribeAction,subscribed,  showProfile, browseFave,onUserAction,userActionData}) {


  return (
    <View style={styles.card}>
        <CardHeader
          card={card}
          moving={moving}
          track={track}
          subscribed={subscribed}
          subscribe={(usersubscribe)=>userSubscribeAction(usersubscribe,card.id)}
          />
        <CardUser
          card={card}


          showProfile={showProfile}
              onUserAction={onUserAction}
                userActionData={userActionData}
        />
        <CardBody
          browseFave={browseFave}
          card={card}
        />
        <CardActions
          card={card}
          actions={(action)=> userAction(action,card.id)}
        />
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
    width: 350,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 5
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
