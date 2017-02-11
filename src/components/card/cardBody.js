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
          <Text style={[styles.hello]}>{body.message}</Text>
          <Image
            style={styles.cardBodyImage}
            source={{uri: body.image_scraped}}
          >

          </Image>
      </View>
    );
  };

const styles = StyleSheet.create({
  cardBody: {
    padding: 7,
  },
  cardBodyImage: {
    width: 340,
    height: 90,
    alignSelf: 'center'
  },

  hello: {
          textAlign: 'center'
  },
});

export default CardBody;
