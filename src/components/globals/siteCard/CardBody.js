import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

function CardBody({card}) {
  console.log("dcd",card);


  return (
    <View style={[styles.cardBody]}>
      <TouchableOpacity>

        <Image
          style={styles.cardBodyImage}
          source={{uri: card.image}}>
       </Image>
      </TouchableOpacity>
      <View style={{marginTop: 10, marginBottom: 10}}>      
        <Text style={styles.cardName}>{card.name}</Text>
      <Text style={styles.cardLink}>{card.link}</Text>
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
  cardName:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    paddingTop: 4,
    paddingLeft: 5,

  },
  cardLink: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#C8C8C8',
    paddingTop: 2,
    paddingLeft: 5,

  },
  cardBodyMessage: {
    alignSelf: 'flex-start',
    paddingBottom: 15,
    fontFamily: 'Hind-Medium'
  },
  cardBodyImage: {
    width: 340,
    height: 140,
    alignSelf: 'center',

  },
  cardBodySiteTitleContainer: {
    height: 50,
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
