import {
  connect
} from 'react-redux';
import AddFaveFormView from './AddFaveFormView';

export default connect(
  state => {
    return {
      myLists: state.getIn(['list', 'myLists']),
      myCollabs: state.getIn(['list', 'collaborations']),
      fave: state.getIn(['fave', 'current']),
      tabs: state.getIn(['ui','addFaveForm', 'tabs', 'set']),
      selectedTab: state.getIn(['ui', 'addFaveForm', 'tabs', 'selected']),
      selectedRadio: state.getIn(['ui', 'addFaveForm', 'radio'])
    };
  }
)(AddFaveFormView);
