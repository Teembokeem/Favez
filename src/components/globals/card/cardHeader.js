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
        <Image style={styles.cardImage} source={ (card.list && card.list[0].bg_image) ? card.list[0].bg_image : require('../../../../images/buttons/rainbow.png')}>
            <View style={styles.cardHeader}>
                <Text numberOfLines={1} style={[styles.cardHeaderText]}>{card.name.toUpperCase()}
                </Text>
            </View>
        </Image>
    );
};

const styles = StyleSheet.create({
    cardHeader: {
        height: 50,
        paddingLeft: 7,
        paddingRight: 14,
        justifyContent: 'center',
        width: 360,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    cardImage: {
        flex: 1,
        resizeMode: 'cover',
        width: 360,
        height: 50,
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
