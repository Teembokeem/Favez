import React, {PropTypes} from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

function CardBody({card}) {

  return (
    <View style={[styles.cardBody]}>
        <Text style={[styles.cardBodyMessage]}>{card.description}</Text>
        <Image
          style={styles.cardBodyImage}
          source={{uri: card._favez[0].image}}
        >
        </Image>
        <View
          style={styles.cardBodySiteTitleContainer}
        >
          <Text
          style={styles.cardBodyScrapedTitle}>{card.name}</Text>
          <Text style={styles.cardBodySiteSemantic}>{card.location}</Text>
        </View>
    </View>
  );
  };

const styles = StyleSheet.create({
  cardBody: {
    flex: 1,
    // height: 1000,
    paddingTop: 15,
    paddingRight: 7,
    paddingLeft: 7
  },
  cardBodyMessage: {
    alignSelf: 'flex-start',
    paddingBottom: 15,
    fontFamily: 'Hind-Medium'
  },
  cardBodyImage: {
    width: 340,
    height: 150,
    alignSelf: 'center',
    flexGrow: 1
  },
  cardBodySiteTitleContainer: {
    height: 70,
    width: 340,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 10,
    flexDirection: 'column',
    shadowColor: '#b8b8b8',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    elevation: 10,
    borderRadius: 7
  },
  cardBodyScrapedTitle: {
    fontFamily: 'Hind-Bold',
    lineHeight: 16,
    paddingTop: 3
  },
  cardBodySiteSemantic: {
    fontSize: 12,
    color: '#b8b8b8'
  },

  hello: {
    textAlign: 'center'
  }
});

export default CardBody;
