import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FaveActions from '../../redux/fave/faveActions';
import FavezBrowser from '../../components/globals/favezBrowser/favezBrowser';

const AddFaveBrowseView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },

  setBrowserUrl(url) {
    console.log('log everytime i browse', url);
    if (url) {
      this.props.dispatch(UIActions.setBrowserUrl(url));
    } else {
      return;
    }
  },

  scrapeUrl(url) {
    console.log('sending to scraper...', url);
    return this.props.dispatch(UIActions.scrapeUrl(url));
  },

  setNewFave(fave) {
    return this.props.dispatch(FaveActions.setNewFave(fave)).then(() => Actions.AddFaveForm());
  },

  render() {
    const {index, lists, headerMore, browser} = this.props;
    console.log('INSTANTIATING ADD FAVE VIEW', this.props)
    return (
      <View style={{flex: 1}}>
        <FavezBrowser
          browser={browser}
          scrapeUrl={this.scrapeUrl}
          setBrowserUrl={this.setBrowserUrl}
          setNewFave={this.setNewFave}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    backgroundColor: '#e9e9e9',
    // justifyContent: 'center',
    // height: 1000,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center'
    // justifyContent: 'center'
  },
});

export default AddFaveBrowseView;
