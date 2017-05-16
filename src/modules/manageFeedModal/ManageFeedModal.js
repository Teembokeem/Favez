import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Animated,
    Dimensions,
    Platform,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';



import styles from './styles';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';



let {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export default class extends React.Component {

    componentDidMount() {}

    render() {
        return (
            <Text>Magae Feed View....
            </Text>
        );
    }

}
