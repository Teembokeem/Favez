import {connect} from 'react-redux';
import TabsView from './TabsView';

export default connect(
  state => ({
    // navigationState: state.get('navigationState').toJS()
  }),
  dispatch => ({
    // switchTab(index) {
    //   dispatch(switchTab(index));
    // },
    // pushRoute(index) {
    //   dispatch(pushRoute(index));
    // },
    // onNavigateBack() {
    //   dispatch(popRoute());
    // },
    // onNavigateCompleted() {
    //   dispatch(navigationCompleted());
    // }
  })
)(TabsView);

