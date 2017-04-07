import {
  connect
} from 'react-redux';
import CreateListView from './CreateListView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'all']),
      options: state.getIn(['list', 'options'])
    };
  }
)(CreateListView);
