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

  componentWillMount() {
    // [TD2d] you have access to this.props here
    const {title, url} = this.props.browser;
    if (!this.props.viewList || !this.props.viewFave ) {
      if (!url) this.props.dispatch(UIActions.setBrowserInitialState());
    }
  },

  setBrowserInfo(url, title) {
    if (url) {
      this.props.dispatch(UIActions.setBrowserInfo(url, title));
    } 
  },

  scrapeUrl(url) {
    return this.props.dispatch(UIActions.scrapeUrl(url));
  },

  setNewFave(fave) {
    return this.props.dispatch(FaveActions.setNewFave(fave)).then(() => {
      this.props.dispatch(UIActions.setBrowserInitialState()).then(Actions.addFaveForm());
    });
  },

  render() {
    const {browser, viewList, viewFave} = this.props;
    return (
      <View style={styles.container}>
        <FavezBrowser
          browser={browser}
          showViewList={viewList}
          showViewFave={viewFave}
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
