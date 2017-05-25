import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import card from './card';
import {NavigationExperimental,TouchableOpacity, StyleSheet, View, Alert, Share} from 'react-native';
const {PropTypes: NavigationPropTypes} = NavigationExperimental;

const CardActions = React.createClass({
    displayName: 'CardActions',
    
    likeus() {
        this.props.actions("like");
    },

    _shareText(card) {
        Share.share({
            message: `Hey! Check out this awesome link from FAVEZ: `,
            url: card.link,
            title: card.name
        }, {
            dialogTitle: card.description,
        })
    },

    render() {
        const {card} = this.props
        return (
            <View style={styles.cardActionContainer}>
                <TouchableOpacity onPress={() => this._shareText(card)} style={{marginTop: 0}}>
                    <EntypoIcon style={styles.cardActionLeft} name='share'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Subscribe and save fave goes here')} style={{marginTop: 0}}>
                    <FontAwesomeIcon style={styles.cardActionMiddle} name='heart'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.likeus()} style={{marginTop: 0}}>
                    <FontAwesomeIcon style={styles.cardActionRight}  name='thumbs-up'/>
                </TouchableOpacity>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    cardActionContainer: {
        height: 50,
        flex: 1,
        paddingTop: 10,
        width: 345,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardActionLeft: {
        height: 50,
        width: 50,
        fontSize: 30,
        marginLeft: 40,
        marginRight: 47.5,
        backgroundColor: 'transparent',
        color: '#b8b8b8'
    },
    cardActionMiddle: {
        height: 50,
        width: 50,
        fontSize: 30,
        marginLeft: 47.5,
        marginRight: 47.5,
        backgroundColor: 'transparent',
        color: '#b8b8b8'
    },
    cardActionRight: {
        height: 50,
        width: 50,
        fontSize: 30,
        marginLeft: 47.5,
        marginRight: 20,
        marginTop: 0,
        backgroundColor: 'transparent',
        color: '#b8b8b8'
    },
    hello: {
        textAlign: 'center'
    }
});

export default CardActions;
