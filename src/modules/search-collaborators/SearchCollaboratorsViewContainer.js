import {
  connect
} from 'react-redux';
import SearchCollaboratorsView from './SearchCollaboratorsView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'all']),
      collaborators: state.getIn(['user', 'collaborators_all'])
    };
  }
)(SearchCollaboratorsView);
