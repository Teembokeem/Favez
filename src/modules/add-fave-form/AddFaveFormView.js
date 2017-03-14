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
        renderList.map((list) => (
          <View
            key={'list ' + list.id}
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
              onPress={() => this.toggleListOption(list.id)}
            >
              {(list.id === selectedRadio)
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

  toggleListOption(list_id) {
    return this.props.selectedRadio === list_id
    ? this.props.dispatch(UIActions.setRadioSelect('addFaveForm', -1))
    : this.props.dispatch(UIActions.setRadioSelect('addFaveForm', list_id));
  },

  setFilter(view, tab) {
    this.props.dispatch(UIActions.setViewTab(view, tab));
  },

  submit() {
    const {fave, selectedRadio, selectedTab} = this.props;
    Object.assign(fave, {
      name: 'new fave',
      description: 'this is a new fave',
      list_id: selectedTab[selectedRadio],
      type: 'que'
    });
    this.props.dispatch(FaveActions.createFave(fave)).then((something, somethingelse) => {
      console.log('TODO: fix this once, POST /favez is fixed', something, somethingelse);
      this.props.dispatch(ListActions.getMyLists()).then(Actions.feedIndex);
    });

  },


  render() {
    const {myLists, myCollabs, fave, tabs, selectedTab, selectedRadio} = this.props;
    let renderList;
    switch (selectedTab) {
      case 'yours':
        console.log('yours');
        renderList = myLists;
        break;
      case 'collabs':
        console.log('ours');
        renderList = myCollabs;
        break;
      default:
        renderList = myLists;
        break;
    }
    const child = this.renderList(selectedRadio, renderList);
    console.log('INSTANTIATING ADD FAVE VIEW', this.props);
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
              <Text style={styles.faveSummaryScrapedTitle}>{'Site Text'}</Text>
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
    padding: 10
  },
  faveSummaryImage: {
    height: 55,
    width: 55,
    borderRadius: 10
  },
  faveSummaryTextContainer: {
    paddingTop: 10
  },
  faveSummaryScrapedTitle: {
    fontFamily: 'Hind-Bold',
    fontSize: 18,
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
