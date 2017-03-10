import React from 'react';
import {Actions} from 'react-native-router-flux';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  WebView,
  Text,
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
    console.log('everythingggg', passedUrl, method);
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

  renderHeader(isScraped, url) {
    if (isScraped) {
      return (
        <View style={[styles.NavBarContainer]}>
          <View
            style={styles.flex1}
          >
            <TouchableOpacity
              onPress={this.back}
                style={styles.headerLeftButton}
            >
              <FAIcon style={styles.headerLeftButtonIcon} name='close'/>
            </TouchableOpacity>
          </View>
          <View style={styles.HeaderTextContainer}>
            <Text
              style={styles.HeaderText}
            >Pick Image</Text>
          </View>
          <View style={styles.flex2}>
          </View>
        </View>
      );
    } else {
      return (
        <View style={[styles.NavBarContainer]}>
          <View
            style={styles.flex1}
          >
            <TouchableOpacity
              onPress={this.back}
                style={styles.headerLeftButton}
            >
              <FAIcon style={styles.headerLeftButtonIcon} name='close' />
            </TouchableOpacity>
          </View>
          <View style={styles.addressBarContainer}>
            <TextInput
              ref={TEXT_INPUT_REF}
              autoCapitalize='none'
              defaultValue={url}
              onSubmitEditing={() => this.onSubmitEditing(url, this.props.setBrowserUrl)}
              onChange={this.handleTextInputChange}
              clearButtonMode='while-editing'
              style={styles.addressBarTextInput}
            />
          </View>
          <View
            style={styles.flex2}
          >
            <TouchableOpacity
              onPress={() => this.props.scrapeUrl(url)}
              style={styles.headerRightButton}
            >
                <IoniconIcon style={styles.headerRightButtonIcon} name='ios-heart'/>
            </TouchableOpacity>
          </View>
      </View>
      );
    }
  },

  selectImageJS() {
    const JS =
    `var imageContainer = document.querySelector('div.container');
      imageContainer.onclick = function(e) {
        window.postMessage(e.target.getAttribute('src'))
      }
    `;
    return JS;
  },
  selectImageHTML(images) {
    let imageList = '';
    function concatImages() {
      images.forEach((image) => {
        imageList += `<img class="image" src=${image.src}/>`;
      });
      return imageList;
    }
    const HTML =
      `<!DOCTYPE html>
      <html>
        <head>
          <title>Hello Static World</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=320, user-scalable=no">
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
              font: 62.5% arial, sans-serif;
              background: 'white';
              display: block;
            }
            .container {
              position: relative;
              // width: 300px;
              // display: flex;
              text-align: center;
              // display: flex;
              // align-items: center;
              align-items: flex-start
              justify-content: flex-start;
              flex-flow: 'row wrap';

            }
            .image {
              border-radius: 10%;
              width: 45% !important;
              flex: 1;
              // height: 100% !important;
              padding: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            ${concatImages()}          
          </div>
        </body>
      </html>`;
    return HTML;
  },

  render() {
    console.log('BROWSER SHIT', this.props);
    const {browser, setNewFave} = this.props;
    const {url, scrape} = browser;
    const {scraped, images} = scrape;
    const sourceDelegate = scraped ? {html: this.selectImageHTML(images)} : {uri: url};
    return (
    <View style={{flex: 1}}>
      {this.renderHeader(scraped, url)}
      <View style={styles.WebViewContainer}>
        <WebView
          onNavigationStateChange={(webView) => scraped ? '' : this.props.setBrowserUrl(webView.url)}
          // source={require('./selectImage.html')}
          injectedJavaScript={scraped ? this.selectImageJS() : ''}
          source={sourceDelegate}
          onMessage={(e) => setNewFave({url: scraped.url, image: e.nativeEvent.data})}
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
    fontSize: 14
  },
  HeaderTextContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  HeaderText: {
    fontFamily: 'Hind-Medium',
    fontSize: 16
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
    alignItems: 'center'
  },
  FaveBrowser: {
    width: window.width,
    flex: 1
  }
});


export default ListShowHeader;
