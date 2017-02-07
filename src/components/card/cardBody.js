import React, {PropTypes} from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

const {PropTypes: NavigationPropTypes} = NavigationExperimental;

function CardBody({body, value}) {

    return (
      <TouchableOpacity style={[styles.card]}>
          <Text style={[styles.hello]}>{body.title}</Text>
          <Text style={[styles.hello]}>{value}</Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  card: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    // top: 0,
    // backgroundColor: '#eee',
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  hello: {
          textAlign: 'center'
  },
});

export default CardBody;
