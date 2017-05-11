import {connect} from 'react-redux';
import ProfileView from './ProfileView';
import {pickProfileImage} from '../../redux/user/userActions'

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
export default connect(state => ({
  user: state.getIn(['user', 'user']),
  lists: state.getIn(['list', 'myLists']),
  comments: grabComments(state.getIn(['profile', 'lists']).get('data').toJS()),
  subscribedlists: state.getIn(['list', 'subscribedLists'])
}), dispatch => ({
  dispatch,
  onPickProfileImage: (onUploadingImage, onUploadedImage) => {
    dispatch(pickProfileImage(onUploadingImage, onUploadedImage))
  }
}))(ProfileView);
