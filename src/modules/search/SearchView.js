import React, { PropTypes } from 'react';
import * as SearchState from './SearchState';
import { View, ScrollView, StyleSheet, Text, Dimensions, Alert,TouchableOpacity,Image } from 'react-native';
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
import * as faveActions from '../../redux/fave/faveActions';
import * as Utils from '../../utils/Utils';
import { showSubscribedlists } from '../../utils/userFollow';
import * as UIActions from '../../redux/ui/uiActions';
import SiteCard from '../../components/globals/siteCard/siteCard';
import {sortListbyId} from '../../utils/Utils';
import ContextMenu from './contextMenu';
let subscribedListsIds = [];


const SearchView = React.createClass({
  propTypes: {},

  componentWillMount(){
    this.props.dispatch(ListActions.getListbyRelationAction('subscribed'));
    this.props.dispatch(faveActions.getSiteListAction());
    this.selectTaxonomy();
  },

  componentDidUpdate() {
    this.selectTaxonomy();
  },

  setFilter(val, tab) {

        this.props.dispatch(UIActions.setViewTab(val, tab));
    // this.props.dispatch(SearchState.setFilter(val, tab));
  },

  showTopics() {
    this.props.dispatch(SearchState.resetTopic());
    this.props.dispatch(SearchState.resetTag());
    Actions.search();
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
  renderModal() {

    const { contextMenu } = this.props;
    const { visible, set } = contextMenu;

    return visible
      ? (<ContextMenu toggleContextMenu={this.toggleContextMenu} onSelectAction={this.onSelectAction} visible={visible} items={set} />)
      : null;
  },

  selectTaxonomy() {
    let taxonomy = this.props.taxonomy && this.props.taxonomy.toLowerCase();
    let topicName = this.props.tag ? this.props.tag : this.props.topic && this.props.topic.ref;
    if(!!taxonomy && taxonomy != topicName) {
      let topic = Utils.getTopicByTaxonomy(taxonomy, this.props.categories);
      if(!!topic) this.props.dispatch(SearchState.searchByTopic(topic));
      else this.props.dispatch(SearchState.searchByTag(taxonomy));
    }
  },
  toggleContextMenu() {
    this.props.dispatch(UIActions.toggleContextMenu('search','tabbar'));
  },


  renderSearchCategories(categories, index) {
    return (
      <View>
        <SearchHeader />
        <Header title={'Topics'} />
        {categories.map((category, idx) => (<Category key={'category' + idx} category={category} track={index} moving={this.setTopic} />))}
      </View>
    )
  },

  renderSearchTopic() {
    const {topic, tag, selected} = this.props;
    var {height, width} = Dimensions.get('window');
    let title = tag ? tag : topic.semantic;
    return (
      <View style={{backgroundColor: '#F6F6F6'}}>
        <View style={{height: 150, backgroundColor: topic ? topic.color : '#FF9900'}}>
          <SearchHeaderIcons
            showTopics={this.showTopics}
          />
          <Text style={styles.topicTitle}>{title.toUpperCase()}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={{
            flex: 1,
            width: width,
            flexDirection:'row'

          }}>
          <View style={{width: width-30}}>
            <HeaderTabs
              setFilter={this.setFilter} selected={selected}
              tabs={this.props.tabs}
              view={'searchView'} />
            </View>
            <View style={{width: 30, height: 40}}>
            <TouchableOpacity onPress={()=>this.toggleContextMenu()}>
              <Image style={{height: 30, width: 30}} source={
                  require('../../../images/buttons/manageButton.png')}
                  ></Image>
              </TouchableOpacity>
              </View>

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
  renderSiteCards(card,index){
    return(
<SiteCard card={card} key={'site' + index} />
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
  onSelectAction(buttonAction){
    if(buttonAction=='sortList')
    this.reverseOrder();

  },
  reverseOrder(){
    let sortedArray=[];
    const {index, categories, topic, tag,selected} = this.props;
    let listsToRender = [];
    listsToRender = tag ? this.props.listByTags : this.props.listByTopics;

    if(selected=='lists'){
      sortedArray = sortListbyId(listsToRender);

    tag ?   this.props.dispatch(ListActions.sortListTagByDate(sortedArray)) : this.props.dispatch(ListActions.sortListTopicsByDate(sortedArray));
    }

    if(selected=='sites'){
      sortedArray = sortListbyId(this.props.searchSites);
     this.props.dispatch(faveActions.sortSiteListByDate(sortedArray));

    }

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
        return listsToRender.map(this.renderList);
      case 'sites':
       return this.props.searchSites.map(this.renderSiteCards);

      case 'filter':

      this.toggleContextMenu();
      break;
      case 'products':
{/*        return (this.props.favez.map((fave, index) => (<Card key={'fave ' + index} card={fave} track={index} moving={this.moving} increment={this.increment} />)));*/}
      default:
        return null;
    }
  },

  render() {

const {index, categories, topic, tag,selected} = this.props;


    return (

      <View style={styles.container}>
        {this.renderModal()}
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
    height: 130,
    backgroundColor: 'purple'
  },
  topicTitle: {
    fontFamily: 'Hind-Bold',
    color: '#fff',
    fontSize: 28,
    padding: 10,
    fontWeight: 'bold',
  },
  contentContainer: {
    // backgroundColor: '#e9e9e9',
    // marginBottom: 40,
    paddingBottom: 40,
    alignItems: 'center'
  }
});

export default SearchView;
