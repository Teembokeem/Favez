import {
  connect
} from 'react-redux';
import AddFaveView from './AddFaveView';

export default connect(
  state => {
    console.log(state.getIn(['addFave', 'browser']))
    return {
      lists: state.getIn(['list', 'all']),
      url: state.getIn(['addFave', 'browser', 'url'])
      // headerContextMenu: state.getIn(['feed', 'header'])
      // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
      // loading: state.getIn(['feed', 'loading'])
    };
  }
)(AddFaveView);
