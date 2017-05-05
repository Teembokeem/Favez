import React from 'react'
import {
  View,
  Text, StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ListView,
  ActivityIndicator
} from 'react-native'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import Header from '../../../components/globals/header/header'
import InviteAction from '../presenters/InviteAction'
import Followee from '../presenters/Followee'
import Divider from '../presenters/Divider'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class ProfileView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      followees: ds.cloneWithRows([
        {title: '1'},
        {title: '2'}
      ])
    }

    this.inviteFromFacebook = this.inviteFromFacebook.bind(this)
    this.follow = this.follow.bind(this)
    this.removeFollowee = this.removeFollowee.bind(this)
  }
  inviteFromFacebook() {

  }
  follow() {

  }
  removeFollowee() {

  }
  renderIf = condition => element => condition ? element : null;
  render() {
    const {followees} = this.state

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

          {this.renderIf(false)(<ActivityIndicator style={styles.loading}/>)}

          {this.renderIf(true)(<ListView
            dataSource={followees}
            renderRow={() => {
              return <View>
                <Followee
                  onPressFollow={this.follow}
                  onPressRemove={this.removeFollowee}
                />
                <Divider/>
              </View>
            }}
          />)}
        </View>
    </View>
  }
}
export default connect(() => ({

}), () => ({

}))(ProfileView);

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
