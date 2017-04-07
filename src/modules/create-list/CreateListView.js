import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import {
  View,
  ScrollView,
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
  },

  createList(values) {
    this.props.dispatch(ListActions.createList(values.toJS()))
      .then(() => {
        // [TD3c] should proceed to create all list taxonomies.
        this.props.dispatch(ListActions.getMyLists()).then(() => {
          console.log('refreshing lists');
          Actions.pop();
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  },

  toggleOption(field, val) {
    console.log('arguments', field, val)
    return this.props.dispatch(ListActions.setNewListOptions({field: val})).then(() => {
      console.log('yay');
    })
  },

  render() {
    const {options} = this.props;
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
            options={options}
            toggleOption={this.toggleOption}
          />
        </ ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 375
  }
});

export default FeedView;
