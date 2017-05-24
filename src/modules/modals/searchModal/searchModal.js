import React from 'react';
import {View, Text, StyleSheet, Button, Animated, Dimensions, Platform, TouchableOpacity, Image, ScrollView, TextInput, ActivityIndicator, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as SearchModalState from './searchModalState';

import Header from '../../../components/globals/header/header';
import styles from './styles';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DefaultAvatar from '../../../../images/default_avatar.png';
import DefaultFaveImage from '../../../../images/default_list_picture.png';

let {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(-deviceHeight),
      query:''
    };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop);
  }

  handleSearchInput(text) {
    this.setState({query: text})
  }

  handleKeyDown(e) {
    Alert.alert("vff");
    if (e.nativeEvent.key == "Enter"){
      if(!!this.state.query) this.props.dispatch(SearchModalState.doSearch(this.state.query));
    }
  }

  cancelSearch() {
    Actions.pop();
  }

  render() {
    return (
        <Animated.View style={styles.container}>
            <View style={{flex: 1}}>
               <ScrollView>
                    {this.renderSearchBar()}
                    {this.renderSearchResult()}
                </ScrollView>
            </View>
        </Animated.View>
    );
  }

  renderSearchBar() {
    return (
      <View style={[styles.feedNavHeader]}>
          <TouchableOpacity
            style={styles.headerSearchBar}>
            <FontAwesomeIcon style={styles.searchBarIcon} name='search'/>
            <TextInput
              style={styles.textInput}
              keyboardType='default'
              returnKeyType='search'
              placeholder='Search'
              onKeyPress={(e) => this.handleKeyDown(e)}
              onChangeText={(text) => this.handleSearchInput(text)}
              underlineColorAndroid ={'transparent'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.cancelSearch()}
          >
            <Text style={styles.headerRightButtonText}>Cancel</Text>
          </TouchableOpacity>
      </View>
    );
  }

  renderSearchResult() {
    if(this.state.query && !this.props.loading) {
      return (
        <View style={styles.contentContainer}>
        {this.renderTrendingUsers()}
        {this.renderTrendingList()}
        {this.renderTrendingFaves()}
        </View>
      );
    } else if(this.props.loading){
      return (
        <View style={styles.contentContainer}>
          <ActivityIndicator
              animating={this.state.animating}
              style={styles.loader}
              size="small" />
        </View>
      );
    } else {
      return (
        <View style={styles.defaultTextContainer}>
          <Text style={styles.defaultText}>Search Trending Users, Trending Lists, Trending Faves</Text>
        </View>
      );
    }
  }

  renderTrendingUsers() {
    return (
      <View style={styles.listContainer}>
        <Header title={'Trending Users'} />
        <View style={styles.horizontalList}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {(this.props.trendingUsers.length>0)?this.props.trendingUsers.map(this.renderUser.bind(this)):this.renderNoResult()}
          </ScrollView>
        </View>
      </View>
    );
  }

  renderTrendingFaves() {
    return(
      <View style={styles.listContainer}>
        <Header title={'Trending in Romania'} />
        <View style={styles.horizontalList}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {(this.props.trendingFavez.length>0)?this.props.trendingFavez.map(this.renderFave):this.renderNoResult()}
          </ScrollView>
        </View>
      </View>
    );
  }

  renderTrendingList() {
    return (
      <View style={styles.listContainer}>
        <Header title={'Trending Lists'} />
        <View style={styles.horizontalList}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {(this.props.trendingLists.length>0)?this.props.trendingLists.map(this.renderList) : this.renderNoResult()}
          </ScrollView>
        </View>
      </View>
    );
  }

  renderUser(user) {
    let image = user.image?{uri:user.image}:DefaultAvatar;
    return (
      <TouchableOpacity style={styles.userLayout} onPress={() => this.showUserProfile(user.id)} key={user.id}>
        <Image style={styles.userThumb} source={image} />
        <Text style={styles.userTitle}>{'@'+user.username}</Text>
      </TouchableOpacity>
    );
  }

  renderList(list, index) {
    let image = Array.isArray(list._favez) && list._favez.length > 0 ? {uri: list._favez[0].image} : DefaultFaveImage;
    return (
      <View style={[styles.listItemLayout, styles.trendingListLayout]} key={'id_'+index}>
        <Image style={styles.listItemThumb} source={image} />
        <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={2}>{list.name.toUpperCase()}</Text>
      </View>
    );
  }

  renderFave(fave) {
    let image = fave.image?{uri:fave.image}:DefaultFaveImage;
    return (
      <View style={[styles.listItemLayout, styles.favezLayout]} key={fave.id}>
        <Image style={styles.listItemThumb} source={DefaultFaveImage} />
        <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={3}>{fave.name.toUpperCase()}</Text>
      </View>
    );
  }

  renderNoResult() {
    return (
      <View style={styles.noResultContainer}>
        <Text style={styles.noResultText}>No Result Found</Text>
      </View>
    );
  }

  showUserProfile(userId) {
    Actions.profile({userId});
  }
}
