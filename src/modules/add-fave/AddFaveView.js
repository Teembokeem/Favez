import React from 'react';
import * as ListActions from '../../redux/list/listActions';
import * as AddFaveActions from './AddFaveState';
// import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FavezBrowser from '../../components/globals/favezBrowser/favezBrowser';

const AddFaveView = React.createClass({
  propTypes: {},

  componentWillMount() {
    // this.props.dispatch(ListActions.getFullList());
  },

  setBrowserUrl(url) {
    console.log('log everytime i browse', url)
    if (url) {
      this.props.dispatch(AddFaveActions.setBrowserUrl(url)).then((err, res) => {
        // Actions.refresh();
      });
    } else {
      return;
    }
  },

  scrapeUrl(url) {
    console.log('sending to scraper...', url);
    this.props.dispatch(AddFaveActions.scrapeUrl(url)).then((err, res) => {
      if (err) console.log('errors', err);
      console.log('Response', res);
    });
  },


  render() {
    const {index, lists, headerMore, url} = this.props;
    console.log(this.props) 
    return (
      <View style={{flex: 1}}>
        <FavezBrowser
          url={url}
          scrapeUrl={this.scrapeUrl}
          setBrowserUrl={this.setBrowserUrl}
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

export default AddFaveView;
