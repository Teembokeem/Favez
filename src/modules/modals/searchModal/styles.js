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
  },
  feedNavHeader: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT * 2
  },
  contentContainer: {
    flex:1,
    height: deviceHeight - (APPBAR_HEIGHT + STATUSBAR_HEIGHT * 2),
    alignItems:'center'
  },
  headerRightButtonText: {
    fontSize: 16,
    color: '#666666'
  },
  headerSearchBar: {
    width: deviceWidth - 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop:5,
    paddingLeft: 5,
    paddingRight: 20,
    backgroundColor: '#f8f8f6',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: 7,
    height: 35,
    flexDirection: 'row'
  },
  searchBarIcon: {
    height: 30,
    fontSize: 20,
    color: '#a9a9a9',
    alignSelf: 'flex-start',
    margin: 7
  },
  textInput: {
    fontSize:16,
    height: 38,
    borderWidth:0,
    width: deviceWidth - 140,
    color: '#666'

  },
  listContainer: {
    width: deviceWidth,
    marginTop:5
  },
  horizontalList: {
    flexDirection: 'row',
    paddingLeft:15,
    paddingRight:15,
    marginBottom:10,
    marginLeft:6,
    marginRight:6,
    minHeight:100
  },
  userLayout: {
    width: 86,
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
  },
  listItemLayout: {
    width: 120,
    height: 150,
    marginRight: 15,
    flexDirection:'column'
  },
  trendingListLayout: {
    height: 170
  },
  favezLayout: {
    height: 190
  },
  listItemThumb: {
    height:120,
    width:120,
    borderRadius:5,
    borderWidth:0.4,
    borderColor:'#DDD'
  },
  listItemTitle: {
    fontSize:16,
    color: '#444',
    marginTop:6
  },
  noResultContainer: {
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  },
  noResultText: {
    fontSize:16,
    fontStyle:'italic'
  },
  loader: {
    flex:1,
    alignSelf: 'center'
  },
  defaultTextContainer: {
    flex: 1,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center'
  },
  defaultText: {
    fontSize:18,
    paddingLeft:50,
    paddingRight: 50,
    textAlign:'center'
  }
});

export default styles;
