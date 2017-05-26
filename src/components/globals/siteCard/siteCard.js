import React from 'react';
import CardActions from '../card/cardActions';
import CardBody from './CardBody';
import {sendListLikeDislike} from './../../../redux/list/listActions';

// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  View,
  Alert
} from 'react-native';

//const card=this.state.card;



function SiteCard({card}) {
  console.log("dvde",card);


  return (
    <View style={styles.card}>
      <CardBody card={card} />


        <CardActions
          card={card}
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
    marginRight: 5,
    borderRadius: 6
  },
  hello: {
    textAlign: 'center'
  },
  buttonWrapper: {
    flex: 1,
    position: 'relative'
  }
});

export default SiteCard;
