import {
  connect
} from 'react-redux';
import AddFaveFormView from './AddFaveFormView';

export default connect(
  state => {
    return {
      lists: state.getIn(['list', 'myLists']),
      fave: state.getIn(['fave', 'current'])
      // headerContextMenu: state.getIn(['feed', 'header'])
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      // loading: state.getIn(['feed', 'loading'])
    };
  }
)(AddFaveFormView);
