import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

function CardHeader({header, moving}) {

  return (
    <View
      style={styles.cardHeader}
    >
        <Image
          source={{uri: header.picture}}
          style={{width: 360, height: 50, position: 'absolute', top: 0, left: 0}}
        />
        <Text numberOfLines={1} onPress={moving} style={[styles.cardHeaderText]}>{header.name.toUpperCase()}</Text>
        <TouchableOpacity
        >
            <IoniconIcon style={styles.cardheaderMore} name='ios-more'/>
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
    alignItems: 'flex-start'
  },
  cardHeaderText: {
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backgroundColor: 'transparent',
    color: 'white',
    flex: 1,
    maxWidth: 300,
    marginRight: 20,
    alignSelf: 'center',
    fontFamily: 'Hind-Bold',
    textAlign: 'left',
    fontSize: 20
  },
  cardheaderMore: {
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: 30,
    paddingTop: 10,
    fontSize: 30,
    flex: 1,
    alignSelf: 'center'

  }
});

export default CardHeader;
