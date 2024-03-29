import React from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
import * as FaveActions from '../../redux/fave/faveActions';
import * as ListActions from '../../redux/list/listActions';
import * as UIActions from '../../redux/ui/uiActions';
import Header from '../../components/globals/header/header';
import AddFaveFormHeader from '../../components/add-fave-form/addFaveFormHeader/addFaveFormHeader';
import AddFaveFormButton from '../../components/add-fave-form/addFaveFormButton/addFaveFormButton';
import AddFaveFormSubmit from '../../components/add-fave-form/addFaveFormSubmit/addFaveFormSubmit';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';

const window = Dimensions.get('window');

const AddFaveFormView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },

  renderList(selectedRadio, renderList) {
    return (
        renderList.map((list, idx) => (
          <View
            key={'list ' + idx}
            style={styles.ListContainer}
          >
            <View
              style={styles.ListImageContainer}
            >
              <Image
                style={styles.ListImage}
                source={list._favez ? {uri: list._favez[0].image} : require('../../../images/default_list.png')}
              />
            </View>
            <View
              style={styles.ListTitleContainer}
            >
              <Text
                style={styles.ListTitle}
              >{list.name}</Text>
            </View>
            <TouchableOpacity
              style={styles.ListSelectButton}
              onPress={() => this.toggleListOption(idx)}
            >
              {(idx === selectedRadio)
              ? (
                <View style={styles.ListSelectSelected}>
                  <IoniconIcon style={styles.ListSelectSelectorIcon} name='md-checkmark-circle'/>
                </View>
              )
              : (
                <View style={styles.ListSelectDeselected}></View>
              )}
            </TouchableOpacity>
          </View>
        ))
    );
  },

  toggleListOption(id) {
    return this.props.selectedRadio === id
    ? this.props.dispatch(UIActions.setRadioSelect('addFaveForm', -1))
    : this.props.dispatch(UIActions.setRadioSelect('addFaveForm', id));
  },

  setFilter(view, tab) {
    this.props.dispatch(UIActions.setViewTab(view, tab));
  },

  submit(text) {
    const {fave, selectedRadio} = this.props;
    Object.assign(fave, {
      name: fave.title,
      description: text ? text : '',
      list_id: this.setMyList()[selectedRadio].id,
      type: 1
    });
    this.props.dispatch(FaveActions.createFave(fave)).then((something) => {
      this.props.dispatch(ListActions.getMyLists()).then(Actions.feedIndex);
    });

  },

  setMyList() {
    const {selectedTab, myLists, myCollabs} = this.props;
    switch (selectedTab) {
      case 'yours':
        return myLists;
      case 'collabs':
        return myCollabs;
      default:
        return myLists;
    }
  },


  render() {
    const {fave, tabs, selectedTab, selectedRadio} = this.props;
    let renderList = this.setMyList();
    const child = this.renderList(selectedRadio, renderList);
    return (
      <View style={styles.container}>
        <AddFaveFormHeader />
        <ScrollView>
          <Header title={'Add Fave'}/>
          <View style={styles.faveSummaryContainer}>
            <View style={styles.faveSummaryImageContainer}>
              <Image style={styles.faveSummaryImage} source={{uri: fave.image}}/>
            </View>
            <View style={styles.faveSummaryTextContainer}>
              <Text style={styles.faveSummaryScrapedTitle}>{fave.title}</Text>
              <Text style={styles.faveSummaryImageUrl}>{fave.link}</Text>
            </View>
          </View>
          <AddFaveFormButton />
          <HeaderTabs
            view={'addFaveForm'}
            selected={selectedTab}
            tabs={tabs}
            setFilter={this.setFilter}
          />
          <View
            style={styles.contentContainer}
          >
            {child}
          </View>
        </ScrollView>
        {this.props.selectedRadio !== -1
          ? (
            <AddFaveFormSubmit
              submit={this.submit}
            />)
          : null
        }
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center'
  },
  faveSummaryContainer: {
    flex: 1, flexDirection: 'row'
  },
  faveSummaryImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  faveSummaryImage: {
    height: 55,
    width: 55,
    borderRadius: 10
  },
  faveSummaryTextContainer: {
    flex: 5,
    justifyContent: 'center',
    paddingTop: 10
  },
  faveSummaryScrapedTitle: {
    fontFamily: 'Hind-Bold',
    fontSize: 18,
    lineHeight: 20,
    paddingTop: 9
  },
  faveSummaryImageUrl: {
    fontFamily: 'Hind-Medium',
    fontSize: 13,
    position: 'relative',
    top: -7
  },
  ListContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: window.width,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e6e6e6'
  },
  ListImageContainer: {
    flex: 1,
    padding: 10
  },
  ListImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderColor: '#d8d8d8',
    borderWidth: 0.5
  },
  ListTitleContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  ListTitle: {
    paddingLeft: 10,
    fontFamily: 'Hind-Bold',
    fontSize: 15
  },
  ListSelectButton: {
    flex: 1,
    justifyContent: 'center'
  },
  ListSelectDeselected: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: '#e6e6e6',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListSelectSelected: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ListSelectSelectorIcon: {
    fontSize: 31,
    color: '#4caf4e'

  },
  ListSelectIcon: {
    fontSize: 13
  },
  contentContainer: {
    backgroundColor: '#f6f6f6',
    paddingBottom: 40
  }
});

export default AddFaveFormView;
