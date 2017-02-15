import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

function CardHeader({header, increment, track, moving}) {

    return (
      <View 
       style={styles.cardHeader}
      >
          <Text onPress={moving} style={[styles.cardHeaderText]}>{header.topic.toUpperCase()}</Text>
          <TouchableOpacity
          >
              <IoniconIcon style={styles.cardheaderMore} name="ios-more"/>
          </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
  cardHeader: {
    height: 50,
    paddingLeft: 7,
    paddingRight: 14,
    justifyContent: 'center',
    backgroundColor: '#e8e8e8',
    width: 360,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardHeaderText: {
      flex: 1,
      alignSelf: 'center',
      fontFamily: 'Hind-Bold',
      textAlign: 'left',
      fontSize: 20,
  },
  cardheaderMore: {
    paddingTop: 10,
    fontSize: 30,
    flex: 1,
    alignSelf: 'center'

  }
});

export default CardHeader;
