import {
  connect
} from 'react-redux';
import LoginView from './LoginView';

export default connect(
  state => {
    return {
      loading: state.getIn(['intro', 'loading'])
    }
  }
)(LoginView);
