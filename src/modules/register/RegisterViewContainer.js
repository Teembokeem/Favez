import {
  connect
} from 'react-redux';
import RegisterView from './RegisterView';

export default connect(
  state => {
    return {
      user: state.getIn(['user', 'user']),
      loading: state.getIn(['intro', 'loading'])
    };
  }
)(RegisterView);
