import React from 'react'
import {
  View, StyleSheet, ListView,
  TouchableOpacity, Platform,
  ActivityIndicator,
  Linking,
  InteractionManager,
  Alert,
  Dimensions,
  ScrollView,
  Text
} from 'react-native'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import {Actions} from 'react-native-router-flux'
import Header from '../../../components/globals/header/header'
import Divider from '../presenters/Divider'
import Contact from '../presenters/Contact'
import SearchTextInput from '../presenters/SearchTextInput'
import {connect} from 'react-redux'
import HeaderTabs from '../../../components/globals/headerTabs/headerTabs';
var Contacts = require('react-native-contacts')
import * as UIActions from '../../../redux/ui/uiActions';
import * as UserActions from '../../../redux/user/userActions';
import SubscribedLists from '../presenters/SubscribedLists';
import Followee from '../presenters/Followee';


const window = Dimensions.get('window');



 class ManageFeedList extends React.Component {

  setFilter(view, tab) {
    this.props.setViewTab(view, tab);
  }
  componentDidMount() {

  this.props.requestSubscribedListAction('subscribed');
  this.props.requestFollowingUsersList(this.props.user.favez.id);



  }
  renderTabPanels() {
const {selectedTab,loading,userSubscribedList} = this.props;
return (
  <View style={styles.contentContainer}>
    {renderIf(loading)(<ActivityIndicator style={styles.loading}/>)}
    {selectedTab=='subscribed' ? this.renderSubscribedList() : null}
    {selectedTab=='following' ? this.renderFollowingUserList() : null}

      </View>
);
  }
  renderSubscribedList(){

      if(!!this.props.userSubscribedList && this.props.userSubscribedList.length > 0) {
        return (

          this.props.userSubscribedList.map((list, index) => (





              <SubscribedLists list={list}  subscribedlists={'subscribedlists'} key={index} />



          ))


        );


      }else{
        return (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}>There are No Subscribed Lists. </Text>
          </View>
        )

      }
  }
  renderFollowingUserList(){
      if(!!this.props.followingUsers && this.props.followingUsers.length > 0) {
        return (

          this.props.followingUsers.map((list, index) => (


  <Followee key={index} followee={list} followuserpage={'followuserpage'} isFollowing={true} />





          ))


        );

      }else{
        return (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}>There are no Users whom you are following. </Text>
          </View>
        )

      }




  }
  render() {
    const {tabs, selectedTab} = this.props;


    return (
      <View style={styles.base}>
          <View style={styles.header}>
            <View style={{
                flexDirection:'row',
                width: window.width
              }}>
              <View style={{
                  flex: 1,
                  width: window.width - 50
                }}>
              <TouchableOpacity
                onPress={Actions.pop}
                style={styles.backBtn} >
                <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back'/>
              </TouchableOpacity>
            </View>
            <View style={{
                flex: 1
              }}>
              <TouchableOpacity
                onPress={Actions.ManageBlock}
                style={styles.blockkBtn} >
                <IoniconIcon style={styles.headerLeftButtonIcon} name='md-warning'/>
              </TouchableOpacity>
</View>
            </View>
            <Header title={'MANAGE \nFEED'}/>
            <Divider />
              <HeaderTabs
                view={'manageFeed'}
                setFilter={this.setFilter.bind(this)}
                selected={selectedTab}
                tabs={tabs}
              />
          </View>
            <ScrollView contentContainerStyle={styles.container}>
              {this.renderTabPanels()}
            </ScrollView>
      </View>
    );

  }
}

export default connect(state => ({
  loading: state.getIn(['user', 'loading']),
  tabs: state.getIn(['ui','manageFeed', 'tabs', 'set']),
  selectedTab: state.getIn(['ui','manageFeed', 'tabs', 'selected']),
  userSubscribedList: state.getIn(['user', 'userSubscribedList']),
  followingUsers: state.getIn(['user','followingUsers']),
    user: state.getIn(['user', 'user']),




}), dispatch => ({
  setViewTab: (view, tab) => dispatch(UIActions.setViewTab(view, tab)),
    requestSubscribedListAction: (type) => dispatch(UserActions.requestSubscribedListAction(type)),
        requestFollowingUsersList: (id) => dispatch(UserActions.requestFollowingUsersList(id)),

}))(ManageFeedList)


const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  contentContainer: {
    flex: 1
  },
  header: {
    backgroundColor: 'white',
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
  blockkBtn:{
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
    flex:1,
    flexDirection:'row'
  },
  noResultText: {
    fontSize:16,
    fontStyle:'italic',
    margin: 15
  },
  loading: {
    marginTop: 20
  }
})
