import {
  connect
} from 'react-redux';
import SplashView from './SplashView';

export default connect(
  state => {
    return {
      loading: state.getIn(['intro', 'loading']),
      showSplash: state.getIn(['ui', 'splash'])
    }
  }
)(SplashView);
