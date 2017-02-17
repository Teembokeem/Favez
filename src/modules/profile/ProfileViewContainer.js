import {connect} from 'react-redux';
import ProfileView from './ProfileView';

function grabComments(lists) {
  const aggregatedComments = [];
  lists.map((list) => {
    list.comments.map((comment) => {
      const commentCopy = comment;
      commentCopy.listSource = list.name;
      commentCopy.listPicture = list.picture;
      aggregatedComments.push(commentCopy);
    });
  });

  return aggregatedComments;
}

export default connect(
  state => {
    const filteredLists = state.getIn(['profile', 'lists']).get('data').toJS().filter((list) => {
      if (state.getIn(['profile', 'selected']) === 'lists') {
        return state.getIn(['profile', 'user', 'data']).toJS().username === list.creator.name;
      } else if (state.getIn(['profile', 'selected']) === 'collabs') {
        return state.getIn(['profile', 'user', 'data']).toJS().username !== list.creator.name && list.collaborators.indexOf(state.getIn(['profile', 'user', 'data']).toJS().username) > -1;
      } else {
        return state.getIn(['profile', 'user', 'data']).toJS().username !== list.creator.name && list.collaborators.indexOf(state.getIn(['profile', 'user', 'data']).toJS().username) === -1;
      }
    });
    return {
      user: state.getIn(['profile', 'user', 'data']).toJS(),
      lists: filteredLists,
      comments: grabComments(state.getIn(['profile', 'lists']).get('data').toJS()),
      favez: state.getIn(['profile', 'favez']).get('data').toJS(),
      selected: state.getIn(['profile', 'selected']),
      loading: state.getIn(['profile', 'loading'])
    };
  }
)(ProfileView);
