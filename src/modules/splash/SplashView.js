import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const SplashView = React.createClass({
  fadeAnim: new Animated.Value(0),
  finishSplash() {
    setTimeout(() => {
      return Actions.intro();

    }, 1500);
  },
  componentDidMount() {
    Animated.timing(
     this.fadeAnim,
      {
        toValue: 1,
        duration: 1000
        // easing: Easing.elastic(2)
      }
    ).start(this.finishSplash);
  },

  render() {
    return (
      <View style={styles.container} >
        <Animated.Text style={[styles.text, {opacity: this.fadeAnim}]}>FAVEZ</Animated.Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 50,
    fontFamily: 'Hind-Bold',
    color: 'black'

  }
});

export default SplashView;
