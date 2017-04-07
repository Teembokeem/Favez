import {
  connect
} from 'react-redux';
import IntroView from './IntroView';

export default connect(
  state => {
    return {
      loading: state.getIn(['intro', 'loading']),
      splashScreen: state.getIn(['intro', 'splashScreen'])
    }
  }
)(IntroView);
