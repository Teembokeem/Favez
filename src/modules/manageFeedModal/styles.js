import {StyleSheet, Dimensions, Platform} from 'react-native';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default styles;
