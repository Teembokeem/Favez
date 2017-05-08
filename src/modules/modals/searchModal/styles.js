import {StyleSheet, Dimensions, Platform} from 'react-native';

var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  feedNavHeader: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT * 2
  },
  headerRightButtonText: {
    fontSize: 16,
    color: '#666666'
  },
  headerSearchBar: {
    width: deviceWidth - 100,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    paddingRight: 20,
    backgroundColor: '#f8f8f6',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    height: 35
  },
  searchBarIcon: {
    height: 24,
    fontSize: 20,
    color: '#a9a9a9',
    alignSelf: 'flex-start',
    margin: 5
  },
  listContainer: {
    width: deviceWidth,
    marginTop:5
  },
  horizontalList: {
    flexDirection: 'row',
    paddingLeft:15,
    paddingRight:15,
    height:120,
    marginBottom:10,
    marginLeft:6,
    marginRight:6
  },
  userLayout: {
    width: 86,
    height: 86,
    marginRight: 25,
    flexDirection:'column',
    alignItems:'center'
  },
  userThumb: {
    height:86,
    width:86,
    borderRadius:44,
  },
  userTitle: {
    fontSize:14,
    color: '#444',
    marginTop:6
  }
});

export default styles;
