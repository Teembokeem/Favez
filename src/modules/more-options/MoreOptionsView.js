import React, {PropTypes} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import * as Utils from '../../utils/Utils';
import * as UIActions from '../../redux/ui/uiActions';
import * as ListActions from '../../redux/list/listActions';
import Header from '../../components/globals/header/header';
import MoreOptionsHeader from '../../components/more-options/moreOptionsHeader/moreOptionsHeader';
const window = Dimensions.get('window');

const moreOptionsView = React.createClass({
  propTypes: {},

  newTag: '',

  componentWillMount() {
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
  renderText() {
    const {options} = this.props;
    const {topics} = Utils.toJS(options);

    if (topics && topics.length > 0) {
      switch (topics.length) {
        case 1:
          return topics[0].charAt(0).toUpperCase() + topics[0].slice(1);
        case 2:
          return topics[0].charAt(0).toUpperCase() + topics[0].slice(1) + ', ' + topics[1].charAt(0).toUpperCase(0) + topics[1].slice(1);
        default:
          return topics[0].charAt(0).toUpperCase() + topics[0].slice(1) + ', ' + topics[1].charAt(0).toUpperCase(0) + topics[1].slice(1) + '... and ' + (topics.length - 2) + ' more';
      }
    } else {
      return 'Select Topics';
    }
  },

  render() {
    const {options} = this.props;
    const {tags, topics, description, currTag} = Utils.toJS(options);

    return (
      <View style={styles.container}>
        <MoreOptionsHeader />
        <ScrollView>
          <Header title={'More Options'}/>
          <TouchableOpacity
            style={styles.topicsContainer}
            onPress={Actions.topicSelector}
          >
            <View style={styles.topicsTextContainer}>
              <Text style={styles.topicsLabel}>TOPICS</Text>
              <Text style={styles.topicsList}>{this.renderText()}</Text>
            </View>
            <View style={styles.topicsIconContainer}>
              <EIcon style={styles.topicsArrow} name={'chevron-right'} />
            </View>
          </TouchableOpacity>
          <View
            style={styles.listDescriptionContainer}
          >
            <View style={styles.listDescriptionIconContainer}>
              <Ionicon style={styles.listDescriptionIcon} name={'ios-list'} />
            </View>
            <View style={styles.listDescriptionTextContainer}>
              <Text style={styles.listDescriptionLabel}>LIST DESCRIPTION</Text>
              <TextInput
                autoCapitalize={'sentences'}
                style={styles.listDescriptionList}
                onChangeText={(value) => this.props.dispatch(ListActions.setNewListOptions({'description': value}))}
                placeholder={'This is a Description'}
                value={description}
              />
            </View>
          </View >
          <View
            style={styles.tagsContainer}
          >
            <View style={styles.tagsIconContainer}>
              <MCIcon style={styles.tagsIcon} name={'tag-multiple'} />
            </View>
            <View style={styles.tagsTextContainer}>
              <Text style={styles.tagsLabel}>LIST TAGS</Text>
              <TextInput
                style={styles.tagsList}
                placeholder={'Type and enter'}
                onChangeText={(value) => this.props.dispatch(ListActions.setNewListOptions({'currTag': value}))}
                onSubmitEditing={(event) => this.props.dispatch(ListActions.setNewListOptions({'tags': event.nativeEvent.text}))}
                value={currTag}
              />
            </View>
          </View>
          <View style={styles.tagBox}>
            {tags.map((tag, idx) => (
              <View style={styles.tagContainer}>
                <View style={styles.tagTextContainer}>
                  <Text
                    style={styles.tagText}
                    key={'tag ' + idx}
                  >
                    {'#' + tag.toUpperCase()}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.props.dispatch(ListActions.setNewListOptions({'tags': idx}))}
                >
                  <FAIcon style={styles.tagIcon} name='close'/>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  },
  topicsContainer: {
    flex: 1,
    padding: 7,
    paddingLeft: 13,
    borderBottomWidth: 0.3,
    borderColor: '#a8a8a8',
    flexDirection: 'row'
  },
  topicsTextContainer: {
    flex: 7,
    flexDirection: 'column'
  },
  topicsLabel: {
    fontFamily: 'Hind-Bold',
    color: '#a8a8a8'
  },
  topicsList: {
    fontFamily: 'Hind-Medium',
    fontSize: 16
  },
  topicsIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topicsArrow: {
    fontSize: 30,
    color: '#c8c8c8'
  },
  listDescriptionContainer: {
    flex: 1,
    padding: 7,
    borderBottomWidth: 0.3,
    borderColor: '#a8a8a8',
    flexDirection: 'row'
  },
  listDescriptionTextContainer: {
    flex: 7,
    flexDirection: 'column'
  },
  listDescriptionLabel: {
    fontFamily: 'Hind-Bold',
    color: '#a8a8a8'
  },
  listDescriptionList: {
    marginTop: 7,
    height: 40,
    fontFamily: 'Hind-Medium',
    fontSize: 16
  },
  listDescriptionIconContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 7,
    justifyContent: 'center'
  },
  listDescriptionIcon: {
    fontSize: 35,
    color: '#888888'
  },
  tagsContainer: {
    flex: 1,
    padding: 7,
    flexDirection: 'row'
  },
  tagsTextContainer: {
    flex: 7,
    flexDirection: 'column'
  },
  tagsLabel: {
    fontFamily: 'Hind-Bold',
    color: '#a8a8a8'
  },
  tagsList: {
    marginTop: 5,
    height: 40,
    fontFamily: 'Hind-Medium',
    fontSize: 16
  },
  tagsIconContainer: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 7,
    justifyContent: 'center'
  },
  tagsIcon: {
    fontSize: 30,
    color: '#a8a8a8'
  },
  tagBox: {
    width: window.width,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 7,
  },
  tagContainer: {
    height: 30,
    paddingLeft: 14,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tagTextContainer: {
    borderWidth: 2.5,
    borderRadius: 8,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 3,
    borderColor: '#a8a8a8',
    justifyContent: 'center'
  },
  tagText: {
    fontFamily: 'Hind-Bold',
    color: '#a8a8a8',
    fontSize: 14
  },
  tagIcon: {
    paddingLeft: 5,
    paddingBottom: 3,
    fontSize: 25,
    color: 'red'
  }
});

export default moreOptionsView;
