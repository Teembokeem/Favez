import React from 'react'
import {fromJS} from 'immutable';
import {ListView} from 'react-native'
import Notification from '../../components/notification/notification/notification';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Alerts extends React.Component {
  static defaultProps = {
    alerts: fromJS([])
  };

  render() {
    console.log('alerts:::',this.props.alerts)
    return <ListView
      dataSource={ds.cloneWithRows(this.props.alerts.toJS())}
      renderRow={(rowData) => {
        return <Notification notification={rowData}/>
      }}
    />
  }
}
