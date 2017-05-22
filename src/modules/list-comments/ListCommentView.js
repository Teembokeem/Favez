import React, {PropTypes} from 'react';
import * as ListCommentState from './ListCommentState';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  Platform,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import * as favezActions from '../../redux/fave/faveActions';
import ListShowHeader from '../../components/list-show/listShowHeader/listShowHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import FooterTabs from '../../components/globals/footerTabs/footerTabs';
import Line from '../../components/globals/fave/line';
import Info from '../../components/globals/fave/info';
import Card from '../../components/globals/card/card';
import { selfFavezLiked } from '../../utils/userFollow';
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import Divider from '../profile/presenters//Divider';
import * as ListActions from '../../redux/list/listActions';

let selfFavezLikedIds =[];
const window = Dimensions.get('window');
const ListShowView = React.createClass({

  propTypes: {},
  componentWillMount() {
    this.props.dispatch(ListActions.commentsByListAction(11));
  },

  componentWillReceiveProps(nextProps) {

  },

  moving() {
  },

  setFilter(view, tab) {

  },

  browseFave(idx) {

  },






  render() {
    // if (!this.state.ready) return null;

console.log("comments by list recd..",this.props.commentsByList);
    return (
      <View style={styles.base}>
        <View style={styles.header}>
          <Image
              source={require('../../../images/default_list_picture.png')}
              style={styles.ListBackground}
          />
          <View style={{
            flexDirection: 'row',
            width: window.width
          }}>
            <View style={{
              flex: 1,
              width: window.width - 50
            }}>


              <TouchableOpacity
                onPress={Actions.pop}
                style={styles.backBtn} >
                <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back' />
              </TouchableOpacity>
            </View>

          </View>
          <Header title={'COMMENTS'} />
          <Divider />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Comments will come here.. </Text>

        </ScrollView>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // height: 1000,
    // paddingTop: 20,
    // marginTop: 20,
    justifyContent: 'flex-start',
    // paddingBottom: 50,
    alignItems: 'center',
    flex: 1
    // justifyContent: 'center'
  },
  ListBackgroundImageContainer: {
    position: 'absolute',
    width: window.width,
    height: 200,
    overflow: 'hidden'
  },
  ListBackgroundOverlay: {
    position: 'absolute',
    height: 200,
    width: window.width,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 3
  },
  ListBackgroundImage: {
    width: window.width,
    height: 300,
    position: 'absolute',
    top: 0
    // maxHeight: 100
  },
  base: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  contentContainer: {
    flex: 1
  },
  header: {
    backgroundColor: 'white',
    height: 200,
    ...Platform.select({
      ios: {
        paddingTop: 20
      }
    })
  },
  backBtn: {
    marginTop: 10,
    marginLeft: 10,
    width: 40
  },
  blockkBtn: {
    justifyContent: 'flex-end'
  },
  headerLeftButtonIcon: {
    width: 35,
    fontSize: 30,
    color: '#000000',
    alignSelf: 'flex-start'
  },
  actions: {
    backgroundColor: 'white'
  },
  followList: {
    marginTop: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  alreadyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45
  },
  t: {
    flex: 1,
    paddingLeft: 20,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16
  },
  favezMemCount: {
    marginRight: 20,
    color: '#cccccc',
    fontSize: 15,
    fontFamily: 'OpenSans-Extrabold'
  },
  rightIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 20
  },
  noResultContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  noResultText: {
    fontSize: 16,
    fontStyle: 'italic',
    margin: 15
  },
  loading: {
    marginTop: 20
  },
  ListBackground: {
    width: 355,
    height: 400,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    zIndex: -1
  }

});

export default ListShowView;
