import React from 'react'
import {Text, View, ListView} from 'react-native'
import Notification from '../../components/notification/notification/notification';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Alerts extends React.Component {
  static defaultProps = {
    alerts: []
  };

  constructor(props) {
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(props.alerts.toJS())
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.alerts.toJS())
    })
  }

  render() {
    return <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => {
        return <Notification notification={rowData}/>
      }}
    />
  }
}
