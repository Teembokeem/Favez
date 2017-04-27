import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import {
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import UserActions from '../../redux/user/userActions';
import ImagePicker from '../../components/create-list/imagePicker/imagePicker';
import Header from '../../components/globals/header/header';
import CreateListHeader from '../../components/create-list/createListHeader/createListHeader';
import CreateListForm from '../../components/create-list/createListForm/createListForm';

const FeedView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  createList(values) {
    console.log('values', values.toJS());
    const {options, inviteList} = this.props;
    const {description, tags, topics, priv, nsfw} = options;
    let listObj = Object.assign(values.toJS(), {
      description,
      tags: tags.join(','),
      topics: topics.join(','),
      private: priv ? 1 : 0,
      nsfw: nsfw ? 1 : 0
    });
    console.log('going into create list');
    this.props.dispatch(ListActions.createList({listData: listObj, inviteData: inviteList}))
      .then(Actions.pop)
      .catch((err) => {
        console.log('ERROR: ', err);
      });
  },

  toggleOption(field, val) {
    console.log('arguments', field, val);
    let toObj = {};
    toObj[field] = val;
    console.log('yo your object', toObj);
    return this.props.dispatch(ListActions.setNewListOptions(toObj)).then(() => {
      console.log('yay');
    })
  },

  render() {
    const {options, inviteList} = this.props;
    console.log('options', options, inviteList);
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
            collaborators={inviteList}
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
