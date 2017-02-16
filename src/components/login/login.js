import React from 'react';
// import TabBarButton from '../components/TabBarButton';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

function Login({user}) {
  const {email, password} = user;
  return (
    <TouchableOpacity style={[styles.Category]}>
      <Image
        style={styles.CategoryColor}
      />
      <Text>Login</Text>
      <TextInput
        value={email}
        placeholder='EMAIL'
      />
      <TextInput
        value={password}
        placeholder='PASSWORD'
      />
      <Ionicon style={styles.CategoryArrow} name='md-arrow-round-forward'/>
    </TouchableOpacity>
  );
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

export default Login;
