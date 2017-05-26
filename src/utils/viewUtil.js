import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

export const WINDOW_WIDTH = deviceWidth;
export const WINDOW_HEIGHT = deviceHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const TABBAR_HEIGHT = 38;

export function getContentHeight(hasHeader, hasFooter) {
  let height = deviceHeight;
  if(hasHeader) deviceHeight - (APPBAR_HEIGHT + STATUSBAR_HEIGHT * 2);
  return height;
}
