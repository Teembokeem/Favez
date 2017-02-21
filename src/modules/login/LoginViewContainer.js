import {
  connect
} from 'react-redux';
import LoginView from './LoginView';

export default connect(
  state => {
    return {
      user: state.getIn(['login', 'user']).toJS(),
      loading: state.getIn(['login', 'loading']),
    }
  }
)(LoginView);
