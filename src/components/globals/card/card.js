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

// function userAction(actionType){
//   Alert.alert(actionType);
//   switch (actionType) {
//     case "like":
//     Alert.alert("Like is called...");
//   //  this.props.dispatch(sendListLikeDislike("like"));
//     // this.props.dispatch(ListReducer.fetchSimilarList(this.props.card.id));
//
//       break;
//     default:
//
//   }
//
// };


function Card({card, track, moving, userAction,userSubscribeAction,subscribed, userFollowAction, followed, showProfile, browseFave}) {


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
          follow={(userFollow)=>userFollowAction(userFollow,card.owner)}
          followed={followed}
          showProfile={showProfile}
        />
        <CardBody
          browseFave={browseFave}
          card={card}
        />
        <CardActions
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
