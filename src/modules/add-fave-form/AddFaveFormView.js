import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Header from '../../components/globals/header/header';
import AddFaveFormHeader from '../../components/add-fave-form/addFaveFormHeader/addFaveFormHeader';
import AddFaveFormButton from '../../components/add-fave-form/addFaveFormButton/addFaveFormButton';
const AddFaveFormView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },

  renderList(lists) {
    lists.forEach((list) => {
      return (
        <Text>{list.name}</Text>
      );
    });
  },


  render() {
    const {index, lists, headerMore, fave} = this.props;
    console.log('INSTANTIATING ADD FAVE VIEW', this.props)
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
              <Text style={styles.faveSummaryImageUrl}>{fave.image}</Text>
            </View>
          </View>
          <AddFaveFormButton />
          <View>
            <Text style={{fontSize: 25, fontFamily: 'Hind-Bold', paddingLeft: 10, paddingTop: 10}}>LISTS</Text>
            {lists.map((list, idx) => {
              return (
                <Text style={{paddingLeft: 10, fontFamily: 'Hind-Medium', fontSize: 18}} key={'list ' + idx}>{list.name}</Text>
              )
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // height: 1000,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
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
  createListButtonContainer: {

  }

});

export default AddFaveFormView;
