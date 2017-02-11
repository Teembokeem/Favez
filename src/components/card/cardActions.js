import React from 'react';
// import TabBarButton from '../components/TabBarButton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {
  NavigationExperimental,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

const CardActions = React.createClass({
  displayName: 'CardActions',
  propTypes: {
    // tabs: NavigationPropTypes.navigationState.isRequired,
    // height: PropTypes.number.isRequired,
    // currentTabIndex: PropTypes.number.isRequired,
    // switchTab: PropTypes.func.isRequired
  },

  render() {
    return (
      <View
        style={styles.cardActionContainer}
      >
        <EntypoIcon style={styles.cardActionLeft} name="share"/>
        <FontAwesomeIcon style={styles.cardActionMiddle} name="heart"/>
        <FontAwesomeIcon style={styles.cardActionRight} name="thumbs-up"/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  cardActionContainer: {
    height: 50,
    paddingTop: 20,
    width: 360,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },  
  cardActionLeft: {
    height: 50,
    width: 50,
    fontSize: 30,
    marginLeft: 20,
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
    backgroundColor: 'transparent',
    color: '#b8b8b8'
  },
  hello: {
          textAlign: 'center'
  },
});

export default CardActions;
