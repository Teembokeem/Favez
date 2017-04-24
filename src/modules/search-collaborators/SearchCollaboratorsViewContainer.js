import {
  connect
} from 'react-redux';
import SearchCollaboratorsView from './SearchCollaboratorsView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'all'])
    };
  }
)(SearchCollaboratorsView);
