import React from 'react';
import {View, Text, StyleSheet, Button, Animated, Dimensions, Platform, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';

import * as UserActions from '../../../redux/user/userActions';

import Header from '../../../components/globals/header/header';
import styles from './styles';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DefaultAvatar from '../../../../images/default_avatar.png';

let {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(-deviceHeight)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start();
    this.props.dispatch(UserActions.searchUsers('j'));
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop);
  }

  handleSearchInput(text) {
    console.log(text);
  }

  cancelSearch() {
    Actions.pop();
  }

  render() {
    console.log('SEARCH_MODAL_PROPS',this.props);
    return (
            <Animated.View style={styles.container}>
                <View style={{flex: 1}}>
                  <ScrollView>
                    {this.renderSearchBar()}
                    {this.renderTrendingUsers()}
                    {this.renderTrendingList()}
                    {this.renderTrendingFaves()}
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

  renderTrendingUsers() {
    return (
      <View style={styles.listContainer}>
        <Header title={'Trending Users'} />
        <View style={styles.horizontalList}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.props.trendingUsers.map(this.renderUser)}
          </ScrollView>
        </View>
      </View>
    );
  }

  renderUser(user) {
    let image = user.image?{uri:user.image}:DefaultAvatar;
    return (
      <View style={styles.userLayout}>
        <Image style={styles.userThumb} source={image} />
        <Text style={styles.userTitle}>{'@'+user.username}</Text>
      </View>
    );
  }

  renderTrendingList() {
    return (
      <View style={styles.listContainer}>
        <Header title={'Trending Lists'} />
        <View style={styles.horizontalList}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.listItemLayout, styles.trendingListLayout]}>
              <Image style={styles.listItemThumb} source={DefaultAvatar} />
              <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={2}>{'Winter EssentialS for Men'.toUpperCase()}</Text>
            </View>
            <View style={[styles.listItemLayout, styles.trendingListLayout]}>
              <Image style={styles.listItemThumb} source={DefaultAvatar} />
              <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={2}>{'Winter EssentialS for Men'.toUpperCase()}</Text>
            </View>
            <View style={[styles.listItemLayout, styles.trendingListLayout]}>
              <Image style={styles.listItemThumb} source={DefaultAvatar} />
              <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={2}>{'Winter EssentialS for Men'.toUpperCase()}</Text>
            </View>
            <View style={[styles.listItemLayout, styles.trendingListLayout]}>
              <Image style={styles.listItemThumb} source={DefaultAvatar} />
              <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={2}>{'Winter EssentialS for Men'.toUpperCase()}</Text>
            </View>
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
          <View style={[styles.listItemLayout, styles.favezLayout]}>
            <Image style={styles.listItemThumb} source={DefaultAvatar} />
            <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={3}>{'Fashion Inspiration Albums for People'.toUpperCase()}</Text>
          </View>
          <View style={[styles.listItemLayout, styles.favezLayout]}>
            <Image style={styles.listItemThumb} source={DefaultAvatar} />
            <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={3}>{'Fashion Inspiration Albums for People'.toUpperCase()}</Text>
          </View>
          <View style={[styles.listItemLayout, styles.favezLayout]}>
            <Image style={styles.listItemThumb} source={DefaultAvatar} />
            <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={3}>{'Fashion Inspiration Albums for People'.toUpperCase()}</Text>
          </View>
          <View style={[styles.listItemLayout, styles.favezLayout]}>
            <Image style={styles.listItemThumb} source={DefaultAvatar} />
            <Text style={styles.listItemTitle} ellipsizeMode='tail' numberOfLines={3}>{'Fashion Inspiration Albums for People'.toUpperCase()}</Text>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
