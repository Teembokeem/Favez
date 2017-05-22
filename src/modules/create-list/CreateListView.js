import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';
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

import * as Utils from '../../utils/Utils';

const FeedView = React.createClass({
  propTypes: {},

  componentWillMount() {
  },

  createList(values) {
    const {options, inviteList, countryPicker, currentList} = this.props;
    const {description, tags, topics, priv, nsfw} = options;
    const { visible, set } = countryPicker;
    let selectedCountry = Utils.getCountryByCode(currentList.selectedCountry, set);
    let listObj = Object.assign(values, {
      description,
      tags: tags.join(','),
      topics: topics.join(','),
      private: priv ? 1 : 0,
      nsfw: nsfw ? 1 : 0,
      location: selectedCountry,
      bg_image: this.props.currentList.image
    });

    console.log('CREATE_LIST_DATA_TO_SUBMIT', listObj);

    this.props.dispatch(ListActions.requestCreateList({
      listData: listObj,
      inviteData: inviteList
    }, (data) => {
      console.log('List create success',data);
      if(data.successStatus) Actions.pop();
    }));
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

  onSelectCountry(country) {
    this.props.dispatch(ListActions.setSelectedCountry(country));
    this.closeCountryPicker();
  },

  openCountryPicker() {
    this.props.dispatch(UIActions.setPickerVisibility('countryPicker',true));
  },

  closeCountryPicker() {
    this.props.dispatch(UIActions.setPickerVisibility('countryPicker',false))
  },

  isDataValid() {
    const createListForm = this.props.form.createList;
    let title = createListForm && createListForm.values ? createListForm.values.name : undefined;
    return this.props.currentList.image && title;
  },

  render() {

    console.log('CREATE_LIST_VIEW_PROPS', this.props);

    const {options, inviteList, currentList, countryPicker} = this.props;
    const { visible, set } = countryPicker;
    const selectedCountry = currentList.selectedCountry ? currentList.selectedCountry : 'RO' //default country 'Romania'
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
            location={selectedCountry}
            countryPicker={{countries: set,
              onChangeCountry: this.onSelectCountry,
              countryPickerVisibility: countryPicker.visible,
              openCountryPicker: this.openCountryPicker
            }}
            dataValid={this.isDataValid()}
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
