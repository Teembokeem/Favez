import React, { PropTypes } from 'react';
import * as SearchState from './SearchState';
import { View, ScrollView, StyleSheet, Text, Dimensions, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import SearchHeader from '../../components/search/searchHeader/searchHeader';
import SearchHeaderIcons from '../../components/search/searchHeaderIcons/searchHeaderIcons'
import FavoriteHeader from '../../components/favorite/favoriteHeader/favoriteHeader';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import Header from '../../components/globals/header/header';
import LocationSpecifier from '../../components/search/locationSpecifier/locationSpecifier';
import Category from '../../components/search/category/category';
import Card from '../../components/globals/card/card';
import List from '../../components/globals/list/list'
import * as ListActions from '../../redux/list/listActions';

const SearchView = React.createClass({
  propTypes: {},

componentWillMount(){
  console.log("aaaa909");
  this.props.dispatch(ListActions.getListbyRelationAction('subscribed'))
},
  setFilter(val) {
    this.props.dispatch(SearchState.setFilter(val));
  },

  setTopic(val) {
    this.props.dispatch(SearchState.setTopic(val));
  },
  moving(idx) {


    this.props.dispatch(ListActions.getDetailedList(idx)).then(() => Actions.listShow());
  },
  userSubscribe(id,action,detailList){
    console.log("all details list",detailList);
    if (id == "subscribeme") {

      Alert.alert(id);

    this.props.dispatch(ListActions.createlistRelationAction(action, 2,detailList));
  }
  if(id=="unsubscribe"){
    Alert.alert(id);
        this.props.dispatch(ListActions.deleteListRelationAction(action, 2,detailList));
  }
},


  renderSearchCategories(categories, index) {
    return (
      <View>
        <SearchHeader />
        <Header title={'Topics'} />
        <LocationSpecifier />
        {categories.map((category, idx) => (<Category key={'category' + idx} category={category} track={index} moving={this.setTopic} />))}
      </View>
    )
  },

  renderSearchTopic() {
    const {topic, selected} = this.props;
    var {height, width} = Dimensions.get('window');
    return (
      <View>
        <View style={{height: 150, backgroundColor: topic.color}}>
          <SearchHeaderIcons
            setTopic={this.setTopic}
          />
          <Text style={styles.topicTitle}>{topic.semantic.toUpperCase()}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={{
            flex: 1,
            width: width
          }}>
            <HeaderTabs
              setFilter={this.setFilter} selected={selected}
              tabs={['lists', 'sites', 'products', 'filter']} />
          </View>
          {this.renderChildren()}
        </ScrollView>
      </View>
    )
  },

  renderChildren() {
    switch (this.props.selected) {
      case 'lists':
      case 'sites':
      case 'filter':
        return (this.props.listByTopics.map((list, index) => ((
          <List
            list={list}
            user={{ 'nickname': list.owner[0].f2, 'picture': list.owner[0].f3 }}
            moving={this.moving}
            key={'list ' + index}
            index={index}
            search={'search'}
            taxonomy={list.taxonomy}
            subscribe={true}
            loggedInUser={this.props.userLoggedIn}
            userSubscribeAction={this.userSubscribe}
            toggleContextMenu={this.toggleContextMenu}
          />
        ))));
      case 'products':
        return (this.props.favez.map((fave, index) => (<Card key={'fave ' + index} card={fave} track={index} moving={this.moving} increment={this.increment} />)));
      default:
        return null;
    }
  },

  render() {
    const {index, categories, topic} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            topic
              ? this.renderSearchTopic()
              : this.renderSearchCategories(categories, index)
          }
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TopicHeader: {
    height: 150,
    backgroundColor: 'purple'
  },
  topicTitle: {
    fontFamily: 'Hind-Bold',
    color: '#fff',
    fontSize: 28,
    padding: 10,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 15
  },
  contentContainer: {
    // backgroundColor: '#e9e9e9',
    // marginBottom: 40,
    paddingBottom: 40,
    alignItems: 'center'
  }
});

export default SearchView;
