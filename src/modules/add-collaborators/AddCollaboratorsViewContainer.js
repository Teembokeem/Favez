import {
  connect
} from 'react-redux';
import AddCollaboratorsView from './AddCollaboratorsView';

export default connect(
  state => {
    return {
      collaborators: state.getIn(['user', 'collaborators_all']),
      inviteList: state.getIn(['list', 'inviteList'])
    };
  }
)(AddCollaboratorsView);
