import {
  connect
} from 'react-redux';
import AddCollaboratorsView from './AddCollaboratorsView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'all'])
    };
  }
)(AddCollaboratorsView);
