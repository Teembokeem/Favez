import {
    connect
} from 'react-redux';
import ListCommentView from './ListCommentView';
export default connect(state => {
    return {
        commentsByList: state.getIn(['list', 'commentsByList']),
        user: state.getIn(['user', 'user']),
          loading: state.getIn(['list', 'loading']),
    };
})(ListCommentView);
