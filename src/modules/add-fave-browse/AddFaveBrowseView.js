import React from 'react';
import * as UIActions from '../../redux/ui/uiActions';
import {
  View,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as FaveActions from '../../redux/fave/faveActions';
import FavezBrowser from '../../components/globals/favezBrowser/favezBrowser';

const AddFaveBrowseView = React.createClass({
  propTypes: {},

  componentWillMount(props) {
    console.log('will mount props', props, this.props)
    // this.props.dispatch(ListActions.getFullList());
    const {title, url} = this.props.browser;
    if (this.props.viewList) {
      return;
    } else if (url !== 'https://www.google.com' && title !== '') {
      this.props.dispatch(UIActions.setBrowserInitialState());
    } else {
      return;
    }
  },

  setBrowserInfo(url, title) {
    console.log('SET BROWSER URL: ', url);
    if (url) {
      this.props.dispatch(UIActions.setBrowserInfo(url, title));
    } else {
      return;
    }
  },

  scrapeUrl(url) {
    console.log('sending to scraper...', url);
    return this.props.dispatch(UIActions.scrapeUrl(url));
  },

  setNewFave(fave) {
    console.log('hello', fave)
    return this.props.dispatch(FaveActions.setNewFave(fave)).then(() => Actions.addFaveForm());
  },

  render() {
    const {browser, viewList} = this.props;
    console.log('INSTANTIATING ADD FAVE VIEW', this.props);
    return (
      <View style={styles.container}>
        <FavezBrowser
          browser={browser}
          showViewList={viewList}
          scrapeUrl={this.scrapeUrl}
          setBrowserInfo={this.setBrowserInfo}
          setNewFave={this.setNewFave}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AddFaveBrowseView;
