import React from 'react';
import {View, Text, StyleSheet, Button, Animated, Dimensions, Platform, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DefaultAvatar from '../../../../images/default_avatar.png'

import Header from '../../../components/globals/header/header';
import styles from './styles';

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
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop);
  }

  handleSearchInput() {

  }

  toggleContextMenu() {

  }

  render() {
    console.log(this);
    return (
            <Animated.View style={styles.container}>
                <View style={{flex: 1}}>
                    {this.renderSearchBar()}
                    {this.renderTrendingUsers()}
                    {this.renderTrendingList()}
                    {this.renderTrendingFaves()}
                </View>
            </Animated.View>
    );
  }

  renderSearchBar() {
    return (
      <View style={[styles.feedNavHeader]}>
          <TouchableOpacity
            style={styles.headerSearchBar}
            onPress={() => this.handleSearchInput()}>
            <FontAwesomeIcon style={styles.searchBarIcon} name='search'/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.toggleContextMenu()}
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
            <View style={styles.userLayout}>
              <Image style={styles.userThumb} source={DefaultAvatar} />
              <Text style={styles.userTitle}>@greenmario</Text>
            </View>
            <View style={styles.userLayout}>
              <Image style={styles.userThumb} source={DefaultAvatar} />
              <Text style={styles.userTitle}>@greenmario</Text>
            </View>
            <View style={styles.userLayout}>
              <Image style={styles.userThumb} source={DefaultAvatar} />
              <Text style={styles.userTitle}>@greenmario</Text>
            </View>
            <View style={styles.userLayout}>
              <Image style={styles.userThumb} source={DefaultAvatar} />
              <Text style={styles.userTitle}>@greenmario</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  renderTrendingList() {
    return (
      <View style={styles.listContainer}>
        <Header title={'Trending List'} />
      </View>
    );
  }

  renderTrendingFaves() {
    return(
      <View style={styles.listContainer}>
        <Header title={'Trending in Romania'} />
      </View>
    );
  }
}
