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
    if (!/^(http|https):/.test(url)) {
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

  logInfo(state) {
    console.log('stuff', state)
  },
  render() {
    // const {url} = this.props;
    let jsCode = `
        var newDiv = document.createElement("div"); 
        newDiv.style.position = 'absolute';
        newDiv.style.top = '0';
        newDiv.style.left = '0';
        newDiv.style['z-index'] = '99';
        var newContent = document.createTextNode(document.querySelectorAll('img')[2].src);
        newDiv.appendChild(newContent); //add the text node to the newly created div. 

        var newImg = document.createElement('img');
        newImg.src = document.querySelectorAll('img')[2].src;
        newImg.style.maxWidth = 400
        newImg.style.maxHeight = 400
        newImg.style.position = 'absolute';
        newImg.style.top = '0';
        newImg.style.left = '0';
        newImg.style['z-index'] = '99';

        // add the newly created element and its content into the DOM 
        document.body.prepend(newDiv);
        document.body.prepend(newImg) 
    `;
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
              defaultValue={this.props.url}
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
          onNavigationStateChange={(webView) => this.props.setBrowserUrl(webView.url)}
          source={{uri: this.props.url}}
          injectedJavaScript={jsCode}
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