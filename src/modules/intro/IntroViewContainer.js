import {
  connect
} from 'react-redux';
import IntroView from './IntroView';

export default connect(
  state => {
    return {
      // cards: state.getIn(['intro', 'cards']).get('data').toJS(),
      loading: state.getIn(['intro', 'loading'])
    }
  }
)(IntroView);
