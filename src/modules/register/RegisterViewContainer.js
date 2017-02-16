import {
  connect
} from 'react-redux';
import RegisterView from './RegisterView';

export default connect(
  state => {
    return {
      loading: state.getIn(['intro', 'loading'])
    }
  }
)(RegisterView);
