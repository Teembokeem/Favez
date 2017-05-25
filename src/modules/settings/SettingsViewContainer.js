import {
  connect
} from 'react-redux';
import SettingsView from './SettingsView';

export default connect(
  state => {
    return {
      user: state.getIn(['user','user']),
      settings: state.getIn(['user', 'settings'])
    };
  }
)(SettingsView);
