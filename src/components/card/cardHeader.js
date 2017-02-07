import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  NavigationExperimental,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

function CardHeader({header, increment, track}) {

    return (
      <TouchableOpacity 
       style={[styles.card]}
       onPress={() => increment(track)}
      >
          <Text style={[styles.hello]}>{header.topic}</Text>
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

export default CardHeader;
