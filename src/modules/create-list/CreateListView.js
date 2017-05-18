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
    const {options, inviteList} = this.props;
    const {description, tags, topics, priv, nsfw} = options;
    let listObj = Object.assign(values, {
      description,
      tags: tags.join(','),
      topics: topics.join(','),
      private: priv ? 1 : 0,
      nsfw: nsfw ? 1 : 0
    });
    let favezData = {image: this.props.currentList.image};

    console.log('CREATE_LIST_PROPS', this.props);
    console.log('CREATE_LIST_DATA_TO_SUBMIT', listObj);
    console.log('FAVEZ_DATA', favezData);

    this.props.dispatch(ListActions.createList({listData: listObj, inviteData: inviteList, favezData}))
      .then((data) => {
        console.log('LIST created', data);
        Actions.pop();
      })
      .catch((err) => {
        console.log('LIST_CREATE_FAILURE', err);
      });
  },

  toggleOption(field, val) {
    let toObj = {};
    toObj[field] = val;
    return this.props.dispatch(ListActions.setNewListOptions(toObj)).then(() => {
    })
  },

  pickListImage(){
      this.props.dispatch(ListActions.pickListImage());
  },

  render() {
    console.log('CREATE_LIST_VIEW_PROPS', this.props);
    const {options, inviteList, currentList} = this.props;
    return (
      <View style={{flex: 1}}>
        <CreateListHeader />
        <ScrollView
          contentContainerStyle={styles.container}
        >
          <Header title={'Create List'}/>
          <ImagePicker
            pickListImage={this.pickListImage}
            listImageUri={currentList.image}
            imageStatus={currentList.imageStatus} />
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
