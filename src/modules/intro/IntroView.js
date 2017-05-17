import React, {PropTypes} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const window = Dimensions.get('window');
const IntroView = React.createClass({

  introMove(state) {
    return Actions[state]();
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <View style={[styles.colorColumn, {backgroundColor: '#ff3824'}]}/>
          <View style={[styles.colorColumn, {backgroundColor: '#ff9600'}]}/>
          <View style={[styles.colorColumn, {backgroundColor: '#ffcd00'}]}/>
          <View style={[styles.colorColumn, {backgroundColor: '#4caf4e'}]}/>
          <View style={[styles.colorColumn, {backgroundColor: '#0076ff'}]}/>
        </View>
        <Image style={styles.logo} source={require('../../../images/logo_white.png')}/>
        <Image style={styles.splash} source={require('../../../images/splashImage.png')}/>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => this.introMove('login')}
          >
            <Text style={styles.signInText}>SIGN IN</Text>  
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => this.introMove('register')}
          >
            <Text style={styles.registerButtonText}>BECOME A FAVER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => this.introMove('tabbar')}
          >
            <Text style={styles.skipButtonText}>SKIP FOR NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // paddingBottom: 50,
    alignItems: 'center',
    paddingTop: 50
  },
  logo: {
    width: 0.6 * window.width,
    height: 80
  },
  splash: {
    width: 0.8 * window.width,
    resizeMode: 'contain',
  },
  backgroundContainer: {
    position: 'absolute',
    flexDirection: 'row',
    height: window.height,
    width: window.width
  },
  colorColumn: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // paddingBottom:,
    flexWrap: 'wrap'
  },
  signInButton: {
    maxHeight: 60,
    width: 300,
    flex: 1,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5
  },
  signInText: {
    fontFamily: 'Hind-Bold',
    fontSize: 20,
    color: 'black'
  },
  registerButton: {
    marginTop: 5,
    maxHeight: 60,
    width: 300,
    flex: 1,
    borderRadius: 12,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  registerButtonText: {
    fontFamily: 'Hind-Bold',
    fontSize: 20,
    color: 'white'
  },
  skipButton: {
    marginTop: 10
  },
  skipButtonText: {
    backgroundColor: 'transparent',
    fontFamily: 'Hind-Bold',
    fontSize: 18,
    color: 'white'
  }


});

export default IntroView;
