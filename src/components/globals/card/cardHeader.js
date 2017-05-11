import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import card from './card';

function CardHeader({card, moving, track, subscribe, subscribed}) {
    console.log("recd subs sssss", subscribed);
    function SubscribeMe() {
        console.log("Subscribe Me Called... ", subscribe);
        subscribe("subsrciptions");
    };
    function UnsubscribeMe() {
        console.log("UnsubscribeMe");
        subscribe("unsubscribe");
    }
    return (
        <View style={styles.cardHeader}>
            {/*<Image
          source={{uri: header.picture}}
          style={{width: 360, height: 50, position: 'absolute', top: 0, left: 0}}
        />*/}

            <Text numberOfLines={1} onPress={() => moving(card.id)} style={[styles.cardHeaderText]}>{card.name.toUpperCase()}</Text>
            {subscribed
                ? (
                    <TouchableOpacity onPress={() => UnsubscribeMe()}>
                        <FontAwesome style={styles.cardUserUnSubscribe} name="bookmark" size={10} color="#fff"/>

                    </TouchableOpacity>
                )
                : (
                    <TouchableOpacity onPress={() => SubscribeMe()}>

                        <FontAwesome style={styles.cardUserSubscribe} name="bookmark-o" size={10} color="#fff"/>

                    </TouchableOpacity>

                )}

            <TouchableOpacity >
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

    },
    cardUserSubscribe: {
        backgroundColor: 'transparent',
        color: 'black',
        marginLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        flex: 1,
        alignSelf: 'center'
    },
    cardUserUnSubscribe: {

        color: 'black',
        marginLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        flex: 1,
        alignSelf: 'center'
    }
});

export default CardHeader;
