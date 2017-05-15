import React from 'react'
import {
  View,
  Text, StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ListView,
  ActivityIndicator,
  InteractionManager
} from 'react-native'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/globals/header/header';
import HeaderTabs from '../../../components/globals/headerTabs/headerTabs';
import Divider from '../presenters/Divider';

import * as UIActions from '../../../redux/ui/uiActions';
import * as UserActions from '../../../redux/user/userActions';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
renderIf = condition => element => condition ? element : null;

class UserFriendsView extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if(this.props.userId) {
      this.props.requestFollowingUsersList(this.props.userId);
      this.props.requestFollowerUsersList(this.props.userId);
    }
  }

  setFilter(view, tab) {
    this.props.setViewTab(view, tab);
  }

  renderTabPanels() {
    const {selectedTab, followers, following} = this.props;
    return (
      <View style={styles.followList}>
        {this.renderIf(loading)(<ActivityIndicator style={styles.loading}/>)}
      </View>
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
            <Header title={'YOUR \nFRIENDS'}/>
            <Divider />
            <HeaderTabs
              view={'userFriends'}
              setFilter={this.setFilter.bind(this)}
              selected={selectedTab}
              tabs={tabs}
            />
            <View style={styles.contentContainer}>
              {this.renderTabPanels.bind(this)}
           </View>
          </View>
      </View>
    );
  }
}

export default connect(state => ({
  loading: state.getIn(['user', 'loading']),
  tabs: state.getIn(['ui','userFriends', 'tabs', 'set']),
  selectedTab: state.getIn(['ui','userFriends', 'tabs', 'selected']),
  followings: state.getIn(['user', 'followingUsers'])
}), dispatch => ({
  setViewTab: (view, tab) => dispatch(UIActions.setViewTab(view, tab)),
  requestFollowerUsersList: (id) => dispatch(UserActions.requestFollowerUsersList(id)),
  requestFollowingUsersList: (id) => dispatch(UserActions.requestFollowingUsersList(id)),
}))(UserFriendsView)

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
