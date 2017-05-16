import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import card from './card';

function CardHeader({card, moving, track, subscribe, subscribed}) {
    function SubscribeMe() {
        subscribe("subsrciptions");
    };
    function UnsubscribeMe() {
        subscribe("unsubscribe");
    }
    return (
        <View style={styles.cardHeader}>
            <Text numberOfLines={1} onPress={() => moving(card.id)} style={[styles.cardHeaderText]}>{card.name.toUpperCase()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardHeader: {
        height: 50,
        paddingLeft: 7,
        paddingRight: 14,
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: 360,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    cardHeaderText: {
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
