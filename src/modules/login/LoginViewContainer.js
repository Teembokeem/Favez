import {
  connect
} from 'react-redux';
import LoginView from './LoginView';

export default connect(
  state => {
    return {
      user: state.getIn(['intro', 'user']),
      loading: state.getIn(['intro', 'loading']),
    }
  }
)(LoginView);
