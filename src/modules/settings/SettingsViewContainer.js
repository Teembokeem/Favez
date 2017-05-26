import {
  connect
} from 'react-redux';
import SettingsView from './SettingsView';

export default connect(
  state => {
    return {
      user: state.getIn(['user','user']),
      settings: state.getIn(['user', 'settings']),
      location: state.getIn(['user', 'location']),
      countryPicker: state.getIn(['ui', 'picker', 'countryPicker']),
      state: state
    };
  }
)(SettingsView);
