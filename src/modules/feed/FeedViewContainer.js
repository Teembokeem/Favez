import {
    connect
} from 'react-redux';
import FeedView from './FeedView';
export default connect(state => {
    // console.log(state);
    return {
        lists: state.getIn(['list', 'all']),
        headerContextMenu: state.getIn(['ui', 'feed', 'header', 'contextMenu']).toJS(),
        selfFavezlist: state.getIn(['fave', 'selfFavezlist']),
        subscribedlists: state.getIn(['list', 'subscribedLists']),
        // headerContextMenu: state.getIn(['feed', 'header'])
        // cards: state.getIn(['feed', 'cards']).get('data').toJS(),
        // loading: state.getIn(['feed', 'loading'])
        followingUsers: state.getIn(['user', 'followingUsers']),
        user: state.getIn(['user', 'user']),
        recentFollowedUser: state.getIn(['user','recentFollowedUser']).toJS(),
        recentSubscribedList: state.getIn(['list','recentSubscribedList']).toJS()

    };
})(FeedView);
