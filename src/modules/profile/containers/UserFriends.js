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
import Followee from '../presenters/Followee';
import Follower from '../presenters/Follower';

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

    const {selectedTab, followingUsers, followerUsers, loading} = this.props;
    console.log('RENDER_FOLLOWING_LIST: ',(selectedTab === 'following'));
    return (
      <View style={styles.contentContainer}>
        {renderIf(loading)(<ActivityIndicator style={styles.loading}/>)}
        {renderIf(!loading && selectedTab === 'following')(
          <ListView
          dataSource={ds.cloneWithRows(toJS(followingUsers))}
          enableEmptySections={true}
          renderRow={(followingUser) => {
            const {id} = followingUser
            return (
              <View>
                <Followee
                  followee={followingUser}
                  isFollowing={true}
                />
                <Divider/>
              </View>
            )
          }} />)}
          {renderIf(!loading && selectedTab === 'followers')(
            <ListView
            dataSource={ds.cloneWithRows(toJS(followerUsers))}
            enableEmptySections={true}
            renderRow={(followerUser) => {
              const {id} = followerUser
              return (
                <View>
                  <Follower
                    follower={followerUser}
                    isFollower={true}
                  />
                  <Divider/>
                </View>
              )
            }} />)}
      </View>
    );
  }

  render() {
    const {tabs, selectedTab} = this.props;
    console.log('USER_FRIENDS_PROPS', this.props);
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
          </View>
          {this.renderTabPanels()}
      </View>
    );
  }
}

function toJS(immu) {
  if (immu.toJS) {
    return immu.toJS()
  }
  return immu
}

export default connect(state => ({
  loading: state.getIn(['user', 'loading']),
  tabs: state.getIn(['ui','userFriends', 'tabs', 'set']),
  selectedTab: state.getIn(['ui','userFriends', 'tabs', 'selected']),
  followingUsers: state.getIn(['user', 'followingUsers']),
  followerUsers: state.getIn(['user', 'followerUsers']),
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
    flex: 1,
    height:400,
    width: 400,
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
