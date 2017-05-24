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
import * as Utils from '../../utils/Utils';
import { showSubscribedlists } from '../../utils/userFollow';
let subscribedListsIds = [];


const SearchView = React.createClass({
  propTypes: {},

  componentWillMount(){
    this.props.dispatch(ListActions.getListbyRelationAction('subscribed'));
    this.selectTaxonomy();
  },

  componentDidUpdate() {
    this.selectTaxonomy();
  },

  setFilter(val) {
    this.props.dispatch(SearchState.setFilter(val));
  },

  setTopic(val) {
    //this.props.dispatch(SearchState.setTopic(val));
    if(val && val.ref) this.onSelectTaxonomy(val.ref);
  },

  moving(idx) {
    this.props.dispatch(ListActions.getDetailedList(idx)).then(() => Actions.listShow());
  },

  userSubscribe(action,detailList){
    if (action === "subscribe") {
        this.props.dispatch(ListActions.createlistRelationAction(action, 2,detailList));
    } else if(action === "unsubscribe"){
          this.props.dispatch(ListActions.deleteListRelationAction(action, 2,detailList));
    }
  },

  selectTaxonomy() {
    let taxonomy = this.props.taxonomy && this.props.taxonomy.toLowerCase();
    let topicName = this.props.topic && this.props.topic.ref;
    if(!!taxonomy && taxonomy != topicName) {
      let topic = Utils.getTopicByTaxonomy(taxonomy, this.props.categories);
      if(!!topic) this.props.dispatch(SearchState.searchByTopic(topic));
      else this.props.dispatch(SearchState.searchByTag(taxonomy));
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
    const {topic, tag, selected} = this.props;
    var {height, width} = Dimensions.get('window');
    let title = tag ? tag : topic.semantic;
    return (
      <View>
        <View style={{height: 150, backgroundColor: topic ? topic.color : '#FF9900'}}>
          <SearchHeaderIcons
            setTopic={this.setTopic}
          />
          <Text style={styles.topicTitle}>{title.toUpperCase()}</Text>
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

  onSelectTaxonomy(taxonomy) {
    Actions.search({taxonomy});
  },

  renderList(list,index){

    return (
       <List
        list={list}
        user={{ 'username': list.owner[0].f2, 'image': list.owner[0].f3 }}
        moving={this.moving}
        key={'list ' + index}
        index={index}
        taxonomy={list.taxonomy}
        subscribe={true}
        toggleContextMenu={this.toggleContextMenu}
        onSelectTaxonomy={this.onSelectTaxonomy}
        onUserAction={() => this.onUserAction(list)}
        userActionData={{type: 'subscribe_unsubscribe', data: this.isSubscribedToList(list)}}
      />

    );
  },

  isSubscribedToList(list) {
    return subscribedListsIds.indexOf(list.id) != -1
  },

  onUserAction(list) {
    if(!!this.props.userLoggedIn && this.props.userLoggedIn.auth0) {
      if(this.isSubscribedToList(list)) this.userSubscribe("unsubscribe", list)
      else this.userSubscribe("subscribe", list)
    } else Actions.login();
  },

  renderChildren() {
    const {subscribedLists, list, tag, topic} = this.props;
      if (subscribedLists.length > 0) {
      subscribedListsIds = showSubscribedlists(list, subscribedLists);
    }
    let listsToRender = [];
    listsToRender = tag ? this.props.listByTags : this.props.listByTopics;

    switch (this.props.selected) {
      case 'lists':
      case 'sites':
      case 'filter':

        return listsToRender.map(this.renderList);

      case 'products':
        return (this.props.favez.map((fave, index) => (<Card key={'fave ' + index} card={fave} track={index} moving={this.moving} increment={this.increment} />)));
      default:
        return null;
    }
  },

  render() {

    console.log("SEARCH_VIEW_PROPS", this.props);

    const {index, categories, topic, tag} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {
            topic || tag
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
