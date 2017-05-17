import React from 'react';
import {
  View, StyleSheet, ListView,
  TouchableOpacity, Platform,
  ActivityIndicator,
  Linking,
  InteractionManager,
  Alert,
  ScrollView,
  Text
} from 'react-native';
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


 class ManageBlock extends React.Component {

  setFilter(view, tab) {
    this.props.setViewTab(view, tab);
  }
  componentDidMount() {

  this.props.requestBlockedListAction('blocked');
  this.props.requestBlockedUsersList(this.props.user.favez.id);



  }
  renderTabPanels() {
const {selectedTab,loading,userBlockedPeople} = this.props;
return (
  <View style={styles.contentContainer}>
    {renderIf(loading)(<ActivityIndicator style={styles.loading}/>)}
    {selectedTab=='people' ? this.renderBlockedPeople() : null}
    {selectedTab=='list' ? this.renderBlockedList() : null}

      </View>
);
  }
  renderBlockedPeople(){
    let blockedPeople =  this.props.userBlockedPeople.length;
let flag =false;
    if(blockedPeople > 0){
      flag = true;
    }
    console.log("Number of blocked ",flag);


    return (


        this.props.userBlockedPeople.map((list, index) => (

  <Followee key={index} followee={list} blockeduserpage={'blockeduserpage'} />
        ))
    );
  }
  renderBlockedList(){
    let blockedList =  this.props.userBlockedList.length;
let flag =false;
    if(blockedList > 0){
      flag = true;
    }
    console.log("Number of blocked List ",flag);

      return (
        this.props.userBlockedList.map((list, index) => (
  <SubscribedLists list={list}  blockedlist={'blockedlist'}  key={index} />
        ))
      );
  }
  render() {
    const {tabs, selectedTab} = this.props;
    return (
      <View style={styles.base}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={Actions.pop}
              style={styles.backBtn} >
              <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back'/>
            </TouchableOpacity>
            <Header title={'BLOCKED & \nHIDDEN'}/>
            <Divider />
              <HeaderTabs
                view={'manageBlock'}
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
  tabs: state.getIn(['ui','manageBlock', 'tabs', 'set']),
  selectedTab: state.getIn(['ui','manageBlock', 'tabs', 'selected']),
  userBlockedList: state.getIn(['user', 'userBlockedList']),
  userBlockedPeople: state.getIn(['user','userBlockedPeople']),
    user: state.getIn(['user', 'user']),
}), dispatch => ({
  setViewTab: (view, tab) => dispatch(UIActions.setViewTab(view, tab)),
    requestBlockedListAction: (type) => dispatch(UserActions.requestBlockedListAction(type)),
        requestBlockedUsersList: (id) => dispatch(UserActions.requestBlockedUsersList(id)),
}))(ManageBlock)
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
  loading: {
    marginTop: 20
  }
})
