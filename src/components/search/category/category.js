import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import SLIcon from 'react-native-vector-icons/SimpleLineIcons';

function Category({category, moving}) {
  const {ref, semantic, color, image} = category;
  if (ref !== 'location-specific') {
    return (
      <TouchableOpacity
        style={[styles.Category]}
        onPress={() => moving(category)}
      >
        <View
          style={[styles.CategoryColor, {backgroundColor: color}]}
        />
        <Text style={[styles.CategoryText, {color: color}]}>{semantic.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      // <TouchableOpacity
      //  style={[styles.Category]}
      //  onPress={() => moving(category)}
      // >
      //   <SLIcon style={styles.CategoryIcon} name='globe'/>
      //   <Text style={[styles.CategoryText]}>{semantic.toUpperCase()}</Text>
      //   <Ionicon style={styles.CategoryArrow} name='md-arrow-round-forward'/>
      // </TouchableOpacity>
      null
    );

  }
}

const styles = StyleSheet.create({
  Category: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: 375,
    padding: 10,
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row',
    marginBottom: 1
  },
  CategoryColor: {
    borderRadius: 10,
    width: 65,
    height: 65
  },
  CategoryIcon: {
    fontSize: 55,
    paddingLeft: 5,
    width: 65,
    height: 65,
    color: '#81dde2'
  },
  CategoryText: {
    alignSelf: 'center',
    marginLeft: 20,
    fontFamily: 'Hind-Bold',
    fontSize: 18
  },
  CategoryArrow: {
    // position: 'absolute',
    marginLeft: 80,
    fontSize: 30,
    color: '#afafaf',
    alignSelf: 'center'
  },
  hello: {
    textAlign: 'center'
  },
  buttonWrapper: {
    flex: 1,
    position: 'relative'
  }
});

export default Category;
