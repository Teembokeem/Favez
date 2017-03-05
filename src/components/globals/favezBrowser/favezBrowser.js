import React from 'react';
import {Actions} from 'react-native-router-flux';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  WebView,
  TextInput,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 0;
const window = Dimensions.get('window');
const TEXT_INPUT_REF = 'urlInput';

const ListShowHeader = React.createClass({

  inputText: '',

  handleTextInputChange(event) {
    var url = event.nativeEvent.text;
    if (!/^[a-zA-Z-_]+:/.test(url)) {
      url = 'https://' + url;
    }
    this.inputText = url;
  },

  onSubmitEditing(url, method) {
    this.pressGoButton(url, method);
  },

  pressGoButton(passedUrl, method) {
    console.log('everythingggg', passedUrl, method)
    var url = this.inputText.toLowerCase();
    if (url === passedUrl) {
      this.reload();
    } else {
      method(url);
    }
    // dismiss keyboard
    this.refs[TEXT_INPUT_REF].blur();
  },

  back() {
    Actions.pop();
  },

  render() {
    // const {url} = this.props;
    console.log('BROWSER SHIT', this.props)
    return (
    <View style={{flex: 1}}>
      <View style={[styles.NavBarContainer]}>
          <View
            style={styles.flex1}
          >
            <TouchableOpacity
              onPress={this.back}
                style={styles.headerLeftButton}
            >
              <FAIcon style={styles.headerLeftButtonIcon} name="close" />
            </TouchableOpacity>
          </View>
          <View style={styles.addressBarContainer}>
            <TextInput
              ref={TEXT_INPUT_REF}
              autoCapitalize="none"
              defaultValue={'https://www.google.com'}
              onSubmitEditing={() => this.onSubmitEditing(this.props.url, this.props.setBrowserUrl)}
              onChange={this.handleTextInputChange}
              clearButtonMode="while-editing"
              style={styles.addressBarTextInput}
            />
          </View>
          <View
            style={styles.flex2}
          >
            <TouchableOpacity
                style={styles.headerRightButton}
            >
                <IoniconIcon style={styles.headerRightButtonIcon} name="ios-heart"/>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.WebViewContainer}>
        <WebView
          source={{uri: this.props.url}}
          style={styles.FaveBrowser}
        />
      </View>
    </View>
    );
  }
});

const styles = StyleSheet.create({
  NavBarContainer: {
    // alignItems: 'center',
    // backgroundColor: Platform.OS === 'ios' ? '#FFFFFF' : '#FFFFFF',
    backgroundColor: 'transparent',
    // borderBottomColor: 'rgba(0, 0, 0, .15)',
    // borderBottomWidth: Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0,
    // elevation: 4,
    // flex: 1,
    borderBottomWidth: 0.5,
    borderColor: '#e8e8e8',
    width: 375,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: STATUSBAR_HEIGHT,
    height: APPBAR_HEIGHT + STATUSBAR_HEIGHT
  },
  flex1: {
    height: 35,
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center'
  },
  headerLeftButtonIcon: {
    width: 35,
    fontSize: 25,
    color: '#000000',
    alignSelf: 'flex-start'
  },
  addressBarContainer: {
    flex: 6,
    justifyContent: 'center'
  },
  addressBarTextInput: {
    backgroundColor: '#f8f8f6',
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 15,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
  flex2: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'center'
  },
  headerRightButtonIcon: {
    // height: 35,
    // width: 35,
    fontSize: 28,
    justifyContent: 'center',
    alignItems: 'center',
    // top: 30,
    // margin: 10,
    color: '#000000',
    alignSelf: 'flex-end'
  },
  WebViewContainer: {
    flex: 1,
    alignItems: 'center',
  },
  FaveBrowser: {
    width: window.width,
    flex: 1
  }
});


export default ListShowHeader;