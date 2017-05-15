import React from 'react';
import {
  View,
  StyleSheet,
  ListView
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as NotificationActions from '../../redux/notification/notificationActions';
import * as UIActions from '../../redux/ui/uiActions';
import NotificationHeader from '../../components/notification/notificationHeader/notificationHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Invitation from '../../components/notification/invitation/invitation';
import Notification from '../../components/notification/notification/notification'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const NotificationView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // console.log('hello', this.props);
    if (!this.props.user.favez) {
      Actions.intro()
    } else {
      this.props.dispatch(NotificationActions.getNotifs())
      .then(this.props.dispatch(NotificationActions.getInvites()));
    }
  },

  showNotifications() {
    switch (this.props.selectedTab) {
      case 'alerts':
        return <ListView
          dataSource={ds.cloneWithRows(this.props.notifications)}
          renderRow={(rowData) => {
            return <Notification
              notification={rowData}
              onPressRedirectToList={() => this.props.onPressRedirectToList(rowData.listId)}
            />
          }}
        />
      case 'invitiations':
      default:
        return <ListView
          dataSource={ds.cloneWithRows(this.props.invites)}
          renderRow={(invite) => {
            return <Invitation
              invitation={invite}
              onAccept={() => this.props.onAcceptInvitation(invite.id)}
              onReject={() => this.props.onRejectInvitation(invite.id)}
             />
          }}
        />
    }
  },
  moveIntro() {
    Actions.intro();
  },

  setFilter(view, tab) {
    console.log('view tab', view, tab)
    this.props.dispatch(UIActions.setViewTab('notification', tab));
  },

  render() {
    console.log('HI props', this.props);
    const {selectedTab, tabs} = this.props;
    return (
      <View style={styles.container}>
        <NotificationHeader />
        <Header title={'Notifications'}/>
        <View>
          <HeaderTabs
            view={'notification'}
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={tabs}/>
        </View>
        <View style={{flex: 1}}>
          {this.showNotifications()}
        </View>
        <View style={{height: 40}}></View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  contentContainer: {
    flex: 1
  }
});

export default NotificationView;
