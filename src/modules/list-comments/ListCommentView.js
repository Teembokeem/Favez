import React, {PropTypes} from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    Alert,
    Platform,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as UIActions from '../../redux/ui/uiActions';
import * as favezActions from '../../redux/fave/faveActions';
import ListShowHeader from '../../components/list-show/listShowHeader/listShowHeader';
import Header from '../../components/globals/header/header';
import HeaderTabs from '../../components/globals/headerTabs/headerTabs';
import FooterTabs from '../../components/globals/footerTabs/footerTabs';
import Line from '../../components/globals/fave/line';
import Info from '../../components/globals/fave/info';
import Card from '../../components/globals/card/card';
import {selfFavezLiked} from '../../utils/userFollow';
import IoniconIcon from 'react-native-vector-icons/Ionicons'
import Divider from '../profile/presenters//Divider';
import * as ListActions from '../../redux/list/listActions';

let selfFavezLikedIds = [];
const window = Dimensions.get('window');
const ListShowView = React.createClass({

    propTypes: {},
    getInitalState() {
        return {query: ''};
    },

    componentWillMount() {
        const {listId} = this.props;
        this.props.dispatch(ListActions.commentsByListAction(listId));
    },

    componentWillReceiveProps(nextProps) {},

    moving() {},

    setFilter(view, tab) {},
    searchSubmit() {
        if (this.props.user.favez) {
            this.props.dispatch(ListActions.postCommentOnListAction(this.state.query, this.props.listId, this.props.user));
        } else {
            Alert.alert("Please Login to post a Comment");
        }
    },

    browseFave(idx) {},
    renderComments() {
        const {commentsByList, user} = this.props;
        if (this.props.commentsByList.length > 0) {
            return (this.props.commentsByList.map(this.renderCommentsList));

        } else {
            return (
                <View style={styles.noResultContainer}>
                    <Text style={styles.noResultText}>There are no comments yet.</Text>
                </View>
            );
        }
    },
    renderCommentsList(comment, index) {
        let ownComment = false;
        if (this.props.user.favez) {
            if (this.props.user.favez.id == comment.author) {
                ownComment = true;
            }
        }

        return (
            <View style={styles.ProfileMessageContainer} key={'comment' + index}>

                {renderIf(!ownComment)(
                    <TouchableOpacity style={styles.ProfileMessageHeader}>
                        <Image source={comment.image
                            ? {
                                uri: comment.image
                            }
                            : require('../../../images/default_list_picture.png')} style={styles.ProfileMessageListPicture}/>
                        <Text style={styles.ProfileMessageListName}>@{comment.username.toUpperCase()}</Text>
                        <Text style={styles.ProfileMessageIndex}>#{index + 1}</Text>
                    </TouchableOpacity>
                )}
                {renderIf(ownComment)(
                    <TouchableOpacity style={styles.ProfileMessageHeader}>
                        <View style={{

                        }}>
                            <Text style={[styles.ProfileMessageIndex,styles.ProfileOwnMessageIndex]}>#{index + 1}</Text>
                        </View>
                    </TouchableOpacity>
                )}

                <View style={ownComment
                    ? styles.ProfileOwnMessageBody
                    : styles.ProfileMessageBody}>
                    <Text style={ownComment
                        ? styles.ProfileOwnMessageMessage
                        : styles.ProfileMessageMessage}>{comment.content}</Text>
                </View>
            </View>
        )
    },
    handleSearchInput(text) {
        this.setState({query: text})

    },

    render() {
        // if (!this.state.ready) return null;
        const {commentsByList} = this.props;
                  return (

        <View style={styles.base}>
            <View style={styles.header}>
                <View style={styles.ListBackgroundImageContainer}>

                    <Image source={require('../../../images/rightImgSample.png')} style={styles.ListBackground}/>
                </View>
                <TouchableOpacity onPress={Actions.pop} style={styles.backBtn}>
                    <IoniconIcon style={styles.headerLeftButtonIcon} name='md-arrow-round-back'/>
                </TouchableOpacity>
                <View style={styles.HeaderContainer}>
                    <Header title={'COMMENTS'} theme={'light'}/>
                </View>
            </View>
{renderIf(!this.props.loading)(
  <ScrollView contentContainerStyle={styles.container}>
      <View>
          {this.renderComments()}

      </View>
  </ScrollView>
)}
{
  renderIf(this.props.loading)(
    <View style={styles.loaderContainer}>
      <ActivityIndicator style={styles.centered} />
    </View>

  )
}

            <View>
                <TextInput style={styles.textInput} keyboardType='default' returnKeyType='go' placeholder='Type or tap a comment to reply' blurOnSubmit={false}  onSubmitEditing={this.searchSubmit} underlineColorAndroid ={'transparent'} onChangeText={(text) => this.handleSearchInput(text)}/>
            </View>
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
        flexGrow: 1,

        // justifyContent: 'center'
    },
    centered: {
      flex: 1
    },
    textInput: {
        fontSize: 16,
        height: 58,
        borderTopWidth: 1,
        borderTopColor: '#FDFDFD',

        width: window.width,
        color: '#CCCCCC',
        padding: 10

    },
    ProfileMessageContainer: {
        flex: 1,
        width: window.width,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#F8F8F8',
        backgroundColor: '#fff'

    },
    ProfileMessageHeader: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 32,
        alignItems: 'flex-end'
    },
    ProfileMessageListPicture: {
        width: 32,
        height: 32,
        borderRadius: 15
    },
    ListBackgroundImageContainer: {
        position: 'absolute',
        width: window.width,
        height: 200,
        overflow: 'hidden'
    },

    ProfileMessageListName: {
        marginLeft: 10,
        fontFamily: 'Hind-Bold',
        fontSize: 17
    },
    ProfileMessageIndex: {
        marginLeft: window.width - 200,
        fontFamily: 'Hind-Bold',
        fontSize: 14,
        marginTop: -10,
        color: '#B8B8B8'

    },
    ProfileOwnMessageIndex:{
        marginLeft: window.width - 150,
    },
    ProfileMessageBody: {

        marginTop: 5,
        backgroundColor: '#efefef',
        padding: 15,
        borderRadius: 12
    },
    ProfileOwnMessageBody: {
        marginTop: 5,
        backgroundColor: '#8cbf28',
        padding: 15,
        borderRadius: 12
    },
    ProfileMessageUserInfo: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    ProfileMessageAvatar: {
        width: 25,
        height: 25,
        borderRadius: 12
    },
    ProfileMessageUsername: {
        marginLeft: 5,
        fontFamily: 'Hind-Bold',
        fontSize: 15,
        color: 'white'
    },
    ProfileMessageMessage: {
        fontFamily: 'Hind-Regular',
        fontSize: 15,
        color: '#000'
    },
    ProfileOwnMessageMessage: {
        fontFamily: 'Hind-Regular',
        fontSize: 15,
        color: '#fff'
    },
    ListBackgroundImage: {
        width: window.width,
        height: 300,
        position: 'absolute',
        top: 0
        // maxHeight: 100
    },
    base: {
        flex: 1,
        backgroundColor: '#f6f6f6'
    },
    contentContainer: {
        flex: 1
    },
    header: {
        backgroundColor: 'white',
        height: 200,

        ...Platform.select({
            ios: {
                paddingTop: 20
            }
        })
    },
    loaderContainer: {
      flex:1,
      alignItems: 'center'
    },
    backBtn: {
        marginTop: 10,
        marginLeft: 10,
        width: 40,
        backgroundColor: 'transparent',
    },
    blockkBtn: {
        justifyContent: 'flex-end'
    },
    headerLeftButtonIcon: {
        width: 35,
        fontSize: 30,
        fontSize: 30,
        color: '#000000',
        alignSelf: 'flex-start'
    },
    actions: {
        backgroundColor: 'white'
    },
    followList: {
        marginTop: 20,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    alreadyWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45
    },
    t: {
        flex: 1,
        paddingLeft: 20,
        fontFamily: 'OpenSans-Semibold',
        fontSize: 16
    },
    favezMemCount: {
        marginRight: 20,
        color: '#cccccc',
        fontSize: 15,
        fontFamily: 'OpenSans-Extrabold'
    },
    rightIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 20
    },
    noResultContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    noResultText: {
        fontSize: 16,
        fontStyle: 'italic',
        margin: 15
    },
    loading: {
        marginTop: 20
    },
    ListBackground: {
        width: window.width,
        height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        zIndex: -1
    },
    HeaderContainer: {
        marginTop: 50
    },
    noResultContainer: {
        padding: 10,
        marginTop: 10
    },
    noResultText: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Hind-Regular'
    }

});

export default ListShowView;
