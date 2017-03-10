import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as CreateListActions from './CreateListState';
// import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';


import ImagePicker from '../../components/create-list/imagePicker/imagePicker';
import Header from '../../components/globals/header/header';
import CreateListHeader from '../../components/create-list/createListHeader/createListHeader';
import CreateListForm from '../../components/create-list/createListForm/createListForm';


const FeedView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },

  moving(idx) {
    this.props.dispatch(ListActions.setList(idx)).then(() => Actions.listShow());
    // Actions.subbar();
  },

  setVisibilityHeaderMore() {
    this.props.dispatch(CreateListActions.setVisibility());
    // TODO get this onto UI actions.
  },

  createList(values) {
    console.log('CREATING LIST', values.toJS());
    this.props.dispatch(ListActions.createList(values.toJS())).then(() => {
      console.log('done');
      Actions.pop();
    }) ;
  },

  render() {
    // const {} = this.props;
    // const ds = this.state.dataSource;
    console.log(this.props);
    return (
      <View style={{flex: 1}}>
        <CreateListHeader />
        <ScrollView
          contentContainerStyle={styles.container}
        >
          <Header title={'Create List'}/>
          <ImagePicker />
          <CreateListForm
            createList={this.createList}
          />
        </ ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // backgroundColor: '#e9e9e9',
    // justifyContent: 'center',
    // height: 1000,
    // paddingTop: 20,
    // paddingBottom: 40,
    alignItems: 'center',
    width: 375
  }
});

export default FeedView;
