import {
  connect
} from 'react-redux';
import AddFaveFormView from './AddFaveFormView';

export default connect(
  state => {
    console.log('this again?', state.getIn(['list', 'myLists']))
    return {
      myLists: state.getIn(['list', 'myLists']),
      myCollabs: state.getIn(['list', 'collaborations']),
      fave: state.getIn(['fave', 'current']),
      tabs: state.getIn(['ui','addFaveForm', 'tabs', 'set']),
      selectedTab: state.getIn(['ui', 'addFaveForm', 'tabs', 'selected']),
      selectedRadio: state.getIn(['ui', 'addFaveForm', 'radio'])
      // headerContextMenu: state.getIn(['feed', 'header'])
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      // loading: state.getIn(['feed', 'loading'])
    };
  }
)(AddFaveFormView);
