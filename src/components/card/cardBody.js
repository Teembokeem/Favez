import React, {PropTypes} from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

function CardBody({body, value}) {

    return (
      <View style={[styles.cardBody]}>
          <Text style={[styles.cardBodyMessage]}>{body.message}</Text>
          <Image
            style={styles.cardBodyImage}
            source={{uri: body.image_scraped}}
          >
          </Image>
          <View
            style={styles.cardBodySiteTitleContainer}
          >
            <Text 
            style={styles.cardBodyScrapedTitle}>{body.title_scraped}</Text>
            <Text style={styles.cardBodySiteSemantic}>{body.site_semantic}</Text>
          </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  cardBody: {
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
    alignSelf: 'center'
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
  },
});

export default CardBody;
