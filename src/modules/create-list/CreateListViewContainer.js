import {
  connect
} from 'react-redux';
import CreateListView from './CreateListView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'all']),
      options: state.getIn(['list', 'options']),
      inviteList: state.getIn(['list', 'inviteList']).toJS(),
      currentList: state.getIn(['list', 'current']).toJS(),
      countryPicker: state.getIn(['ui', 'picker', 'countryPicker']).toJS(),
      topics: state.getIn(['search', 'categories']).get('data').toJS(),
      form : state.get('form').toJS()
    };
  }
)(CreateListView);
