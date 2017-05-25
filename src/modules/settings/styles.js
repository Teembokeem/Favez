import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as ViewUtils from '../../utils/viewUtil';

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingTop: ViewUtils.STATUSBAR_HEIGHT,
    height: ViewUtils.APPBAR_HEIGHT + ViewUtils.STATUSBAR_HEIGHT * 2,
    width: ViewUtils.WINDOW_WIDTH
  },
  headerLeftButtons: {
    flex:1,
    paddingLeft: 20,
    alignItems:'flex-start'
  },
  headerLeftButton: {
    alignSelf: 'flex-start'
  },
  headerRightButton: {
    paddingRight: 20,
    alignSelf: 'flex-end'
  },
  headerRightButtons: {
    flex:1,
    alignItems:'flex-end'
  },
  headerButtonIcon: {
    width: 35,
    fontSize: 30,
    marginTop: 10,
    color: '#000000'
  },
  contentContainer: {
    flex:1,
    backgroundColor: '#F4F4F4'
  },
  settingsGroup: {
    borderTopColor: '#EEE',
    borderTopWidth: 0.5,
    marginBottom: 25
  },
  settingItem: {
    backgroundColor:'#FFF',
    borderBottomColor: '#EEE',
    borderBottomWidth: 0.5,
    height: 54,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: ViewUtils.WINDOW_WIDTH
  },
  settingItemWithLabel: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  settingItemContentContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:5,
    paddingBottom:5
  },
  settingItemText: {
    fontSize: 18,
    fontFamily: 'Hind-Medium',
  },
  settingItemIconContainer: {
    width:60,
    flexDirection: 'column',
    alignItems:'flex-end',
    marginRight:15
  },
  settingItemIcon: {
    fontSize: 23,
    alignSelf:'flex-end',
    color: '#cccccc'
  },
  settingItemLabel: {
    fontSize:12,
    fontWeight: 'bold',
    color: '#AAA'
  },
  settingItemHintText: {
    fontSize:13,
    color: '#BBB',
    fontFamily: 'Hind-Light',
    marginTop:-5
  },
  switchStyle: {
    alignSelf:'flex-end'
  },
  countryPicker: {
    width: ViewUtils.WINDOW_WIDTH,
    fontFamily: 'Hind-Medium'
  },
  deleteAccountText: {
    color: '#DD0000'
  },
  logoutButtonContainer: {
    flex:1,
    marginBottom:20
  },
  logoutTextContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Hind-Medium',
    color: '#888'
  }
});

export default styles;
