import {
  connect
} from 'react-redux';
import SearchCollaboratorsView from './SearchCollaboratorsView';

export default connect(
  state => {
    return {
      collaborators: state.getIn(['user', 'collaborators_all']),
      inviteList: state.getIn(['list', 'inviteList'])
    };
  }
)(SearchCollaboratorsView);
