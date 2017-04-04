import React, {PropTypes} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import Header from '../../components/globals/header/header';
const window = Dimensions.get('window');

const moreOptionsView = React.createClass({
  propTypes: {},
  componentWillMount() {
    console.log('hello', this.props);
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

  render() {

    return (
      <View style={styles.container}>
        <Text>

        hello this view.
        </Text>
      </View>
    );
  }
})

const styles = StyleSheet.create({
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
  }
});

export default moreOptionsView;
