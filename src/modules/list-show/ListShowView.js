import React, {PropTypes} from 'react';
import * as ListShowState from './ListShowState';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  Alert,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import * as favezActions from '../../redux/fave/faveActions';
import ListShowHeader from '../../components/list-show/listShowHeader/listShowHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import FooterTabs from '../../components/globals/footerTabs/footerTabs';
import Line from '../../components/globals/fave/line';
import Info from '../../components/globals/fave/info';
import Card from '../../components/globals/card/card';
import { selfFavezLiked } from '../../utils/userFollow';
let selfFavezLikedIds =[];
const window = Dimensions.get('window');

const ListShowView = React.createClass({

  propTypes: {},
  componentWillMount() {
    // this.setState({ready: false})\

     this.props.dispatch(favezActions.getSelffavez());
          this.props.dispatch(ListShowState.fetchSimilarList(this.props.list.id));
  },

  componentWillReceiveProps(nextProps) {
    // this.setState({ready: !nextProps.loading});
  },

  moving() {
    Actions.subbar();
  },

  setFilter(view, tab) {
    this.props.dispatch(UIActions.setViewTab(view, tab));
  },

  browseFave(idx) {
    this.props.dispatch(UIActions.browseList(this.props.list._favez, idx))
    .then(() => Actions.addFaveBrowse({viewList: true}));
  },
  userLikeUnlike(id,action,detailList){
    if (id == "like") {
    this.props.dispatch(favezActions.LikeFavezAction(action, detailList));
  }
  if(id=="unlike"){

    this.props.dispatch(favezActions.unlikeFavezAction(action, detailList));
}

},
renderFavez(fave,index){
  var liked
  if (selfFavezLikedIds.indexOf(fave.id) > -1) liked = true;
  else liked = false;


  return(
    <Line
      fave={fave}
      index={index}
      liked={liked}
      browseFave={this.browseFave}
      key={'fave ' + index}
      favezLikeUnlikeAction={this.userLikeUnlike}
    />


  );

},

  renderChildren() {
    const {selfFavez} = this.props;
    if (selfFavez.length > 0) {
      selfFavezLikedIds = selfFavezLiked(selfFavez);
    }
    switch (this.props.selectedTab) {
      case 'info':
        return (
          <Info
            list={this.props.list}
          />
        );
      case 'favez':
        return this.props.list._favez && Array.isArray(this.props.list._favez)
        ? (
          this.props.list._favez.map(this.renderFavez)

        )
        : (
          <View style={styles.noResultContainer}>
            <Text style={styles.noResultText}> This list currently has no Favez.</Text>
          </View>

        );
      case 'similar':
        return (
          <View contentContainerStyle={styles.Parentcontainer}>
            {  this.props.similar.map(this.renderCard)}
          </View>

        );
      default :
        return null;
    }
  },
  renderCard(){
    return(
      this.props.similar.map((fave, index) => (
          <Card
            key={'fave ' + index}
            card={fave}
            track={index}
            moving={this.moving}


        />
      ))
    );
  },


  render() {
    // if (!this.state.ready) return null;

    const {index, list, selected, similar, selectedTab, tabs} = this.props;
    const tabProps = [
      {
        name: 'share',
        icon: 'share',
        action: 'menu'
      },
      {
        name: 'bookmark',
        icon: 'bookmark-plus-outline',
        action: 'bool'
      },
      {
        name: 'message',
        icon: 'comment-text-outline',
        action: 'outbound'
      }
    ];

    return (
      <View style={{flex: 1}}>
        <View style={styles.ListBackgroundImageContainer}>
          <View style={styles.ListBackgroundOverlay}></View>
          <Image
            style={styles.ListBackgroundImage}
            source={list._favez ? {uri: list._favez[0].image} : require('../../../images/default_list.png')}/>
        </View>
        <ListShowHeader />
        <ScrollView
          contentContainerStyle={styles.contentContainer}
        >
          <Header title={list.name}/>

          <HeaderTabs
            view={'listShow'}
            setFilter={this.setFilter}
            selected={selectedTab}
            tabs={tabs}

          />

          {this.renderChildren()}
        {/*<Text>{list.description}</Text>*/}
        </ ScrollView>
        <FooterTabs
          TabProps={tabProps}
        />
      </View>
    );
  }
})

const styles = StyleSheet.create({
  noResultContainer:{
    padding: 10,
    marginTop: 10,
  },
  noResultText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Hind-Regular'
  },
  container: {
    // flexGrow: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // height: 1000,
    // paddingTop: 20,
    // marginTop: 20,
    justifyContent: 'flex-start',
    // paddingBottom: 50,
    alignItems: 'center',
    flex: 1
    // justifyContent: 'center'
  },
  Parentcontainer:{
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3

  },
  ListBackgroundImageContainer: {
    position: 'absolute',
    width: window.width,
    height: 200,
    overflow: 'hidden'
  },
  ListBackgroundOverlay: {
    position: 'absolute',
    height: 200,
    width: window.width,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 3
  },
  ListBackgroundImage: {
    width: window.width,
    height: 300,
    position: 'absolute',
    top: 0
    // maxHeight: 100
  }
});

export default ListShowView;
