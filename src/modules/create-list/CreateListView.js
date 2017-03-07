import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as CreateListActions from './CreateListState';
// import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';


import ImagePicker from '../../components/create-list/imagePicker/imagePicker';
import Header from '../../components/globals/header/header';
import CreateListHeader from '../../components/create-list/createListHeader/createListHeader';
import CreateListForm from '../../components/create-list/createListForm/createListForm';

const window = Dimensions.get('window');

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
          <CreateListForm />
        </ ScrollView>
        <TouchableOpacity
          style={styles.CreateListButton}
        >
          <View
            style={styles.CreateListButtonTextContainer}
          >
            <Text style={styles.CreateListButtonText}>CREATE LIST</Text>
          </View>
        </TouchableOpacity>
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
    paddingTop: 20,
    // paddingBottom: 10,
    alignItems: 'center',
    width: 375
  },
  CreateListButton: {
    // flex: 1,
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: window.height,
    backgroundColor: '#4caf4e',
    // alignItems: 'center',
    // alignItems: 'flex-start',
    // justifyContent: 'center'
  },
  CreateListButtonTextContainer: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  CreateListButtonText: {
    fontFamily: 'Hind-Bold',
    fontSize: 19,
    color: 'white'
  }
});

export default FeedView;
