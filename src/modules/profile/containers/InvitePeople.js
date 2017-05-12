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
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import Header from '../../../components/globals/header/header'
import InviteAction from '../presenters/InviteAction'
import Followee from '../presenters/Followee'
import Divider from '../presenters/Divider'
import * as userActions from '../../../redux/user/userActions.js'
import {followUser} from '../../feed/FeedState.js'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class ProfileView extends React.Component {
  constructor(props) {
    super(props)

    this.inviteFromFacebook = this.inviteFromFacebook.bind(this)
    this.follow = this.follow.bind(this)
    this.removeFollowee = this.removeFollowee.bind(this)
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.onGetUserToFollow()
    })
  }
  inviteFromFacebook() {

  }
  follow(id) {
    this.props.onFollow(id)
  }
  removeFollowee(id) {
    this.props.onRemoveFromFollowingList(id)
  }
  renderIf = condition => element => condition ? element : null;
  render() {
    const {collaborators, loading} = this.props

    return <View style={styles.base}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={Actions.pop}
            style={styles.backBtn}
          >
            <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back'/>
            </TouchableOpacity>
          <Header title={'DISCOVER &\nINVITE PEOPLE'}/>
        </View>

        <View style={styles.actions}>

          <Divider/>
          <InviteAction
            onPress={Actions.contactList}
            title='Invite from Contacts'
            icon={require('../../../../images/contact.png')}
          />

          <Divider/>
          <InviteAction
            onPress={this.inviteFromFacebook}
            title='Invite from Facebook'
            icon={require('../../../../images/f.png')}
          />

          <Divider/>
          <View style={styles.alreadyWrapper}>
            <Text style={styles.t}>Already on favez</Text>
            <Text style={styles.favezMemCount}>2</Text>
            <Image
              source={require('../../../../images/forward.png')}
              style={styles.rightIcon}
            />
          </View>
        </View>

        <View style={styles.followList}>

          {this.renderIf(loading)(<ActivityIndicator style={styles.loading}/>)}

          {this.renderIf(!loading)(<ListView
            dataSource={collaborators}
            enableEmptySections={true}
            renderRow={(followee) => {
              const {id} = followee
              return <View>
                <Followee
                  followee={followee}
                  onPressFollow={() => this.follow(id)}
                  onPressRemove={() => this.removeFollowee(id)}
                />
                <Divider/>
              </View>
            }}
          />)}
        </View>
    </View>
  }
}
export default connect(state => ({
  loading: state.getIn(['user', 'loading']),
  collaborators: ds.cloneWithRows(
    followable(
      toJS(state.getIn(['user', 'collaborators_all']))
    )
  )
}), dispatch => ({
  onGetUserToFollow: () => dispatch(userActions.requestUserToFollow()),
  onFollow: (id) => dispatch(followUser(id)),
  onRemoveFromFollowingList: (id) => dispatch(userActions.removeFromFollowList(id))
}))(ProfileView)

function followable(users) {
  //TODO waiting for back end
  return users.filter(user => !user.following && !user.removedFromFollowingList)
}

function toJS(immu) {
  if (immu.toJS) {
    return immu.toJS()
  }
  return immu
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f6f6f6'
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
