import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import card from './card';


function CardHeader({card, moving, track,subscribe}) {
  function SubscribeMe() {
    console.log("Subscribe Me Called... ",subscribe);
              subscribe("subsrciptions");
  };
    return (
        <View style={styles.cardHeader}>
            {/*<Image
          source={{uri: header.picture}}
          style={{width: 360, height: 50, position: 'absolute', top: 0, left: 0}}
        />*/}
            <Text numberOfLines={1} onPress={() => moving(card.id)} style={[styles.cardHeaderText]}>{card.name.toUpperCase()}</Text>
            <TouchableOpacity >
                <Text onPress={() => SubscribeMe()}>Subscribe Me...</Text>
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
        backgroundColor: 'white',
        width: 360,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    cardHeaderText: {
        // backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'transparent',
        color: 'black',
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
        color: 'black',
        marginLeft: 30,
        paddingTop: 10,
        fontSize: 30,
        flex: 1,
        alignSelf: 'center'

    }
});

export default CardHeader;
