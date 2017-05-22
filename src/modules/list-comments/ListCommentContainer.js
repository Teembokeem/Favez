import {
  connect
} from 'react-redux';
import ListCommentView from './ListCommentView';

export default connect(
  state => {
    return {
              commentsByList: state.getIn(['list', 'commentsByList']),
    };
  }
)(ListCommentView);
